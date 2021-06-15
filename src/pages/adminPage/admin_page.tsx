import {  useState } from "react";
import { Button } from "react-bootstrap";
import BookedSessions from "./bookedSessions/bookedSessions";
import CallbackRequests from "./callbackRequests/callback_requests";
import AddJob from "./jobs/add_job";
import JobsTab from "./jobs/jobs";
import UsersTab from "./users/users";

export default function AdminPage() {
    const [tab, setTab] = useState("jobs");

    function TabButton({ name }: { name: string }) {
        return (
            <Button
                className="m-2"
                onClick={() => setTab(name)}
                variant={tab === name ? "light" : "dark"}
            >
                {name}
            </Button>
        );
    }
    function GetTab({ name }: { name: string }) {
        switch (name) {
            case "users":
                return <UsersTab />;
            case "callbackRequests":
                return <CallbackRequests />;
            case "jobs":
                return <JobsTab setTab={setTab}/>;
            case "addJob":
                return <AddJob setTab={setTab}/>;
            case "bookedSessions":
                return <BookedSessions setTab={setTab}/>;    
        }
        return null;
    }
    return (
        <div className="container">
            <div className="display-1 text-center text-white">ADMIN CONSOLE</div>

            <TabButton name="jobs" />
            <TabButton name="users" />
            <TabButton name="callbackRequests" />
            <TabButton name="bookedSessions" />

            <GetTab name={tab} />
        </div>
    );
}
