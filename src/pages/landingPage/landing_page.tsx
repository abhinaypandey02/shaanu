import './landing_page.css';

export default function LandingPage() {
    return <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <div className='container text-wrap d-flex align-content-around flex-column'>
            <div className='row-fluid'>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle my-3 text-center" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        SELECT YOUR BRAND
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
}