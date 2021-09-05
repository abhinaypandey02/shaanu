import React, { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import CheckoutsInfo from "./checkoutsInfo"
import { Checkout } from "../../../interfaces/checkout"

export default function Checkouts({ checkouts }: { checkouts: Checkout[] }) {
    const [currentCheckout, setCurrentCheckout] = useState<Checkout>()
    const [checkoutsList, setCheckoutsList] = useState(checkouts)
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        setCheckoutsList(checkouts.filter(checkout => checkout.user.name.toLowerCase().includes(searchTerm.toLowerCase()) || checkout.user.phone.toString().includes(searchTerm)))
    }, [searchTerm])
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
            <div>
                <input className="w-100 form-control my-2 rounded-0" placeholder="Search with phone / name"
                       value={searchTerm}
                       onChange={e => setSearchTerm(e.target.value)} />

            </div>
            <table className="table text-white">
                <thead className="alert alert-dark">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Time</th>
                    <th>Cart Items</th>
                </tr>
                </thead>
                <tbody>
                {checkoutsList.map((checkout) => (
                    <tr
                        onClick={() => setCurrentCheckout(checkout)}
                        key={checkout.timestamp}
                        className="row-fluid pointer-on-hover"
                    >
                        <td>{checkout.user.name}</td>
                        <td>{checkout.user.phone}</td>
                        <td>{new Date(checkout.timestamp).toLocaleString()}</td>
                        <td>{checkout.cart.length}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
