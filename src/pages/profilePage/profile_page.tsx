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
import { useHistory } from "react-router"
import ROUTES_META from "../../metadata/routes_meta"
import { useGlobalState } from "../../contexts/global_state"

export default function ProfilePage() {
    const his = useHistory()
    const [user, setUser] = useUser()
    const [, dispatch] = useGlobalState()
    const [showCreateCarProfile, setShowCreateCarProfile] = useState(false)
    const [currentCarProfile, setCurrentCarProfile] = useState(
        user && user.carProfiles.length > 0 ? user.carProfiles[0] : null
    )
    const [editCarProfile, setEditCarProfile] = useState(false)

    function closeModal() {
        setShowCreateCarProfile(false)
        setEditCarProfile(false)
    }
    function deleteCarProfile(){
        if(currentCarProfile){
            const {id}=currentCarProfile;
            setUser((old:UserInterface)=>{
                old.carProfiles=old.carProfiles.filter((profile)=>profile.id!==id);
                setCurrentCarProfile(old.carProfiles.length > 0 ? old.carProfiles[0] : null);
                setUserDocument({ ...old })
                return {...old}
            })
        }

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
    useEffect(()=>{
        if (currentCarProfile) {
            dispatch({ type: "SET_BRAND", payload: currentCarProfile.brand })
            dispatch({ type: "SET_MODEL", payload: currentCarProfile.model })
            dispatch({ type: "SET_TYPE", payload: currentCarProfile.fuel })
        }
    },[currentCarProfile])
    useEffect(() => {
        if (user && user.carProfiles.length > 0) {
            if (currentCarProfile) {
                const newProfile = user.carProfiles.find(car => car.id === currentCarProfile.id)
                console.log(newProfile, currentCarProfile, user.carProfiles)
                if (newProfile) setCurrentCarProfile(newProfile)
            } else setCurrentCarProfile(user.carProfiles[0])
        }
    }, [user])
    useEffect(() => {
        setShowCreateCarProfile(false)
    }, [user])
    if (!user) return null

    function onCartClick() {
        his.push(ROUTES_META.services)
    }

    return (
        <div className="container-fluid">
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
                        setCurrentCarProfile={setCurrentCarProfile}
                        closeModal={closeModal}
                        carProfile={editCarProfile ? currentCarProfile : null}
                    />
                </Modal.Body>
            </Modal>
            <div className="row-fluid mb-4 text-center">
                <h1 className="text-warning">YOUR PROFILE</h1>
            </div>

            <div className="container-fluid mb-5 ">
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
                                value={user.carProfiles.findIndex(car => car.id === currentCarProfile?.id)}
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
                        {currentCarProfile&&<button onClick={onCartClick} className="btn m-2 btn-outline-warning rounded-0">
                            CART
                        </button>}
                        {currentCarProfile&&<button onClick={deleteCarProfile} className="btn m-2 btn-outline-danger rounded-0">
                            DELETE PROFILE
                        </button>}
                        <button onClick={signOut} className="btn m-2 btn-danger rounded-0">
                            SIGN OUT
                        </button>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 d-flex flex-column flex-wrap align-items-center">
                    {currentCarProfile && currentCarProfile.imageURL && (
                        <img
                            src={currentCarProfile.imageURL}
                            alt={currentCarProfile.brand + currentCarProfile.model}
                            className="img-fluid mt-0 mb-2 border-warning border rounded-0 w-100"
                        />
                    )}
                    <div className="row mt-2">
                        <div className="col-12 px-3">
                        {currentCarProfile && (
                            <table className="table text-light text-center table-bordered">
                                <tbody>
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
                                    <td className='text-wrap'>{currentCarProfile.regNo}</td>
                                </tr>
                                <tr>
                                    <th className="text-warning" scope="row">
                                        NEXT SERVICE DUE DATE
                                    </th>
                                    <td>12/24/2002</td>
                                </tr>
                                {currentCarProfile.insuranceDate && <tr>
                                    <th className="text-warning" scope="row">
                                        INSURANCE DUE DATE
                                    </th>
                                    <td>{new Date(currentCarProfile.insuranceDate).toLocaleDateString()}</td>
                                </tr>}
                                </tbody>
                            </table>
                        )}
                        </div>
                    </div>
                </div>

                {currentCarProfile && (
                    <div className="col-xl-8 d-flex flex-column flex-wrap ">
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
