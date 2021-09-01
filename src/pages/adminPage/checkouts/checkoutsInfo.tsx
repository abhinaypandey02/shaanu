import React, { useState } from "react";
import { BookedSession } from "../../../interfaces/bookedSession";
import { Button } from "react-bootstrap";
import { Checkout } from "../../../interfaces/checkout";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

const CheckoutsInfo = ({
  checkout,
  mode,
}: {
  checkout: Checkout;
  mode: "compact" | "full" | "auto";
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
          <th>Booked Time</th>
          <td>{new Date(checkout.timestamp).toLocaleString()}</td>
        </tr>
        <tr>
          <th>User</th>
          <td>{checkout.user}</td>
        </tr>
        {visible && checkout.cart.length > 0 && (
          <div className="my-3">
            <h4>Cart</h4>
            <table>
              {checkout.cart.map((cartItem) => (
                <div key={cartItem.id}>
                  <div>
                    {cartItem.service.name} ({cartItem.category})
                  </div>
                  <small className="badge badge-warning m-1">
                    Rs.{cartItem.service.price}
                  </small>
                  <small className="text-capitalize badge badge-info m-1">
                    {cartItem.brand} {cartItem.model} - {cartItem.fuel}
                  </small>
                  <hr />
                </div>
              ))}
            </table>
          </div>
        )}
      </table>
    </div>
  );
};

export default CheckoutsInfo;
