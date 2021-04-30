import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUser } from "../../contexts/user_context";
import { CarProfile } from "../../interfaces/car";
import UserInterface from "../../interfaces/user";
import { addCarProfile } from "../../utils/firebase/firestore";
import plus from '../../images/plus.png';
import { uploadButtonImage } from "../../utils/firebase/storage";
export default function CreateCarProfile() {
    const [user, setUser] = useUser();
    const [image, setImage] = useState<any>();
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

    const reset = (old: any) => ({ ...old, errors: "" });
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

    async function onSubmit(e: any) {
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
        let imageURL = '';
        if (image) {
            imageURL = await uploadButtonImage(user, image);
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
            imageURL,
        };
        if (!user) return;
        addCarProfile(user, carProfile).then(()=>{
            setUser((old: UserInterface) => ({
                ...old,
                carProfiles: [...old.carProfiles, carProfile],
            }));
            
        });

        
    }
    function onImageChange(e: any) {
        console.log((e.target.files[0]))
        setImage(e.target.files[0]);
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
            <Form.Group>
                <Form.Label>Add Image (Optional)</Form.Label>
                <div
                    className="d-flex align-items-center justify-content-center pointer-on-hover"
                    style={{
                        backgroundColor: "#F4F5F8",
                        height:(image  ? 109 : 109),
                        maxWidth:(image  ? 109 : 92)
                    }}
                    onClick={() =>
                        document.getElementById("choose_pp")?.click()
                    }
                >
                    <img
                        alt="plus"
                        style={{maxHeight:(image  ? 109 : 27),maxWidth:(image  ? 109 : 27)}}
                        src={
                            image
                                ? URL.createObjectURL(image)
                                : plus
                        }
                    />
                    <input
                        id="choose_pp"
                        style={{
                            display: "none",
                        }}
                        type="file"
                        onChange={onImageChange}
                    />
                </div>
            </Form.Group>
            <Button type="submit">Create Profile</Button>
        </Form>
    );
}
