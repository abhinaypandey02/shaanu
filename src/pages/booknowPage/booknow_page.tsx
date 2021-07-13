import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import {
    addBookedSession,
    getBookedSessionsByMonth,
} from "../../utils/firebase/firestore";
import { BookedSession } from "../../interfaces/bookedSession";
import { v4 as uid } from "uuid";

const today = new Date();

export default function BooknowPage() {
    const history = useHistory();
    let initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 1);
    initialDate.setHours(0);
    initialDate.setMinutes(0);
    const [startDate, setStartDate] = useState<Date>(initialDate);
    const [loading, setLoading] = useState(true);
    const [availableDays, setAvailableDays] = useState<any>({});
    const [disabled, setDisabled] = useState(false);
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    function checkDisabled() {
        if (availableDays[startDate.getDate().toString()]) {
            if (availableDays[startDate.getDate().toString()].length === 24) {
                return true;
            }
            if (
                availableDays[startDate.getDate().toString()].some(
                    (time: any) => time.hours === startDate.getHours()
                )
            ) {
                return true;
            }
        }
        return false;
    }

    function nextAvailableDay(date: Date, startHour: number) {
        while (
            availableDays[date.getDate().toString()] &&
            availableDays[date.getDate().toString()].length === 24
        ) {
            startHour = 0;
            date.setDate(date.getDate() + 1);
        }
        date.setHours(startHour);
        while (
            availableDays[date.getDate().toString()] &&
            availableDays[date.getDate().toString()].some(
                (time: any) => time.hours === date.getHours()
            )
        ) {
            date.setHours(date.getHours() + 1);
        }

        return new Date(date.getTime());
    }

    function changeDate(date: Date) {
        if (date < today) return;

        setStartDate(nextAvailableDay(date, date.getHours()));
    }
    function updateMonths() {
        setLoading(true);
        getBookedSessionsByMonth(startDate.getMonth() + 1).then((docs) => {
            let temp: any = {};
            docs.forEach((doc: BookedSession) => {
                if (temp[doc.day.toString()]) {
                    temp[doc.day.toString()].push(doc);
                } else temp[doc.day.toString()] = [doc];
            });
            setAvailableDays({ ...temp });

            setLoading(false);
        });
    }
    const currMonth = startDate.getMonth();
    useEffect(() => {
        updateMonths();
        //eslint-disable-next-line
    }, [currMonth]);
    useEffect(() => {
        setDisabled(checkDisabled());
        //eslint-disable-next-line
    }, [startDate, availableDays]);
    useEffect(() => {
        setStartDate((old) => nextAvailableDay(old, 0));
        //eslint-disable-next-line
    }, [availableDays]);

    function addBookedSessionLocal() {
        const rand = Math.floor(1000 + Math.random() * 9000);

        const tempSession: BookedSession = {
            id: uid(),
            fullname,
            location,
            phone,
            dateTime:startDate.getTime(),
            token:rand,
            year: startDate.getFullYear(),
            month: startDate.getMonth() + 1,
            day: startDate.getDate(),
            hours: startDate.getHours(),
            minutes: startDate.getMinutes(),
        };

        addBookedSession(tempSession).then(() => {
            updateMonths();
            history.push({pathname:"/appointmentslot",state:{
                    tempSession
                }});
        });
    }
    return (
        <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
            <div className="row text-center w-100 ">

                <div className="col-lg-12 pl-2 alert alert-warning text-dark rounded-0">
                    <h1 className="bg-warning ml-2 my-2">BOOK NOW</h1>
                    <br />
                   
                        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                FULL NAME
                            </div>
                            <div className="col-md-8">
                                <input
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    type="text"
                                    className="form-control bg-transparent border border-warning rounded-0 "
                                />
                            </div>
                        </div>
                        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                PHONE NUMBER
                            </div>
                            <div className="col-md-8">
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    className="form-control bg-transparent border border-warning rounded-0 "
                                />
                            </div>
                        </div>
                        <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                                LOCATION
                            </div>
                            <div className="col-md-8">
                                <textarea
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="form-control bg-transparent border border-warning rounded-0 "
                                />
                            </div>
                        </div>
                        
                    <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
                        <div className="col-md-4 mb-3 mb-2 bg-warning text-dark text-left ">
                            PICK UP CALL AND DATE
                        </div>
                        <div className="col-md-8 text-md-center text-left">
                            <button type="button" className="btn rounded-0 p-0 btn-outline-warning">
                                {!loading && (
                                    <DatePicker
                                        
                                        className='rounded-0 m-2 alert alert-warning '
                                        startDate={startDate}
                                        showTimeSelect
                                        dateFormat="dd-MM-yyyy HH:mm"
                                        timeIntervals={60}
                                        timeClassName={(day) => {
                                            let className = "";
                                            if (
                                                availableDays[
                                                    day.getDate().toString()
                                                ]
                                            ) {
                                                if (
                                                    availableDays[
                                                        day.getDate().toString()
                                                    ].some(
                                                        (time: any) =>
                                                            time.hours ===
                                                            day.getHours()
                                                    )
                                                ) {
                                                    className += "unavailable";
                                                } else className += "available";
                                            } else className += "available";
                                            if (
                                                startDate.getHours() ===
                                                day.getHours()
                                            ) {
                                                className += " selectedTime ";
                                            }
                                            return className;
                                        }}
                                        dayClassName={(day) => {
                                            let className = "";

                                            if (
                                                availableDays[
                                                    day.getDate().toString()
                                                ]
                                            ) {
                                                if (
                                                    availableDays[
                                                        day.getDate().toString()
                                                    ].length === 24
                                                ) {
                                                    className += "unavailable ";
                                                } else
                                                    className += "available ";
                                            } else className += "available ";
                                            if (day < today) {
                                                className += "disabled ";
                                            }
                                            return className;
                                        }}
                                        selected={startDate}
                                        onChange={changeDate}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <button
                            type="submit"
                            className="btn btn-lg btn-warning rounded-0 ml-auto m-3"
                            onClick={() => {

                                addBookedSessionLocal();
                            }}
                            disabled={disabled}
                        >
                            Book
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
