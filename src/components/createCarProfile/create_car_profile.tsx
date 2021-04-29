import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CarProfile } from "../../interfaces/car";

export default function CreateCarProfile() {
    const [name, setName] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [regNo, setRegNo] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [chasisNo, setChasisNo] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [engineNo, setEngineNo] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [carColor, setCarColor] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [insuranceDate, setInsuranceDate] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [insuranceComp, setInsuranceComp] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });
    const [address, setAddress] = useState({
        value: "",
        errors: "",
        name: "car's name",
    });

    const reset = (old: any) => ({ ...old, value: "" });
    const values = [
        name,
        regNo,
        chasisNo,
        engineNo,
        carColor,
        insuranceComp,
        insuranceDate,
        address,
    ];
    const setFunctions = [
        setName,
        setRegNo,
        setChasisNo,
        setEngineNo,
        setCarColor,
        setInsuranceComp,
        setInsuranceDate,
        setAddress,
    ];

    function onSubmit(e: any) {
        e.preventDefault();
        setFunctions.forEach((f) => f(reset));
        for (let i = 0; i < values.length; i++) {
            if (values[i].value === "") {
                console.log("object");
                setFunctions[i]((old) => ({
                    ...old,
                    errors: "Required Field",
                }));
                return;
            }
        }
        const carProfile: CarProfile = {
            name: name.value,
            regNo: regNo.value,
            chasisNo: chasisNo.value,
            engineNo: engineNo.value,
            carColor: carColor.value,
            insuranceComp: insuranceComp.value,
            insuranceDate: insuranceDate.value,
            address: address.value,
        };
    }

    return (
        <Form onSubmit={onSubmit}>
            {values.map((value, index) => (
                <Form.Group>
                    <Form.Label>{value.name}</Form.Label>
                    <Form.Control
                        value={value.value}
                        onChange={(e) =>
                            setFunctions[index]((old) => ({
                                ...old,
                                value: e.target.value,
                            }))
                        }
                    />
                    <Form.Text className="text-danger small">
                        {value.errors}
                    </Form.Text>
                </Form.Group>
            ))}
            <Button type="submit">Create Profile</Button>
        </Form>
    );
}
