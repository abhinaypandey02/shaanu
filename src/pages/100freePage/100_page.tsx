import { useHistory } from "react-router";
import "./100pages.css";
import { useState } from "react";
import BookNowForm from "../../components/booknowForm/booknow_form";
import { addBookedSession, getToken } from "../../utils/firebase/firestore";
import { BookedSession } from "../../interfaces/bookedSession";
import { v4 as uid } from "uuid";

interface Service {
  name: string;
  id: string;
}

interface Group {
  name: string;
  id: string;
  services: Service[];
}

export default function FreeServices() {
  const history = useHistory();
  const [selectedServices, setSelectedServices] = useState<
    ({ group: Group["id"]; service: Service } | null)[]
  >([null, null, null, null]);
  const allSelected = !selectedServices.some((x) => x === null);
  const groups: Group[] = [
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
  console.log(selectedServices);

  async function add100FreeService({
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
    const filteredServices: any[] = selectedServices.filter((f) => f !== null);
    if (filteredServices.length !== 4) {
      alert(
        "INTERNAL ERROR. PLEASE REPORT TO ADMIN. ERROR CODE: FREE_SERVICES_NOT_4"
      );
      return;
    }
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
      freeServices: filteredServices,
    };
    await addBookedSession(tempSession);
    await history.push({
      pathname: "/appointmentslot",
      state: {
        tempSession,
      },
    });
  }

  return (
    <div className="container-fluid">
      <div className="row-fluid text-light text-center">
        <h1>CHOOSE ANY FREE SERVICE</h1>
      </div>
      <div className="row">
        {groups.map((group, index) => (
          <div className="col-md-3" key={group.id}>
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
                          <input
                            onChange={(e) => {
                              if (e.target.checked)
                                setSelectedServices((old) => {
                                  old[index] = { group: group.id, service };
                                  return [...old];
                                });
                            }}
                            type="radio"
                            name={group.id}
                          />
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
            {allSelected && <BookNowForm onSuccess={add100FreeService} />}
            {!allSelected && (
              <h2 className="text-center text-warning w-100">
                PLEASE SELECT SERVICES FROM EACH GROUP TO CONTINUE
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
