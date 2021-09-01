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
  getCheckouts,
  getJobs,
} from "../../utils/firebase/firestore";
import { BookedSession } from "../../interfaces/bookedSession";
import CallbackRequest from "../../interfaces/callbackRequest";
import { useUser } from "../../contexts/user_context";
import JobInterface from "../../interfaces/job";
import { Checkout } from "../../interfaces/checkout";
import Checkouts from "./checkouts/checkouts";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

const whitelist = [1234567890];

export default function AdminPage() {
  const params: any = useParams();
  const his = useHistory();
  const tab = "/" + params.category;
  const [user] = useUser();
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [bookedSessions, setBookedSessions] = useState<BookedSessionWithDate[]>(
    []
  );
  const [callbackRequests, setCallbackRequests] = useState<CallbackRequest[]>(
    []
  );
  const [checkouts, setCheckouts] = useState<Checkout[]>([]);
  console.log(user);
  useEffect(() => {
    if (user && whitelist.includes(user.phone)) {
      getCallbackRequests().then((list: any[]) => {
        list = list.map((ele) => ({ ...ele, date: new Date(ele.date) }));
        list.sort((a, b) => a.date.getTime() - a.date.getTime());
        setCallbackRequests(list);
      });
      getAllBookedSessions().then((list: BookedSession[]) => {
        const LIST: BookedSessionWithDate[] = list.map(
          (ele: BookedSession) => ({
            ...ele,
            date: new Date(ele.dateTime),
          })
        );
        LIST.sort((a, b) => a.date.getTime() - b.date.getTime());
        setBookedSessions(LIST);
      });
      getJobs().then((list: any[]) => {
        setJobs(list);
      });
      getCheckouts().then((list: any[]) => {
        list.sort((a, b) => b.timestamp - a.timestamp);
        setCheckouts(list);
      });
    } else {
      his.push("/");
      alert("UNAUTHORIZED");
    }
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
        return <JobsTab setJobs={setJobs} jobs={jobs} setTab={setTab} />;
      case ROUTES_META.adminAddJob:
        return <AddJob setTab={setTab} />;
      case ROUTES_META.adminBooked:
        return <BookedSessions bookedSessions={bookedSessions} />;
      case ROUTES_META.adminCheckouts:
        return <Checkouts checkouts={checkouts} />;
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
