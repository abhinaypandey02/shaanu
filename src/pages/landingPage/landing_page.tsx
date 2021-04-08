import './landing_page.css';
export default function LandingPage(){
    return <div className='section1'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pooja Automobiles</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <button type="button" className="btn btn-outline-light mr-3">HOME</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button type="button" className="btn btn-outline-light mr-3">SERVICES</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button type="button" className="btn btn-outline-light">CONTACT US</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='section2'>
            <div className='container text-wrap' id='base'>
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
                    <div className='btn btn-outline-light'> GO </div>
                </div>

            </div>
        </div>
    </div>
}