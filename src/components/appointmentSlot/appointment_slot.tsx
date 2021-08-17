import { Button } from "react-bootstrap";
import {BookedSession} from "../../interfaces/bookedSession";
import {useHistory} from "react-router";
export default function AppointmentSlot({location}:any) {
    const history=useHistory();
    if(location.state&&location.state.tempSession){
        const bookedSession:BookedSession=location.state.tempSession;
        const date=new Date(bookedSession.dateTime);
        date.setMinutes(bookedSession.minutes, 0, 0);
        return (
            <div id="yay" className="container mt-3 text-light ">
                <div className="row ">
                    <div className="col-12 text-center">
                        <h1>YOUR FREE APPOINTMENT SLOT IS</h1>
                        <br />
                        <h1 className='text-warning'>{date.toLocaleDateString()}</h1>
                        <br />
                        <h1>TIME IS</h1>
                        <br />
                        <h1 className='text-warning'>{date.toLocaleTimeString()}</h1>
                        <br />
                        <h1>YOUR TOKEN IS </h1>
                        <br />
                        <h1 className='text-warning'>{bookedSession.token}</h1>
                        <br/>
                        <Button
                            onClick={() =>
                                window.print()
                            }
                            variant=" btn-outline-warning rounded-0"
                            className=" m-3"
                        >
                            SAVE PDF
                        </Button>
                    </div>
                  
                </div>
            </div>
        );
    }
    else {
        history.push('/booknow')
    }
    return null;

}
