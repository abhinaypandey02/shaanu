import React, { useState } from "react";
import { BookedSession } from "../../../interfaces/bookedSession";
import { Modal } from "react-bootstrap";
import CheckoutsInfo from "./checkoutsInfo";
import { Checkout } from "../../../interfaces/checkout";

interface BookedSessionWithDate extends BookedSession {
  date: Date;
}

export default function Checkouts({ checkouts }: { checkouts: Checkout[] }) {
  const [currentCheckout, setCurrentCheckout] = useState<Checkout>();
  return (
    <div className="container">
      <Modal
        centered
        show={currentCheckout}
        onHide={() => setCurrentCheckout(undefined)}
      >
        <Modal.Header closeButton>
          {currentCheckout?.user}'s Checkout
        </Modal.Header>
        <Modal.Body>
          {currentCheckout && (
            <CheckoutsInfo mode="auto" checkout={currentCheckout} />
          )}
        </Modal.Body>
      </Modal>
      <div className="row-fluid p-3 text-center text-light">
        <h1>Checkouts</h1>
      </div>
      <table className="table text-white">
        <thead className="alert alert-dark">
          <tr>
            <th>User</th>
            <th>Time</th>
            <th>Cart Items</th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((checkout) => (
            <tr
              onClick={() => setCurrentCheckout(checkout)}
              key={checkout.timestamp}
              className="row-fluid pointer-on-hover"
            >
              <td>{checkout.user}</td>
              <td>{new Date(checkout.timestamp).toLocaleString()}</td>
              <td>{checkout.cart.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
