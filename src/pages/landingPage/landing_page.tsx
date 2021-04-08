import './landing_page.css';

export default function LandingPage() {
    return <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <div className='container text-wrap d-flex align-content-around flex-column' id='landingPage'>
            <div className='row-fluid'>
                <strong className='display-4'>
                    The Best Car Services Await You.
                </strong>
            </div>
            <div className='row-fluid'>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle my-3" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        SELECT YOUR CAR
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle mb-3" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        LOCATION
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className='btn btn-outline-light'> GO</div>
            </div>

        </div>
    </div>
}