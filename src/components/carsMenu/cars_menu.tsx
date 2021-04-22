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
                    <Button onClick={() => setBrand(brand.id)}>
                        {brand.name}
                    </Button>
                ))}
            </div>
        );
    }
    const selectedModel=selectedBrand.models.find(model=>model.id===globalState.selectedModel)
    console.log(selectedModel)
    if (!globalState.selectedModel||!selectedModel ) {
        return (
            <div className="d-flex justify-content-around">
                {selectedBrand.models.map((model) => (
                    <Button onClick={() => setModel(model.id)}>
                        {model.name}
                    </Button>
                ))}
            </div>
        );
    }
    if (!globalState.selectedType ) {
        return (
            <div className="d-flex justify-content-around">
                {selectedModel.type.map((type) => (
                    <Button onClick={() => setType(type)}>
                        {type}
                    </Button>
                ))}
            </div>
        );
    }
    return <div></div>;
}
