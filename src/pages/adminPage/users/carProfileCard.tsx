import React, { useState } from "react";
import { CarProfile } from "../../../interfaces/car";
import { Button } from "react-bootstrap";

const CarProfileCard = ({
  profile,
  mode,
}: {
  profile: CarProfile;
  mode: "auto" | "full" | "compact";
}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  let visible = false;
  if (mode === "full") visible = true;
  else if (mode === "auto") visible = moreInfo;
  return (
    <div>
      {mode === "auto" && (
        <Button onClick={() => setMoreInfo((o) => !o)}>
          {moreInfo ? "- Less " : "+ More "} Info
        </Button>
      )}
      <table className={"my-3"}>
        <tr>
          <th>Brand</th>
          <td>{profile.brand}</td>
        </tr>
        <tr>
          <th>Model</th>
          <td>{profile.model}</td>
        </tr>
        {visible && (
          <tr>
            <th>Reg No.</th>
            <td>{profile.regNo}</td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>Address</th>
            <td>{profile.address}</td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>Chasis No</th>
            <td>{profile.chasisNo}</td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>Engine No.</th>
            <td>{profile.engineNo}</td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>Insurance Date</th>
            <td>
              {profile.insuranceDate &&
                new Date(profile.insuranceDate).toLocaleString()}
            </td>
          </tr>
        )}
        {visible && (
          <tr>
            <th>Insurance Company</th>
            <td>{profile.insuranceComp}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default CarProfileCard;
