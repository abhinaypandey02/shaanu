import { useState } from "react"
import { Button, Container, Dropdown, Modal } from "react-bootstrap"
import { useGlobalState } from "../../contexts/global_state"
import { getPlans } from "../../database/plan"
import "./all_services_page.css"
import { useHistory } from "react-router"
import { useUser } from "../../contexts/user_context"
import carsDataJSON from "../../database/carsData.json"
import CarsData from "../../interfaces/carsData"
import { Checkout } from "../../interfaces/checkout"
import { addCheckout } from "../../utils/firebase/firestore"
import {Link} from "react-router-dom"
function getImageURL(plan:string){
    console.log(plan)
    switch (plan) {
        case "Scheduled Services":return "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/cart/Scheduled%20Services%202.png?raw=true"
        case "Wheel Care":return "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/cart/wheel%20care%20222222222.jpg?raw=true"
        case "Denting-Painting":return "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/cart/DENTING%20PAINTING%201.png?raw=true"
        case "AC Service":return "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/cart/ac%20444.jpg?raw=true"
        case "Cleaning":return "https://github.com/abhinaypandey02/shaanu/blob/master/carWorkshopImages/cart/cleaning%203333.jpg?raw=true"
        default: return "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"
    }
}

export default function AllServicesPage() {
    const [user] = useUser()
    const [globalState, dispatch] = useGlobalState()
    const [selectedPlan, setSelectedPlan] = useState<null | string>(null)
    const [selectedSubPlan, setSelectedSubPlan] = useState<number>()
    const cartSum = globalState.cart.reduce(
        (acc, curr) => acc + curr.service.price,
        0
    )
    const carsData = carsDataJSON as CarsData
    const selectedBrand = globalState.selectedBrand
    const selectedModel = globalState.selectedModel
    const selectedType = globalState.selectedType

    const plans = getPlans(selectedBrand, selectedModel, selectedType)

    function onPlanSelect() {
        if (
            !selectedPlan ||
            !selectedBrand ||
            !selectedModel ||
            !selectedType ||
            selectedSubPlan === undefined
        )
            return
        const service = plans[selectedPlan][selectedSubPlan]
        if (!service) return
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                brand: selectedBrand,
                model: selectedModel,
                fuel: selectedType,
                category: selectedPlan,
                service,
                id:
                    selectedBrand +
                    selectedModel +
                    selectedType +
                    selectedPlan +
                    service.name +
                    service.price
            }
        })
        setSelectedPlan(null)
        setSelectedSubPlan(undefined)
    }

    const history = useHistory()

    function checkout() {
        if (user) {
            const checkout: Checkout = {
                cart: globalState.cart,
                timestamp: new Date().getTime(),
                user: {
                    phone: user.phone,
                    name: user.name
                }
            }
            addCheckout(checkout).then(() => {
                history.push("/estimate")
            })
        } else {
            history.push("/estimate")
        }
    }

    return (
        <div className="container-fluid p-4" id="allpagesection">
            <Modal
                contentClassName="col-11 col-md-8 col-lg-6 bg-dark border border-warning p-0 rounded-0"
                dialogClassName="d-flex align-items-center justify-content-center min-vw-100"
                centered
                show={selectedPlan !== null}
                onHide={() => {
                    setSelectedPlan(null)
                    setSelectedSubPlan(undefined)
                }}
            >
                <Modal.Header className="bg-warning text-dark rounded-0" closeButton>
                    {selectedPlan}
                </Modal.Header>
                <Modal.Body>
                    <Dropdown className="mb-3 ">
                        <Dropdown.Toggle
                            className="rounded-0 w-100 text-truncate"
                            variant="outline-warning"
                            id="dropdown-basic"
                        >
                            {selectedSubPlan === undefined && "SELECT PLAN"}
                            {selectedPlan && selectedSubPlan !== undefined && (
                                <span>

                                        {plans[selectedPlan][selectedSubPlan].name}
                                    {user
                                        ? ` - Rs. ${plans[selectedPlan][selectedSubPlan].price}`
                                        : ""}
                </span>
                            )}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100">
                            {selectedPlan &&
                            plans[selectedPlan].map((plan: any, index: number) => (
                                <Dropdown.Item
                                    className="text-wrap text-center"
                                    key={plan.name}
                                    onClick={() => setSelectedSubPlan(index)}
                                >
                                    <h4><strong>{plan.name}</strong></h4>
                                    <p>{plan.description}</p>
                                    <h4><strong><div className="badge badge-primary">{user ? `₹${plan.price}` : ""}</div></strong></h4>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="w-100 text-center">
                        {selectedSubPlan !== undefined && (
                            <Button
                                variant="warning"
                                className="rounded-0"
                                onClick={onPlanSelect}
                            >
                                ADD TO CART
                            </Button>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
            <div className="row ">
                <div className="col-xl-4 pl-xl-5">
                    <div
                        className="d-flex rounded-0 alert alert-light align-items-center justify-content-center flex-column p-3 text-light"
                        id="cart"
                    >
                        <div className="w-100 border border-warning rounded-0 mb-2">
                            <div
                                className="alert rounded-0 alert-dark w-100 h-100 pb-4 d-flex justify-content-center  align-items-center flex-column flex-wrap">
                                <h2 className="display-4">CART</h2>
                                {selectedModel && selectedBrand && (
                                    <img
                                        src={carsData[selectedBrand].models[selectedModel].imageURL}
                                        alt="cart"
                                        className="img-fluid w-50 border-1 rounded
                            "
                                    />
                                )}
                            </div>

                            <div className="col-12 d-flex flex-wrap align-items-center justify-content-between">
                                <div className="col">
                                    <h2 className="text-capitalize text-dark">
                                        {selectedBrand} {selectedModel}
                                    </h2>
                                    <span className=" rounded-pill p-2 badge bg-primary text-capitalize">
                    {selectedType}
                  </span>
                                </div>

                                <Button
                                    variant={"warning"}
                                    onClick={() =>
                                        dispatch({
                                            type: "CLEAR_SELECTION",
                                            payload: null
                                        })
                                    }
                                    className="w-auto rounded-0 m-3 m-md-0"
                                >
                                    CHANGE
                                </Button>
                            </div>
                            
                            <div className="row w-100 mt-3 mx-0 bg-warning p-2">
                                <h2 className="col-auto bg-warning text-dark mx-auto">
                                    {user ? (
                                       <strong> Total : ₹{cartSum} </strong>
                                    
                                    ) : (
                                        <Link to={"/profile"}>
                                            <div
                                                className="alert alert-danger"
                                                id="signinpdfalert"
                                                role="alert"
                                            >
                                                SIGN IN TO VIEW THE TOTAL!
                                            </div>
                                        </Link>
                                    )}
                                </h2>
                            </div>
                        </div>
                        <div className="d-flex  w-100 flex-column">
                            {globalState.cart.map(({ category, service, id }) => (
                                <Container
                                    className="text-left p-0 border border-light my-2 w-100"
                                    key={id}
                                >
                                    <div
                                        className="m-0 alert alert-dark w-100 flex-wrap rounded-0 justify-content-between d-flex">
                                        <div>
                                            <h5 className="font-weight-bold mb-0 pb-0">
                                                {service.name}
                                            </h5>
                                            <p className="font-weight-light my-0 py-0 card-text">
                                                {category}
                                            </p>
                                            <h3> 
                                                <div className="badge badge-primary text-light my-0">
                                                    {user ? (
                                                        `Rs. ${service.price}`
                                                    ) : (
                                                        <strong>"Sign in to view price"</strong>
                                                    )}
                                                </div>
                                            </h3>
                                            
                                        </div>
                                        <div className=" my-auto">
                                            <div
                                                className="btn my-auto rounded-0 btn-outline-danger "
                                                onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: id
                                                    })
                                                }}
                                            >
                                                <img
                                                    src="https://i.ibb.co/Rc0bWnJ/x-png-35400.png"
                                                    className="my-1"
                                                    height={15}
                                                    width={15}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            ))}
                        </div>
                        <Button
                            disabled={globalState.cart.length === 0}
                            onClick={checkout}
                            variant="success"
                            className="rounded-0"
                        >
                            CHECKOUT
                        </Button>
                    </div>
                </div>

                <div className="col-xl-8 text-center">
                    <h1 className="text-light mt-5 mt-md-0">Select Services</h1>

                    {Object.keys(plans).map((plan) => (
                        <Button
                            variant="dark"
                            className="text-left border-warning p-1 border-2 d-flex justify-content-center align-items-center rounded-0 mt-5 w-100 "
                            onClick={() => setSelectedPlan(plan)}
                            key={plan}
                            id="servicesbtn"
                        >
                            <div className="p-0">
                                <div className="row">
                                    <div className="col-md-4  m-0 d-flex justify-content-center align-items-center">
                                        <img
                                            src={getImageURL(plan)}
                                            className="img-fluid m-0 h-75 rounded"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-8 d-flex justify-content-center align-items-center">
                                        <div className="card-body">
                                            <h3 className="card-title rounded-0 py-4 alert bg-warning text-dark">
                                                <strong>{plan}</strong>
                                            </h3>
                                            <p className="card-text text-capitalize">
                                                {plan} for {selectedBrand} {selectedModel} (
                                                {selectedType?.toUpperCase()})
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
