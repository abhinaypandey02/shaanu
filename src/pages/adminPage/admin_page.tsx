import BookedSessions from "./bookedSessions/bookedSessions";
import CallbackRequests from "./callbackRequests/callback_requests";
import AddJob from "./jobs/add_job";
import JobsTab from "./jobs/jobs";
import UsersTab from "./users/users";
import { useHistory, useParams } from "react-router-dom";
import ROUTES_META from "../../metadata/routes_meta";
import { useEffect, useState } from "react";
import {
  getAllBookedSessions,
  getCallbackRequests,
} from "../../utils/firebase/firestore";
import { BookedSession } from "../../interfaces/bookedSession";
import CallbackRequest from "../../interfaces/callbackRequest";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

export default function AdminPage() {
  const params: any = useParams();
  const his = useHistory();
  const tab = "/" + params.category;

  const [bookedSessions, setBookedSessions] = useState<BookedSessionWithDate[]>(
    []
  );
  const [callbackRequests, setCallbackRequests] = useState<CallbackRequest[]>(
    []
  );
  useEffect(() => {
    getCallbackRequests().then((list: any[]) => {
      list = list.map((ele) => ({ ...ele, date: new Date(ele.date) }));
      list.sort((a, b) => a.date.getTime() - a.date.getTime());
      setCallbackRequests(list);
    });
  }, []);
  useEffect(() => {
    getAllBookedSessions().then((list: any[]) => {
      list = list.map((ele) => ({
        ...ele,
        date: new Date(
          ele.year,
          ele.month - 1,
          ele.day,
          ele.hours,
          ele.minutes,
          0
        ),
      }));
      list.sort((a, b) => a.date.getTime() - a.date.getTime());
      setBookedSessions(list);
    });
  }, []);

  function setTab(tab: string) {
    his.push(tab);
  }

  function GetTab({ name }: { name: string }) {
    switch (name) {
      case ROUTES_META.adminUsers:
        return (
          <UsersTab
            bookedSessions={bookedSessions}
            callbackRequests={callbackRequests}
          />
        );
      case ROUTES_META.adminCallback:
        return <CallbackRequests callbackRequests={callbackRequests} />;
      case ROUTES_META.adminJobs:
        return <JobsTab setTab={setTab} />;
      case ROUTES_META.adminAddJob:
        return <AddJob setTab={setTab} />;
      case ROUTES_META.adminBooked:
        return <BookedSessions bookedSessions={bookedSessions} />;
    }
    return null;
  }

  return (
    <div className="container-fluid">
      <div className="display-1 text-center text-white">ADMIN CONSOLE</div>
      <GetTab name={tab} />
    </div>
  );
}
