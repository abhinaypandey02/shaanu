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

    return <div className='d-flex justify-content-center min-vh-90 align-items-center flex-grow-1'>
        <div className='container text-wrap d-flex align-content-around flex-column p-0'>
            <div className="row-fluid text-light text-center">
                <h1 className='display-4'>CAR PLUS</h1>
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