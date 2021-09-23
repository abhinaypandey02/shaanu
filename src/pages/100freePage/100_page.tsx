import { useHistory } from "react-router"
import "./100pages.css"
import { useState } from "react"
import BookNowForm from "../../components/booknowForm/booknow_form"
import { addBookedSession, getToken, setUserDocument } from "../../utils/firebase/firestore"
import { BookedSession } from "../../interfaces/bookedSession"
import { v4 as uid } from "uuid"
import { useUser } from "../../contexts/user_context"
import UserInterface from "../../interfaces/user"

interface Service {
    name: string;
    id: string;
}

interface Group {
    name: string;
    id: string;
    services: Service[];
}

const groups: Group[] = [
    {
        name: "Group 1",
        id: "group1",
        services: [
            {
                name: "THROTTLE BODY CLEAN",
                id: "one"
            },
            {
                name: "AC GAS TOP-UP 200GM",
                id: "two"
            },
            {
                name: "CAR TOUCHUP(PAINT)",
                id: "three"
            },
            {
                name: "TOP WASHING",
                id: "four"
            }
        ]
    },
    {
        name: "Group 2",
        id: "group2",
        services: [
            {
                name: "PAID SERVICE DISCOUNT LABOUR 5%",
                id: "one"
            },
            {
                name: "ALIGNMENT",
                id: "two"
            },
            {
                name: "VACUUM CLEANING",
                id: "three"
            },
            {
                name: "BREAK CLEAN",
                id: "four"
            }
        ]
    },
    {
        name: "Group 3",
        id: "group3",
        services: [
            {
                name: "BRAKE CALIPER GREASING",
                id: "one"
            },
            {
                name: "ALL CAR LUBRICATION",
                id: "two"
            },
            {
                name: "DASHBOARD POLISH",
                id: "three"
            },
            {
                name: "SPARK PLUG CLEAN",
                id: "four"
            }
        ]
    },
    {
        name: "Group 4",
        id: "group4",
        services: [
            {
                name: "GENERAL CHECKUP",
                id: "one"
            },
            {
                name: "AIR FILTER CLEAN",
                id: "two"
            },
            {
                name: "CABIN FILTER CLEAN",
                id: "three"
            },
            {
                name: "TYRE CLEANING",
                id: "four"
            }
        ]
    }
]
const COOLDOWN_DAYS = 60
export default function FreeServices() {
    const history = useHistory()
    const [selectedServices, setSelectedServices] = useState<({ group: Group["id"]; service: Service } | null)[]>([null, null, null, null])
    const allSelected = !selectedServices.some((x) => x === null)
    const [user, setUser] = useUser()
    const daysSinceLastBookedFreeService = user?.lastFreeServiceTime ? (new Date().getTime() - user.lastFreeServiceTime) / 86400000 : COOLDOWN_DAYS + 1
    const diff = COOLDOWN_DAYS - daysSinceLastBookedFreeService

    async function add100FreeService({
                                         fullname,
                                         phone,
                                         location,
                                         date
                                     }: {
        fullname: string;
        phone: number;
        location: string;
        date: Date;
    }) {
        if (!user) return
        if (diff > 0) {
            alert("You can only book a free service once in " + COOLDOWN_DAYS + " days")
            return
        }
        const rand = await getToken()

        const filteredServices: any[] = selectedServices.filter((f) => f !== null)
        if (filteredServices.length !== 4) {
            alert(
                "INTERNAL ERROR. PLEASE REPORT TO ADMIN. ERROR CODE: FREE_SERVICES_NOT_4"
            )
            return
        }
        const tempSession: BookedSession = {
            id: uid(),
            fullname,
            location,
            phone,
            dateTime: date.getTime(),
            token: rand,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            freeServices: filteredServices
        }
        await addBookedSession(tempSession)
        setUser((oldUser: UserInterface) => {
            oldUser.lastFreeServiceTime = new Date().getTime()
            setUserDocument(oldUser)
            return { ...oldUser }
        })
        await history.push({
            pathname: "/appointmentslot",
            state: {
                tempSession
            }
        })
    }

    return (
        <div className="container-fluid">
            <div className="row-fluid text-light text-center">
                <h1>CHOOSE ANY FREE SERVICE</h1>
            </div>
            <div className="row">
                {groups.map((group, index) => (
                    <div className="col-lg-3" key={group.id}>
                        <div className="container-fluid p-3 d-flex flex-wrap flex-column">
                            <div className="row bg-warning">
                                <h1 className="mx-auto my-2">{group.name}</h1>
                            </div>

                            <div className="row border border-warning ">
                                <ul className="list-group border border-dark w-100 bg-dark p-3 h-100 rounded-0">
                                    {group.services.map((service) => (
                                        <li key={service.id} className="list-group-item h-100 border border-dark bg-warning">
                                            <div className="col-12 h-100 my-2">
                                                <label className="container1 h-100">
                                                    {service.name}
                                                    <input
                                                        onChange={(e) => {
                                                            if (e.target.checked)
                                                                setSelectedServices((old) => {
                                                                    old[index] = { group: group.id, service }
                                                                    return [...old]
                                                                })
                                                        }}
                                                        type="radio"
                                                        name={group.id}
                                                    />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
                    <div className="row mt-4 text-center w-100 ">
                        {!user && <h2 className="text-center text-danger w-100">
                            PLEASE SIGN IN TO BOOK FREE SERVICE
                        </h2>}
                        {user && diff <= 0 && allSelected && <BookNowForm onSuccess={add100FreeService} />}
                        {user && diff <= 0 && !allSelected && (
                            <h2 className="text-center text-warning w-100">
                                PLEASE SELECT SERVICES FROM EACH GROUP TO CONTINUE
                            </h2>
                        )}
                        {user && diff > 0 && <h2 className="text-center text-danger w-100">
                            YOU CAN BOOK YOUR NEXT FREE SERVICE IN {diff.toFixed()} DAYS
                        </h2>}
                    </div>
                </div>
            </div>
        </div>
    )
}
