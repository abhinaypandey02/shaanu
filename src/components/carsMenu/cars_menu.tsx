import React from "react";
import { Button } from "react-bootstrap";
import {
    GlobalStateInterface,
    useGlobalState,
} from "../../contexts/global_state";
import { getBrands } from "../../database/car";
import { CarBrand, CarModel } from "../../interfaces/car";

export default function CarsMenu() {
    const [globalState, dispatch]: [
        GlobalStateInterface,
        any
    ] = useGlobalState();
    const brands = getBrands();

    function setBrand(id: CarBrand["id"]) {
        console.log(id)
        dispatch({ type: "SET_BRAND", payload: id });
    }
    function setModel(id: CarModel["id"]) {
        dispatch({ type: "SET_MODEL", payload: id });
    }
    function setType(type: string) {
        dispatch({ type: "SET_TYPE", payload: type });
    }
    const selectedBrand=brands.find(brand=>brand.id===globalState.selectedBrand)
    if (!globalState.selectedBrand||!selectedBrand) {
        return (
            <div className="d-flex justify-content-around">
                {brands.map((brand) => (
                    <div>
                    <img className="pointer-on-hover" src={brand.imageURL} key={brand.id} onClick={() => setBrand(brand.id)}/>
                    <div>{brand.name}</div>
                   </div>
                ))}
            </div>
        );
    }
    const selectedModel=selectedBrand.models.find(model=>model.id===globalState.selectedModel)
    if (!globalState.selectedModel||!selectedModel ) {
        return (
            <div className="d-flex justify-content-around">
                {selectedBrand.models.map((model) => (
                    <div>
                    <img className="pointer-on-hover" src={model.imageURL} key={model.id} onClick={() => setModel(model.id)}/>
<div>{model.name} </div>
                        </div>

                        
                    
                ))}
            </div>
        );
    }
    if (!globalState.selectedType ) {
        return (
            <div className="d-flex justify-content-around">
                {selectedModel.type.map((type) => (
                    <Button key={type} onClick={() => setType(type)}>
                        {type}
                    </Button>
                ))}
            </div>
        );
    }
    return <div></div>;
}
