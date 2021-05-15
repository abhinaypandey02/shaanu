import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
    addBookedSession,
    getBookedSessionsByMonth,
} from "../../utils/firebase/firestore";
import { BookedSession } from "../../interfaces/bookedSession";
import { v4 as uid } from "uuid";

const DATE_BOOLS = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1,
];
const today = new Date();
export default function BooknowPage() {
    const [startDate, setStartDate] = useState<any>(new Date());
    const [loading, setLoading] = useState(true);
    const [availableDays, setAvailableDays] = useState([...DATE_BOOLS]);

    function changeDate(date: Date) {
        if (date < today) return;
        if (
            availableDays[date.getDate() - 1] ||
            startDate.getMonth() !== date.getMonth()
        ) {
            setStartDate(date);
        }
    }
    function updateMonths() {
        setLoading(true);
        getBookedSessionsByMonth(startDate.getMonth() + 1).then((docs) => {
            let temp = [...DATE_BOOLS];
            docs.forEach((doc: BookedSession) => {
                temp[doc.day - 1] = 0;
            });
            setAvailableDays(temp);
            setLoading(false);
        });
    }
    const currMonth = startDate.getMonth();
    useEffect(() => {
        updateMonths();
        //eslint-disable-next-line
    }, [currMonth]);

    function addBookedSessionLocal() {
        const tempSession: BookedSession = {
            id: uid(),
            year: startDate.getYear(),
            month: startDate.getMonth() + 1,
            day: startDate.getDate(),
            hours: startDate.getHours(),
            minutes: startDate.getMinutes(),
        };
        const rand = Math.floor(1000 + Math.random() * 9000);

        addBookedSession(tempSession).then(() => {
            updateMonths();
            alert(`SESSION BOOKED! Your token is ${rand}`);
        });
    }
    return (
        <div className="container-fluid d-flex flex-grow-1  justify-content-center align-items-center">
            <div className="row text-center w-100 ">
                <div className="col-lg-6 "></div>

                <div className="col-lg-6">
                    <h1 className="text-light m-3">BOOK NOW</h1>
                    <br />
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            FULL NAME
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            PHONE NUMBER
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row d-flex mb-3 align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            LOCATION
                        </div>
                        <div className="col-6 ">
                            <textarea
                                className="form-control"
                                aria-label="With textarea"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mb-3 d-flex  align-items-center justify-content-center text-light">
                        <div className="col-3 d-flex justify-content-end ">
                            PICK UP CALL AND DATE
                        </div>
                        <div className="col-6 text-left">
                            <button type="button" className="btn btn-sm">
                                {!loading && (
                                    <DatePicker
                                        startDate={startDate}
                                        showTimeSelect
                                        dayClassName={(day) => {
                                            let className = "";

                                            if (
                                                day.getMonth() ===
                                                startDate.getMonth()
                                            ) {
                                                if (
                                                    availableDays[
                                                        day.getDate() - 1
                                                    ]
                                                ) {
                                                    className += "available ";
                                                } else
                                                    className += "unavailable ";
                                            }
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
                    <button
                        type="submit"
                        className="btn btn-lg btn-outline-light m-3"
                        onClick={() => {

                            addBookedSessionLocal();
                        }}
                        disabled={!availableDays[startDate.getDate() - 1]}
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
}
