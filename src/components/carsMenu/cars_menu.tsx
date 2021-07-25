import React from "react";
import CarsData  from '../../interfaces/carsData';
import {
    GlobalStateInterface,
    useGlobalState,
} from "../../contexts/global_state";
import carsDataJSON from '../../database/carsData.json' ;
import { Button } from "react-bootstrap";
export default function CarsMenu() {
    const [globalState, dispatch]: [
        GlobalStateInterface,
        any
    ] = useGlobalState();
    const carsData:CarsData=carsDataJSON as CarsData;
    function setBrand(id: string) {
        dispatch({ type: "SET_BRAND", payload: id });
        window.scrollTo(0,0);
    }
    function setModel(id: string) {
        dispatch({ type: "SET_MODEL", payload: id });
        window.scrollTo(0,0);
    }
    function setType(type: string) {
        dispatch({ type: "SET_TYPE", payload: type });
        window.scrollTo(0,0);
    }

    const selectedBrand = globalState.selectedBrand&&carsData[globalState.selectedBrand];
    if (!globalState.selectedBrand ||!selectedBrand) {
        return (
            <div className="d-flex flex-wrap justify-content-around overflow-auto">
                {Object.keys(carsData).map((brand:string) => (
                    <div onClick={() => setBrand(carsData[brand].id)} key={carsData[brand].id} className="text-center p-2 m-2 pointer-on-hover" style={{width:'29%', border: "solid 1px white"}}>
                       
                        <img
                            alt={carsData[brand].name}
                            height={80}

                            src={carsData[brand].imageURL}


                            id='carbrandimage'
                        />
                        <div>{carsData[brand].name}</div>
                    </div>
                ))}
            </div>
        );
    }
    const selectedModel = globalState.selectedModel&&selectedBrand.models[globalState.selectedModel]

    if (!globalState.selectedModel || !selectedModel) {
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {Object.keys(selectedBrand.models).map((model) => (
                    <div onClick={() => setModel(selectedBrand.models[model].id)} key={selectedBrand.models[model].id} className="text-center p-2 m-2 pointer-on-hover" style={{width:'29%', border: "solid 1px white"}}>
                      
                        <img
                            alt={selectedBrand.models[model].name}
                            height={80}
                            src={selectedBrand.models[model].imageURL}


                            id='carbrandimage'
                        />
                        <div>{selectedBrand.models[model].name} </div>
                    </div>
                ))}
            </div>
        );
    }
    if (!globalState.selectedType) {
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {Object.keys(selectedModel.fuel).map((type) => {
                    let imgURL="";
                    switch(type){
                        case "petrol":{imgURL="https://zeevector.com/wp-content/uploads/2021/02/Hindustan-Petroleum-Logo-PNG.png";break;}
                        case "cng":{imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/CNG_logo_China.svg/1280px-CNG_logo_China.svg.png";break;}
                        case "diesel":{imgURL="https://previews.123rf.com/images/oguzdkn/oguzdkn1809/oguzdkn180900032/109356838-diesel-in-sale-allowed-to-buy-diesel-fuel-gas-station-red-circular-road-sign-isolated.jpg";break;}
                    }
                    return <div onClick={() => setType(type)} key={type} className="text-center p-2 m-2 pointer-on-hover" style={{width:'29%', border: "solid 1px white"}}><img
                        alt={type}
                        height={80}
                        src={imgURL}


                        id='carbrandimage'
                    /><div className="text-capitalize text-center">{type}</div></div>
                })}
            </div>
        );
    }
    return <div/>;
}
