import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useUser} from "../../contexts/user_context";
import {CarProfile} from "../../interfaces/car";
import UserInterface from "../../interfaces/user";
import {addCarProfile} from "../../utils/firebase/firestore";
import plus from '../../images/plus.png';
import {uploadButtonImage} from "../../utils/firebase/storage";
import {useForm} from "react-hook-form";
import carsDataJSON from '../../database/carsData.json';
import CarsData from "../../interfaces/carsData";
import {getErrorText} from "../../utils/globalFunctions";

export default function CreateCarProfile() {
    const [user, setUser] = useUser();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<any>();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const carsData = carsDataJSON as CarsData;
    const brandWatch = watch("brand");
    const modelWatch = watch("model");

    async function onSubmit({
                                brand,
                                model,
                                fuel,
                                regNo,
                                chasisNo,
                                engineNo,
                                carColor,
                                insuranceDate,
                                insuranceComp,
                                address
                            }: any) {
        setLoading(true);
        let imageURL = '';
        if (image) {
            imageURL = await uploadButtonImage(user, image);
        }
        const carProfile: CarProfile =
            {
                brand,
                model,
                fuel,
                chasisNo,
                engineNo,
                carColor,
                insuranceDate,
                insuranceComp,
                address,
                regNo,
                imageURL
            };
        if (!user) return;
        await addCarProfile(user, carProfile);
        setUser((old: UserInterface) => ({
            ...old,
            carProfiles: [...old.carProfiles, carProfile],
        }));
        setLoading(false);
    }

    function onImageChange(e: any) {
        console.log((e.target.files[0]))
        setImage(e.target.files[0]);
    }

    return (
        <Form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <Row>


            <Col xs={12} md={6}>
                <Form.Group>
                    <Form.Label>Select Brand</Form.Label>
                    <Form.Control
                        className='rounded-0'
                        as="select"
                        {...register("brand", {required: true})}
                    >
                        <option value=''>Car Brand</option>
                        {Object.keys(carsData).map(key =>
                            <option value={carsData[key].id}>{carsData[key].name}</option>
                        )}
                    </Form.Control>
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.brand?.type)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Model</Form.Label>
                    <Form.Control
                        disabled={!brandWatch}
                        className='rounded-0'
                        as="select"
                        {...register("model", {required: true})}
                    >
                        <option value=''>Car Model</option>
                        {brandWatch && Object.keys(carsData[brandWatch].models).map((key) => {
                                return <option
                                    value={carsData[brandWatch].models[key].id}>{carsData[brandWatch].models[key].name}</option>
                            }
                        )}
                    </Form.Control>
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.model?.type)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Fuel</Form.Label>
                    <Form.Control
                        disabled={!modelWatch}
                        className='rounded-0'
                        as="select"
                        {...register("fuel", {required: true})}
                    >
                        <option value=''>Car Fuel</option>
                        {modelWatch && Object.keys(carsData[brandWatch].models[modelWatch].fuel).map((key) => {
                                return <option
                                    value={carsData[brandWatch].models[modelWatch].fuel[key].id}>{carsData[brandWatch].models[modelWatch].fuel[key].name}</option>
                            }
                        )}
                    </Form.Control>
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.fuel?.type)}
                    </Form.Text>
                </Form.Group>
                {[
                    {name: "Registration No.", id: "regNo",required:true},
                    {name: "Car Color", id: "carColor",required:true},
                    {name: "Address", id: "address",required:true},
                ].map(obj => <Form.Group>
                    <Form.Label>{obj.name} {!obj.required&&"(Optional)"}</Form.Label>
                    <Form.Control placeholder={obj.name} {...register(obj.id, {required: obj.required})}/>
                    <Form.Text className="text-danger small">
                        {getErrorText(errors[obj.id]?.type)}
                    </Form.Text>
                </Form.Group>)
                }
            </Col>
            <Col xs={12} md={6}>
                {[
                    {name: "Chasis No.", id: "chasisNo",required:false},
                    {name: "Engine No.", id: "engineNo",required:false},
                    {name: "Insurance Date", id: "insuranceDate",required:false},
                    {name: "Insurance Company", id: "insuranceComp",required:false},
                ].map(obj => <Form.Group>
                    <Form.Label>{obj.name} {!obj.required&&"(Optional)"}</Form.Label>
                    <Form.Control placeholder={obj.name} {...register(obj.id, {required: obj.required})}/>
                    <Form.Text className="text-danger small">
                        {getErrorText(errors[obj.id]?.type)}
                    </Form.Text>
                </Form.Group>)
                }

                <Form.Group>
                    <Form.Label>Add Image (Optional)</Form.Label>
                    <div
                        className="d-flex align-items-center justify-content-center pointer-on-hover"
                        style={{
                            backgroundColor: "#F4F5F8",
                            height: (image ? 109 : 109),
                            maxWidth: (image ? 109 : 92)
                        }}
                        onClick={() =>
                            document.getElementById("choose_pp")?.click()
                        }
                    >
                        <img
                            alt="plus"
                            style={{maxHeight: (image ? 109 : 27), maxWidth: (image ? 109 : 27)}}
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
            </Col>
            </Row>
            <Button disabled={loading} variant='warning' className='rounded-0' type="submit">Create Profile</Button>
        </Form>
    );
}
