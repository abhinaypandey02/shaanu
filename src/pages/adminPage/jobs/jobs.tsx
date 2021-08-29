import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import JobInterface from "../../../interfaces/job";
import { deleteJob } from "../../../utils/firebase/firestore";
import "./jobs.css";
import ROUTES_META from "../../../metadata/routes_meta";

export default function JobsTab({
  setTab,
  jobs,
  setJobs,
}: {
  setTab: Function;
  jobs: JobInterface[];
  setJobs: any;
}) {
  const his = useHistory();
  return (
    <div className="container-fluid">
      <div className="row-fluid p-3 text-center text-light">
        <h1>JOBS</h1>
      </div>
      <div>
        <Button
          onClick={() => setTab(ROUTES_META.admin + ROUTES_META.adminAddJob)}
        >
          Add Job
        </Button>
      </div>
      <br />
      <div className="container-fluid">
        <table className="table text-white ">
          <thead>
            <tr className="jobTable alert alert-dark">
              <th>Registration No</th>
              <th>Odometer</th>
              <th>Avg KMS/day</th>
              <th>Car Maker</th>
              <th>Car Model</th>
              <th>Car Year</th>
              <th>Vehicle Colour</th>
              <th>Fuel Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job: JobInterface) => (
              <tr key={job.id} className="row-fluid jobTable">
                <td>{job.regNo}</td>
                <td>{job.odometer}</td>
                <td>{job.avg}</td>
                <td className="text-capitalize">{job.brand}</td>
                <td className="text-capitalize">{job.model}</td>
                <td>{job.year}</td>
                <td>{job.color}</td>
                <td className="text-capitalize">{job.fuel}</td>
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
                        setJobs((old: JobInterface[]) =>
                          old.filter((job2: JobInterface) => job2.id !== job.id)
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
