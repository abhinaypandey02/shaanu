import { Button } from "react-bootstrap";

export default function AppointmentSlot(){
    return(
        <div className="container mt-3 text-light ">
            <div className="row ">
                <div className="col-md-6  text-center">
                    <h1>YOUR FREE APPOINTMENT SLOT IS</h1>
                    <br/>
                    <h1>DD/MM/YY</h1>
                    <br/>
                    <h1>HH:MM</h1>
                    <br/>
                    <h1>YOUR COUPON CODE IS : UIAWDVAUWID</h1>
                    <br/>
                </div>
                <div className="col-md-6 text-center d-flex flex-column">
                    <Button variant="outline-light" className='m-3'> WHATSAPP </Button>
                    <Button variant="outline-light" className='m-3'> SAVE PDF </Button>
                    <Button variant="outline-light" className='m-3'> EMAIL </Button>
                    <Button variant="outline-light" className='m-3'> ALL OF THE ABOVE </Button>
                </div>
            </div>
        </div>
    )
}