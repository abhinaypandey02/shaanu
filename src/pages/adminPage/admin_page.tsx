export default function AdminPage() {
    return (
        <div className="container-fluid bg-danger min-vh-100">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="d-flex flex-column p-3 text-white bg-dark bg-danger" style={{ width: 280 }}>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                            <span className="fs-4">Sidebar</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
        Home
      </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
        Dashboard
      </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
        Orders
      </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>
        Products
      </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle" /></svg>
        Customers
      </a>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a href="321213#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="213#">New project...</a></li>
                                <li><a className="dropdown-item" href="213#">Settings</a></li>
                                <li><a className="dropdown-item" href="213#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="21#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-fluid bg-warning">
                    <div className="card mb-3" style={{ maxWidth: 540 }} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}