import { useState } from "react";
import { Button, Modal, Container} from "react-bootstrap";
import { useGlobalState } from "../../contexts/global_state";
import { getBrands } from "../../database/car";
import { getPlans } from "../../database/plan";
import "./all_services_page.css";
import cartimage from "./unnamed.png";
import { Plan, SubPlan } from "../../interfaces/plan";
import { useHistory } from "react-router";
export default function AllServicesPage() {
    const [globalState, dispatch] = useGlobalState();
    const [selectedPlan, setSelectedPlan] = useState<null | Plan>(null);
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

    function onPlanSelect(subPlan: SubPlan) {
        dispatch({
            type: "ADD_TO_CART",
            payload: { plan: selectedPlan, subPlan },
        });
        setSelectedPlan(null);
    }
    const history=useHistory();

    return (
        <div className="container-fluid">
            <Modal
                contentClassName="col-11 col-md-8 col-lg-6"
                dialogClassName="d-flex align-items-center justify-content-center min-vw-100"
                centered
                show={selectedPlan!==null}
                onHide={() => setSelectedPlan(null)}
            >
                <Modal.Header closeButton>{selectedPlan?.title}</Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-wrap justify-content-center ">
                        {selectedPlan?.subPlans.map((plan) => (
                            <Button
                                variant="outline-dark"
                                className="text-left m-3 bg-black"
                                onClick={() => onPlanSelect(plan)}
                                key={plan.id}
                            >
                                <h4 className="card-header">{plan.title}</h4>
                                <div className="card-body">
                                    <p className="card-text">
                                        {plan.description}
                                    </p>
                                </div>
                            </Button>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
            <div className="row">
                <div className="col-lg-5 col-12 ">
                    <div
                        className="d-flex align-items-center justify-content-center flex-column p-3 text-light"
                        id="cart"
                    >
                        <h2 className="display-4">CART</h2>
                        <img
                            alt="cart"
                            className="img-fluid w-50"
                            src={cartimage}
                        />

                        <hr className="w-100 bg-light" />
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
                                variant={"outline-light"}
                                onClick={() =>
                                    dispatch({
                                        type: "CLEAR_SELECTION",
                                        payload: null,
                                    })
                                }
                                className="w-auto"
                            >
                                CHANGE
                            </Button>
                        </div>
                        <hr className="w-100 bg-light" />
                        <div>Total : ₹{cartSum}</div>
                        <hr className="w-100 bg-light" />
                        <div className="d-flex  w-100 flex-column">
                            {globalState.cart.map(({ plan, subPlan }) => (
                                <Container
                                    className="text-left border border-light my-2 w-100"
                                    key={plan.id+subPlan.id}
                                >
                                    <h4 className="card-header w-100 flex-wrap d-flex justify-content-between">
                                        <div className="1">
                                        {plan.title} <span style={{backgroundColor:subPlan.color}} className="badge rounded-pill text-dark">{subPlan.title}</span>
                                        </div>
                                        <div className="btn btn-outline-danger my-auto" onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: subPlan.id,
                                        });
                                    }}>Remove</div>
                                    </h4>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {plan.description}
                                        </p>
                                    </div>
                                </Container>
                            ))}
                        </div>
                        <Button onClick={()=>history.push('/estimate')} variant='success'>
                            CHECKOUT
                        </Button>
                    </div>
                </div>

                <div className="col-lg-7 text-center">
                    <h1 className="text-light">Select Services</h1>
                    {plans.map((plan) => (
                        <Button
                            variant="outline-light"
                            className="text-left mt-5 w-75"
                            onClick={() => setSelectedPlan(plan)}
                            key={plan.id}
                        >
                            <h4 className="card-header">{plan.title}</h4>
                            <div className="card-body">
                                <p className="card-text">{plan.description}</p>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
