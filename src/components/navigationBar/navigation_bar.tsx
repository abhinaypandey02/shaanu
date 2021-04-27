import { useHistory } from 'react-router';
import './navigation_bar.css';

export default function NavigationBar() {
    const history=useHistory();
    return (
        <nav className="navbar text-light navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <button type="button" onClick={()=>history.push('/')} className="btn btn-outline-light m-3 btn-lg">PROFILE</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" onClick={()=>history.push('/workshop')} className="btn btn-outline-light btn-lg m-3">VIEW WORKSHOP</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light btn-lg m-3">FAQ</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light btn-lg m-3">SERVICES</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}