import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useUser } from "../../contexts/user_context"
import NotificationBar from "../../components/notificationbar/notification_bar"
import { signOut } from "../../utils/firebase/auth"
import CreateCarProfile from "../../components/createCarProfile/create_car_profile"
import "./profile_page.css"
import UploadDocuments from "../../components/uploadDocuments/upload_documents"
import { CarProfile } from "../../interfaces/car"
import UserInterface from "../../interfaces/user"
import { setUserDocument } from "../../utils/firebase/firestore"

export default function ProfilePage() {
    const [user, setUser] = useUser()
    const [showCreateCarProfile, setShowCreateCarProfile] = useState(false)
    const [currentCarProfile, setCurrentCarProfile] = useState(
        user && user.carProfiles.length > 0 ? user.carProfiles[0] : null
    )
    const [editCarProfile, setEditCarProfile] = useState(false)

    function closeModal() {
        setShowCreateCarProfile(false)
        setEditCarProfile(false)
    }

    function cloudUpdateCarProfile(carProfile: CarProfile) {
        if (user) {
            let carProfileIndex = user.carProfiles.findIndex(
                (car) => car.id === carProfile.id
            )
            if (carProfileIndex !== -1) {
                setUser((oldUser: UserInterface) => {
                    oldUser.carProfiles[carProfileIndex] = carProfile
                    setUserDocument({ ...oldUser })
                    return { ...oldUser }
                })
            }
        }
    }

    useEffect(() => {
        if (user && user.carProfiles.length > 0 && !currentCarProfile)
            setCurrentCarProfile(user.carProfiles[0])
    }, [user])
    useEffect(() => {
        setShowCreateCarProfile(false)
    }, [user])
    if (!user) return null
    return (
        <div className="container-fluid px-5">
            <Modal
                dialogClassName="dialogClass"
                show={showCreateCarProfile || editCarProfile}
                centered
                onHide={closeModal}
            >
                <Modal.Header
                    className="bg-warning border border-warning rounded-0 text-dark"
                    closeButton
                >
                    {editCarProfile ? "Edit" : "Create"} Car Profile
                </Modal.Header>
                <Modal.Body className="bg-dark text-warning">
                    <CreateCarProfile
                        closeModal={closeModal}
                        carProfile={editCarProfile ? currentCarProfile : null}
                    />
                </Modal.Body>
            </Modal>
            <div className="row-fluid px-5 mb-4 text-center">
                <h1 className="text-warning">YOUR PROFILE</h1>
            </div>

            <div className="container-fluid  p-2 mb-5 ">
                <div className="row">
                    {user.carProfiles.length > 0 && (
                        <div className="col-md-3 mr-auto">
                            <div className="text-white">Current Profile</div>
                            <select
                                className="form-control bg-warning text-dark rounded-0"
                                onChange={(e) =>
                                    setCurrentCarProfile(
                                        user.carProfiles[parseInt(e.target.value)]
                                    )
                                }
                            >
                                {user.carProfiles.map((profile, index) => (
                                    <option key={profile.id} value={index}>
                                        {profile.brand.toUpperCase()} {profile.model.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                            <Button
                                className="bg-outline-warning  rounded-0 my-2"
                                onClick={() => setEditCarProfile(true)}
                            >
                                Edit Car Profile
                            </Button>
                        </div>
                    )}
                    <div className="col-md-6 mx-auto text-center">
                        <button
                            onClick={() => setShowCreateCarProfile(true)}
                            className="btn m-2 btn-warning rounded-0"
                        >
                            {currentCarProfile ? "ADD CAR PROFILE" : "CREATE CAR PROFILE"}
                        </button>
                        <button onClick={signOut} className="btn m-2 btn-danger rounded-0">
                            SIGN OUT
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 m-0 d-flex flex-column flex-wrap align-items-center">
                    {currentCarProfile && currentCarProfile.imageURL && (
                        <img
                            src={currentCarProfile.imageURL}
                            alt={currentCarProfile.brand + currentCarProfile.model}
                            className="img-fluid mt-0 mb-2 border-warning border rounded-0 w-100"
                        />
                    )}
                    <div className="row w-100 mt-2">
                        {currentCarProfile && (
                            <table className="table text-light text-center table-bordered">
                                <tbody className="">
                                <tr>
                                    <th className="text-warning " scope="row">
                                        CAR'S NAME
                                    </th>
                                    <td className="text-capitalize">
                                        {currentCarProfile.brand} {currentCarProfile.model}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-warning" scope="row">
                                        REGISTRATION NUMBER.
                                    </th>
                                    <td>{currentCarProfile.regNo}</td>
                                </tr>
                                <tr>
                                    <th className="text-warning" scope="row">
                                        NEXT SERVICE DUE DATE
                                    </th>
                                    <td>12/24/2002</td>
                                </tr>
                                <tr>
                                    <th className="text-warning" scope="row">
                                        INSURANCE DUE DATE
                                    </th>
                                    <td>{currentCarProfile.insuranceDate}</td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                {currentCarProfile && (
                    <div className="col-lg-8 d-flex flex-column flex-wrap ">
                        <NotificationBar currentCarProfile={currentCarProfile} />
                        <UploadDocuments
                            cloudUpdateCarProfile={cloudUpdateCarProfile}
                            setCurrentCarProfile={setCurrentCarProfile}
                            currentCarProfile={currentCarProfile}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
