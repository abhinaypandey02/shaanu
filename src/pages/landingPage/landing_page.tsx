import { Dropdown } from 'react-bootstrap';
import CarsMenu from '../../components/carsMenu/cars_menu';
import { useGlobalState } from '../../contexts/global_state';
import './landing_page.css';

export default function LandingPage() {
    const [globalState]=useGlobalState();
    let currentlySelecting;

    if(!globalState.selectedBrand) currentlySelecting="BRAND";
    else if(!globalState.selectedModel) currentlySelecting="MODEL";
    else currentlySelecting="FUEL"

    return <div className='d-flex justify-content-center min-vh-90 align-items-center flex-grow-1'>
        <div className='container text-wrap d-flex align-content-around flex-column'>
            <div className="row-fluid text-light text-center">
                <h1 className='display-4'>CAR PLUS</h1>
            </div>
            <div className='row-fluid bg-danger d-flex justify-content-center text-center'>
                <Dropdown className="w-50 p-3">
                    <Dropdown.Toggle style={{backgroundColor:"transparent"}} className="p-0 m-0 w-100 border-0">
                    <button className="btn btn-dark py-3 btn-lg w-100 dropdown-toggle my-3 text-center" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        SELECT {currentlySelecting}
                    </button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100 p-3">
                        <CarsMenu/>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div>
    </div>
}