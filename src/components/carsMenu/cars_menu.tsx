import React from "react";
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
        console.log(id);
        dispatch({ type: "SET_BRAND", payload: id });
    }
    function setModel(id: CarModel["id"]) {
        dispatch({ type: "SET_MODEL", payload: id });
    }
    function setType(type: string) {
        dispatch({ type: "SET_TYPE", payload: type });
    }
    const selectedBrand = brands.find(
        (brand) => brand.id === globalState.selectedBrand
    );
    if (!globalState.selectedBrand || !selectedBrand) {
        return (
            <div className="d-flex flex-wrap justify-content-around overflow-auto">
                {brands.map((brand) => (
                    <div className="text-center" style={{ width: "33%" }}>
                        <img
                            alt={brand.name}
                            height={80}
                            className="pointer-on-hover"
                            src={brand.imageURL}
                            key={brand.id}
                            onClick={() => setBrand(brand.id)}
                        />
                        <div>{brand.name}</div>
                    </div>
                ))}
            </div>
        );
    }
    const selectedModel = selectedBrand.models.find(
        (model) => model.id === globalState.selectedModel
    );
    if (!globalState.selectedModel || !selectedModel) {
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {selectedBrand.models.map((model) => (
                    <div className="text-center" style={{ width: "33%" }}>
                        <img
                            alt={model.name}
                            height={80}
                            className="pointer-on-hover"
                            src={model.imageURL}
                            key={model.id}
                            onClick={() => setModel(model.id)}
                        />
                        <div>{model.name} </div>
                    </div>
                ))}
            </div>
        );
    }
    if (!globalState.selectedType) {
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {selectedModel.type.map((type) => {
                    let imgURL="";
                    switch(type){
                        case "petrol":{imgURL="https://zeevector.com/wp-content/uploads/2021/02/Hindustan-Petroleum-Logo-PNG.png";break;}
                        case "cng":{imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/CNG_logo_China.svg/1280px-CNG_logo_China.svg.png";break;}
                        case "diesel":{imgURL="https://m.media-amazon.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_.jpg";break;}
                    }
                    return <div className="text-center" style={{ width: "33%" }}><img
                        alt={type}
                        height={80}
                        className="pointer-on-hover"
                        src={imgURL}
                        key={type}
                        onClick={() => setType(type)}
                    /><div className="text-capitalize text-center">{type}</div></div>
                })}
            </div>
        );
    }
    return <div></div>;
}
