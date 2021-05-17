import { Button } from "react-bootstrap";

export default function AppointmentSlot() {
    return (
        <div id="yay" className="container mt-3 text-light ">
            <div className="row ">
                <div className="col-md-6  text-center">
                    <h1>YOUR FREE APPOINTMENT SLOT IS</h1>
                    <br />
                    <h1>DD/MM/YY</h1>
                    <br />
                    <h1>HH:MM</h1>
                    <br />
                    <h1>YOUR COUPON CODE IS : UIAWDVAUWID</h1>
                    <br />
                </div>
                <div className="col-md-6 text-center d-flex flex-column">
                    <a
                        href="whatsapp://send?text=The text to share!"
                        className="btn btn-outline-light m-3"
                    >
                        WHATSAPP
                    </a>
                    <a
                        href="mailto:youremail@youremail.com"
                        className="btn btn-outline-light m-3"
                    >
                        EMAIL
                    </a>
                    <Button
                        onClick={() =>
                            window.print()
                        }
                        variant=" btn-outline-light"
                        className=" m-3"
                    >
                        SAVE PDF
                    </Button>
                    <a
                        href="mailto:youremail@youremail.com"
                        className="btn btn-outline-light m-3"
                    >
                        WHATSAPP
                    </a>
                </div>
            </div>
        </div>
    );
}
