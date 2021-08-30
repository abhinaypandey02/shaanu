import "react-datepicker/dist/react-datepicker.css";
import { addBookedSession, getToken } from "../../utils/firebase/firestore";
import { BookedSession } from "../../interfaces/bookedSession";
import { v4 as uid } from "uuid";
import BookNowForm from "../../components/booknowForm/booknow_form";
import { useHistory } from "react-router";

export default function BooknowPage() {
  const history = useHistory();

  async function addBookedSessionLocal({
    fullname,
    phone,
    location,
    date,
  }: {
    fullname: string;
    phone: number;
    location: string;
    date: Date;
  }) {
    const rand = await getToken();
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
      freeServices: [],
    };
    await addBookedSession(tempSession);
    console.log("UPDATES MONTHS");
    await history.push({
      pathname: "/appointmentslot",
      state: {
        tempSession,
      },
    });
  }

  return (
    <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
      <div className="row text-center w-100 ">
        <BookNowForm onSuccess={addBookedSessionLocal} />
      </div>
    </div>
  );
}
