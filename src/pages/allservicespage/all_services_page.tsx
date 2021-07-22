import {useState} from "react";
import {Button, Modal, Container, Form} from "react-bootstrap";
import {useGlobalState} from "../../contexts/global_state";
import {getPlans} from "../../database/plan";
import "./all_services_page.css";
import {useHistory} from "react-router";
import {useUser} from "../../contexts/user_context";
import carsDataJSON from '../../database/carsData.json';
import CarsData from "../../interfaces/carsData";
export default function AllServicesPage() {
    const [user]=useUser();
    const [globalState, dispatch] = useGlobalState();
    const [selectedPlan, setSelectedPlan] = useState<null | string>(null);
    const [selectedSubPlan, setSelectedSubPlan] = useState<number>();
    const cartSum = globalState.cart.reduce(
        (acc, curr) => acc + curr.service.price,
        0
    );
    const carsData=carsDataJSON as CarsData;
    const selectedBrand = globalState.selectedBrand;
    const selectedModel = globalState.selectedModel;
    const selectedType = globalState.selectedType;
    const plans = getPlans(selectedBrand, selectedModel, selectedType);

    function onPlanSelect() {
        if (!selectedPlan || !selectedBrand || !selectedModel || !selectedType ||selectedSubPlan===undefined) return;
        const service = plans[selectedPlan][selectedSubPlan]
        if (!service) return;
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                brand: selectedBrand,
                model: selectedModel,
                fuel: selectedType,
                category: selectedPlan,
                service,
                id: selectedBrand + selectedModel + selectedType + selectedPlan + service.name + service.price
            },
        });
        setSelectedPlan(null);
        setSelectedSubPlan(undefined);
    }

    const history = useHistory();

    return (
        <div className="container-fluid p-4" id='allpagesection'>
            <Modal

                contentClassName="col-11 col-md-8 col-lg-6 bg-dark border border-warning p-0 rounded-0"
                dialogClassName="d-flex align-items-center justify-content-center min-vw-100"
                centered
                show={selectedPlan !== null}
                onHide={() => {
                    setSelectedPlan(null);
                    setSelectedSubPlan(undefined);
                }}
            >
                <Modal.Header className='bg-warning text-dark rounded-0' closeButton>{selectedPlan}</Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            className='rounded-0'
                            value={selectedSubPlan}
                            onChange={(e) =>
                                setSelectedSubPlan(parseInt(e.target.value))
                            }
                            as="select"
                        >
                            <option value={undefined}>SELECT PLAN</option>
                            {selectedPlan && plans[selectedPlan].map((plan: any, index: number) => (
                                <option
                                    className="bg-warning rounded-0 d-flex justify-content-between"
                                    key={plan.name}
                                    value={index}
                                >
                                        {plan.name} - Rs.{plan.price}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    {selectedSubPlan!==undefined && <Button variant='warning' className='rounded-0' onClick={onPlanSelect}>
                        ADD TO CART</Button>}
                </Modal.Body>
            </Modal>
            <div className="row ">
                <div className="col-lg-5 pl-lg-5">
                    <div
                        className="d-flex rounded-0 alert alert-light align-items-center justify-content-center flex-column p-3 text-light"
                        id="cart"
                    >
                        <div className='border border-warning rounded-0 mb-2'>
                            <div
                                className='alert rounded-0 alert-warning w-100 h-100 pb-4 d-flex justify-content-center  align-items-center flex-column flex-wrap'>
                                <h2 className="display-4">CART</h2>
                                {selectedModel&&selectedBrand&&<img
                                    src={carsData[selectedBrand].models[selectedModel].imageURL}
                                    alt="cart"
                                    className="img-fluid w-75 border-1 rounded
                            "

                                />}
                            </div>

                            <div className="col-12 d-flex flex-wrap align-items-center justify-content-between">
                                <div className="col">
                                    <h2 className="text-capitalize">
                                        {selectedBrand} {selectedModel}
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
                            <hr className="w-100 bg-warning"/>
                            <div className="row w-100 m-0 p-2">

                                <div className='col-auto mx-auto'>{user?`Total : ₹${cartSum}`:<a  href='#profile'>
                        <div className="alert alert-danger" id='signinpdfalert' role="alert">
                            SIGN IN TO VIEW THE TOTAL!
                        </div>
                        </a>}</div>
                            </div>


                        </div>
                        <div className="d-flex  w-100 flex-column">
                            {globalState.cart.map(({category, service, id}) => (
                                <Container
                                    className="text-left p-0 border border-light my-2 w-100"
                                    key={id}
                                >
                                    <div className="m-0 alert alert-warning w-100 flex-wrap rounded-0 justify-content-between d-flex">
                                        <div>
                                        <h5 className="font-weight-bold mb-0 pb-0">
                                            {service.name}
                                        </h5>
                                        <p className="font-weight-light my-0 py-0 card-text">
                                            {category}
                                        </p>
                                        <div className="badge badge-info my-0">
                                            {user?`Rs. ${service.price}`:"Sign in to view price"}
                                        </div>
                                        </div>
                                        <div className=' my-auto'>
                                        <div
                                            className="btn my-auto rounded-0 btn-outline-danger "
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: id,
                                                });
                                            }}
                                        >
                                            <img src='https://i.ibb.co/Rc0bWnJ/x-png-35400.png' className='my-1' height={15} width={15} alt=''/>
                                        </div>

                                        </div>
                                        
                                    </div>
                
                                </Container>
                            ))}
                        </div>
                        <Button
                            disabled={globalState.cart.length===0}
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

                    {Object.keys(plans).map((plan) => (

                        <Button
                            variant="outline-light"
                            className="text-left rounded-0 mt-5 w-75 "
                            onClick={() => setSelectedPlan(plan)}
                            key={plan}
                            id='servicesbtn'


                        >

                            <div className='p-2'>
                                <div className="row px-2">
                                    <div className="col-md-4  p-3">
                                        <img
                                            src="https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"
                                            className='img-fluid rounded' alt="..."/>
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body pl-md-0 ">
                                            <h4 className="card-title rounded-0  alert alert-warning">{plan}</h4>
                                            <p className="card-text text-capitalize">{plan} for {selectedBrand} {selectedModel} ({selectedType?.toUpperCase()})</p>
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
