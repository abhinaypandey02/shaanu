import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./100pages.css";
import { useState } from "react";

export default function FreeServices() {
  const history = useHistory();
  const [selectedServices, setSelectedServices] = useState([
    null,
    null,
    null,
    null,
  ]);
  const groups = [
    {
      name: "Group 1",
      id: "group1",
      services: [
        {
          name: "One",
          id: "one",
        },
        {
          name: "Two",
          id: "two",
        },
        {
          name: "Three",
          id: "three",
        },
        {
          name: "Four",
          id: "four",
        },
      ],
    },
    {
      name: "Group 2",
      id: "group2",
      services: [
        {
          name: "One",
          id: "one",
        },
        {
          name: "Two",
          id: "two",
        },
        {
          name: "Three",
          id: "three",
        },
        {
          name: "Four",
          id: "four",
        },
      ],
    },
    {
      name: "Group 3",
      id: "group3",
      services: [
        {
          name: "One",
          id: "one",
        },
        {
          name: "Two",
          id: "two",
        },
        {
          name: "Three",
          id: "three",
        },
        {
          name: "Four",
          id: "four",
        },
      ],
    },
    {
      name: "Group 4",
      id: "group4",
      services: [
        {
          name: "One",
          id: "one",
        },
        {
          name: "Two",
          id: "two",
        },
        {
          name: "Three",
          id: "three",
        },
        {
          name: "Four",
          id: "four",
        },
      ],
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row-fluid text-light text-center">
        <h1>CHOOSE ANY FREE SERVICE</h1>
      </div>
      <div className="row">
        {groups.map((group) => (
          <div className="col-md-3">
            <div className="container-fluid p-3 d-flex flex-wrap flex-column">
              <div className="row bg-warning">
                <h1 className="mx-auto my-2">{group.name}</h1>
              </div>

              <div className="row border border-warning text-light">
                <ul className="list-group border border-dark p-3 text-dark w-100 bg-dark rounded-0">
                  {group.services.map((service) => (
                    <li className="list-group-item border border-dark bg-warning">
                      <div className="col-12 my-2">
                        <label className="container1">
                          {service.name}
                          <input type="radio" name={service.id} />
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
        <div className="text-center w-100">
          <Button
            onClick={() => history.push("/appointmentslot")}
            variant="outline-warning rounded-0 btn-lg m-3"
          >
            BOOK FREE APPOINTMENT
          </Button>
        </div>
      </div>
    </div>
  );
}
