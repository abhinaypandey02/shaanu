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
        
      </div>
      <div className="row">
      <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
 

      <div className="row mt-4 text-center w-100 ">
        <form
          noValidate={true}
       
          className="col-lg-12 pl-2 alert alert-warning text-dark rounded-0"
        >
          <h1 className="bg-warning ml-2 my-2">100% FREE FORM</h1>
          <br />

       
            <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
              <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                FULL NAME
              </div>
              <div className="col-md-8">
                <input
                  placeholder="Full Name"
              
                  type="text"
                  className="form-control bg-transparent border border-warning rounded-0 "
                />
                <div className="small text-danger text-left">
               
                </div>
              </div>
            </div>

            <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
              <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
                PHONE NUMBER
              </div>
              <div className="col-md-8">
                <input
            
                  type="number"
                  className="form-control bg-transparent border border-warning rounded-0 "
                  placeholder="Phone Number"
                />
                <div className="small text-danger text-left">
                
                </div>
              </div>
            </div>
         
          <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-2 bg-warning text-dark text-left ">
              LOCATION
            </div>
            <div className="col-md-8">
              <textarea
                placeholder="Location"
            
                className="form-control bg-transparent border border-warning rounded-0 "
              />
              <div className="small text-danger text-left">
              
              </div>
            </div>
          </div>

          <div className="row mb-3 d-flex flex-wrap align-items-center justify-content-center text-light">
            <div className="col-md-4 mb-3 mb-2 bg-warning text-dark text-left ">
              PICK UP DATE AND TIME
            </div>
            <div className="col-md-8 text-md-center text-left">
              <button
                type="button"
                className="btn rounded-0 p-0 btn-outline-warning">
                  LOCATION
              </button>
            </div>
          </div>
          <div id="captcha" />
          <div className="row align-items-center">
          <div className="text-center w-100">
          <Button
            onClick={() => history.push("/appointmentslot")}
            variant="warning rounded-0 btn-lg ml-auto"
          >
            BOOK FREE APPOINTMENT
          </Button>
        </div>
            
          </div>
        </form>
      </div>
    </div>
      </div>
    </div>
  );
}
