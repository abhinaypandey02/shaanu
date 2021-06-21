import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import CarsMenu from '../../components/carsMenu/cars_menu';
import { useGlobalState } from '../../contexts/global_state';
import './landing_page.css';

export default function LandingPage() {
    const [globalState]=useGlobalState();
    let currentlySelecting;

    if(!globalState.selectedBrand) currentlySelecting="BRAND";
    else if(!globalState.selectedModel) currentlySelecting="MODEL";
    else currentlySelecting="FUEL"

    return <div className='min-h-100 d-flex justify-content-center align-items-center'>
        <div className='container my-auto text-wrap d-flex justify-content-center align-items-center flex-column p-0'>
            <div className="row-fluid text-light text-center">
                <h1 className='display-5'>One place for all your Car needs</h1>
            </div>
            <div className='row-fluid d-flex justify-content-center w-100 text-center'>
            
                    <Accordion className='w-50 my-5 text-light' id='dropdownbutton'>
                        <Card className='m-0'>
                            <Card.Header className='p-0 m-0'>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                        SELECT {currentlySelecting}
                                    </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse className='text-light' eventKey="0">
                            <Card.Body><CarsMenu/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                     
            </div>

        </div>
    </div>
}