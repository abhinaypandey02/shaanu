import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import JobInterface from "../../../interfaces/job";
import { getJobs, deleteJob } from "../../../utils/firebase/firestore";
import "./jobs.css";

export default function JobsTab({ setTab }: { setTab: Function }) {
    const [jobs, setJobs] = useState<JobInterface[]>([]);
    const his = useHistory();
    useEffect(() => {
        getJobs().then((list: any[]) => {
            setJobs(list);
        });
    }, []);
    return (
        <div className='container-fluid'>
            <div className="row-fluid p-3 text-center text-light">
                <h1>JOBS</h1>
            </div>
            <div>
                <Button onClick={() => setTab("addJob")}>Add Job</Button>
                
            </div>
            <br/>
            <div className="container-fluid">
            <table className="table text-white ">
                <thead>
                    <tr className="jobTable alert alert-dark">
                        <th>Registration No</th>
                        <th>Odometer</th>
                        <th>Avg KMS/day</th>
                        <th>Car Maker</th>
                        <th>Car Model</th>
                        <th>Car Variant</th>
                        <th>Car Year</th>
                        <th>Vehicle Colour</th>
                        <th>Fuel Type</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobs.map((job: any) => (
                        <tr key={job.id} className="row-fluid jobTable">
                            <td>{job["Registration No"]}</td>
                            <td>{job["Odometer"]}</td>
                            <td>{job["Avg KMS/day"]}</td>
                            <td>{job["Car Maker"]}</td>
                            <td>{job["Car Model"]}</td>
                            <td>{job["Car Variant"]}</td>
                            <td>{job["Car Year"]}</td>
                            <td>{job["Vehicle Colour"]}</td>
                            <td>{job["Fuel Type"]}</td>
                            <td>
                                <Button
                                    onClick={() => his.push("/job/" + job.id)}
                                    variant="warning"
                                >
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() =>
                                        deleteJob(job.id).then(() =>
                                            setJobs((old) =>
                                                old.filter(
                                                    (job2) => job2.id !== job.id
                                                )
                                            )
                                        )
                                    }
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
}
