import BookedSessions from "./bookedSessions/bookedSessions";
import CallbackRequests from "./callbackRequests/callback_requests";
import AddJob from "./jobs/add_job";
import JobsTab from "./jobs/jobs";
import UsersTab from "./users/users";
import { useHistory, useParams } from "react-router-dom";
import ROUTES_META from "../../metadata/routes_meta";

export default function AdminPage() {
  const params: any = useParams();
  const his = useHistory();
  console.log(params);
  const tab = "/" + params.category;

  function setTab(tab: string) {
    his.push(tab);
  }

  // const [tab, setTab] = useState("jobs");

  // function TabButton({ name }: { name: string }) {
  //   return (
  //     <Button
  //       className="m-2"
  //       onClick={() => setTab(name)}
  //       variant={tab === name ? "light" : "dark"}
  //     >
  //       {name}
  //     </Button>
  //   );
  // }

  function GetTab({ name }: { name: string }) {
    switch (name) {
      case ROUTES_META.adminUsers:
        return <UsersTab />;
      case ROUTES_META.adminCallback:
        return <CallbackRequests />;
      case ROUTES_META.adminJobs:
        return <JobsTab setTab={setTab} />;
      case ROUTES_META.adminAddJob:
        return <AddJob setTab={setTab} />;
      case ROUTES_META.adminBooked:
        return <BookedSessions />;
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
