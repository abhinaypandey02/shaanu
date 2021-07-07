import { useState } from "react";
import { Button, Modal, Container, Form } from "react-bootstrap";
import { useGlobalState } from "../../contexts/global_state";
import { getBrands } from "../../database/car";
import { getPlans } from "../../database/plan";
import "./all_services_page.css";
import { Plan, SubPlan } from "../../interfaces/plan";

import { useHistory } from "react-router";
export default function AllServicesPage() {
    const [globalState, dispatch] = useGlobalState();
    const [selectedPlan, setSelectedPlan] = useState<null | Plan>(null);
    const [selectedSubPlan, setSelectedSubPlan] =
        useState<undefined | SubPlan>(undefined);
        const [selectedSubPlanType, setSelectedSubPlanType] =
        useState<undefined | string>(undefined);
    const cartSum = globalState.cart.reduce(
        (acc, curr) => acc + curr.subPlan.price,
        0
    );
    const brands = getBrands();
    const plans = getPlans();
    const selectedBrand = brands.find(
        (brand) => brand.id === globalState.selectedBrand
    );
    const selectedModel = selectedBrand?.models.find(
        (model) => model.id === globalState.selectedModel
    );
    const selectedType = globalState.selectedType;

    function onPlanSelect() {
        dispatch({
            type: "ADD_TO_CART",
            payload: { plan: selectedPlan, subPlan:selectedSubPlan,type:selectedSubPlanType },
        });
        setSelectedPlan(null);
        setSelectedSubPlanType(undefined);setSelectedSubPlan(undefined);
    }
    const history = useHistory();

    return (
        <div className="container-fluid p-4" id='allpagesection'>
            <Modal
                
                contentClassName="col-11 col-md-8 col-lg-6 bg-dark border border-warning p-0 rounded-0"
                dialogClassName="d-flex align-items-center justify-content-center min-vw-100"
                centered
                show={selectedPlan !== null}
                onHide={() => {setSelectedPlan(null);setSelectedSubPlanType(undefined);setSelectedSubPlan(undefined);}}
            >
                <Modal.Header className='bg-warning text-dark rounded-0' closeButton>{selectedPlan?.title}</Modal.Header>
                <Modal.Body >
                    <Form.Group>
                        <Form.Control
                            className='rounded-0'
                            value={selectedSubPlan?.id}
                            onChange={(e) =>
                                setSelectedSubPlan(
                                    selectedPlan?.subPlans.find(
                                        (subPlan) =>
                                            subPlan.id === e.target.value
                                    )
                                )
                            }
                            as="select"
                        >
                            <option value={undefined}>SELECT PLAN</option>
                            {selectedPlan?.subPlans.map((plan) => (
                                <option
                                    className="bg-warning rounded-0"
                                    key={plan.id}
                                    value={plan.id}
                                >
                                    {plan.title}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    {selectedSubPlan&&selectedSubPlan.types.length>0 && (
                        <Form.Group>
                            <Form.Control className='rounded-0' value={selectedSubPlanType} onChange={e=>setSelectedSubPlanType(e.target.value)} as="select">
                                <option value={undefined}>Select Type</option>
                                {selectedSubPlan.types.map((type) => (
                                    <option className='bg-warning' value={type}>{type}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    )}
                    {selectedSubPlan&&(selectedSubPlanType||selectedSubPlan.types.length===0)&&<Button variant='warning' className='rounded-0' onClick={onPlanSelect}>
                        BOOK</Button>}
                </Modal.Body>
            </Modal>
            <div className="row " >
                <div className="col-lg-5 pl-lg-5">
                    <div
                        className="d-flex rounded-0 alert alert-light align-items-center justify-content-center flex-column p-3 text-light"
                        id="cart"
                    >
                        <div className='border border-warning rounded-0 mb-2'>
                        <div className='alert rounded-0 alert-warning w-100 h-100 pb-4 d-flex justify-content-center  align-items-center flex-column flex-wrap'>
                        <h2 className="display-4">CART</h2>
                        <img
                        src='https://cdn.picpng.com/lamborghini/lamborghini-image-29016.png'
                            alt="cart"
                            className="img-fluid w-75 border-1 rounded
                            "
                          
                        />
                        </div>
                 
                        <div className="col-12 d-flex flex-wrap align-items-center justify-content-between">
                            <div className="col">
                                <h2 className="text-capitalize">
                                    {selectedBrand?.name} {selectedModel?.name}
                                </h2>
                                <span className=" rounded-pill p-1 badge bg-light text-dark text-capitalize">
                                    {selectedType}
                                </span>
                            </div>

                            <Button
                                variant={"outline-warning"}
                                onClick={() =>
                                    dispatch({
                                        type: "CLEAR_SELECTION",
                                        payload: null,
                                    })
                                }
                                className="w-auto rounded-0 m-3 m-md-0"
                            >
                                CHANGE
                            </Button>
                        </div>
                        <hr className="w-100 bg-warning" />
                        <div className="row w-100 m-0 p-2">
                            <div className='col-auto mx-auto'>Total : ₹{cartSum}</div>
                        </div>
                        
                        
                    
                    </div>
                        <div className="d-flex  w-100 flex-column">
                            {globalState.cart.map(({ plan, subPlan,type }) => (
                                <Container
                                    className="text-left p-0 border border-light my-2 w-100"
                                    key={plan.id + subPlan.id}
                                >
                                    <h4 className="card-header alert alert-warning w-100 flex-wrap d-flex justify-content-between">
                                        <div className="1">
                                            {subPlan.title}{" "}
                                            <span
                                                style={{
                                                    backgroundColor: "silver",
                                                }}
                                                className="badge rounded-pill text-dark"
                                            >
                                                {type}
                                            </span>
                                        </div>
                                        <div
                                            className="btn rounded-0 btn-danger mt-3 mt-md-0"
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: subPlan.id,
                                                });
                                            }}
                                        >
                                            Remove
                                        </div>
                                    </h4>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {plan.title}
                                        </p>
                                    </div>
                                </Container>
                            ))}
                        </div>
                        <Button
                            onClick={() => history.push("/estimate")}
                            variant="success"
                            className='rounded-0'
                        >
                            CHECKOUT
                        </Button>
                    </div>
                </div>

                <div className="col-lg-7 text-center">
                    <h1 className="text-light mt-5 mt-md-0">Select Services</h1>

                    {plans.map((plan) => (
                    
                        <Button
                            variant="outline-light"
                            className="text-left rounded-0 mt-5 w-75 "
                            onClick={() => setSelectedPlan(plan)}
                            key={plan.id}
                            id='servicesbtn'
                            
                
                            
                        >
                             
                            <div className='p-2' >
                                <div className="row px-2">
                                    <div className="col-md-4  p-3">
                                        <img src="https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg" className='img-fluid rounded' alt="..."/>
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body pl-md-0 ">
                                            <h4 className="card-title rounded-0  alert alert-warning">{plan.title}</h4>
                                            <p className="card-text">{plan.description} & obis obcaecati iure molestias delectus, mollitia accusamus sapiente voluptates.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            
                        
                        </Button>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}
