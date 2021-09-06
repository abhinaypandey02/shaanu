import React, { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useUser } from "../../contexts/user_context"
import { CarProfile } from "../../interfaces/car"
import UserInterface from "../../interfaces/user"
import { addCarProfile } from "../../utils/firebase/firestore"
import plus from "../../images/plus.png"
import { uploadButtonImage } from "../../utils/firebase/storage"
import { useForm } from "react-hook-form"
import carsDataJSON from "../../database/carsData.json"
import CarsData from "../../interfaces/carsData"
import { getErrorText } from "../../utils/globalFunctions"
import { v4 } from "uuid"
import { useGlobalState } from "../../contexts/global_state"

const getDateFormat = (date: Date) => {
    const months = date.getMonth()
    const dates = date.getDate()
    return `${date.getFullYear()}-${months < 9 ? 0 : ""}${
        months + 1
    }-${dates < 9 ? 0 : ""}${dates}`
}

export default function CreateCarProfile({
                                             carProfile,
                                             closeModal,
                                             setCurrentCarProfile
                                         }: {
    carProfile: CarProfile | null;
    closeModal: () => void;
    setCurrentCarProfile: any;
}) {
    const [user, setUser] = useUser()
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<any>()
    const [{ selectedBrand, selectedModel, selectedType }] = useGlobalState()
    let defaultValues: any = {}
    if (carProfile) {
        defaultValues = { ...carProfile }
        delete defaultValues.insuranceDate
    } else {
        if (selectedBrand) defaultValues.brand = selectedBrand
        if (selectedModel) defaultValues.model = selectedModel
        if (selectedType) defaultValues.fuel = selectedType
    }

    console.log(defaultValues)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm({ defaultValues })

    const carsData = carsDataJSON as CarsData
    const brandWatch = watch("brand")
    const modelWatch = watch("model")
    const datewatch = watch("insuranceDate")
    console.log(datewatch)
    useEffect(() => {
        if (modelWatch === defaultValues.model && brandWatch === defaultValues.brand) return
        setValue("model", "")
        setValue("fuel", "")
    }, [brandWatch])
    useEffect(() => {
        if (modelWatch === defaultValues.model && brandWatch === defaultValues.brand) return
        setValue("fuel", "")
    }, [modelWatch])

    async function onSubmit({
                                brand,
                                model,
                                fuel,
                                regNo,
                                chasisNo,
                                engineNo,
                                insuranceDate,
                                insuranceComp,
                                address
                            }: any) {
        setLoading(true)
        let imageURL = ""
        if (image) {
            imageURL = await uploadButtonImage(user, image)
        }

        const carProfileTemp: CarProfile = {
            brand,
            model,
            fuel,
            chasisNo,
            engineNo,
            insuranceDate:
                insuranceDate.toString() !== "Invalid Date"
                    ? insuranceDate.toISOString()
                    : null,
            insuranceComp,
            address,
            regNo,
            imageURL,
            documents: [],
            notifications: [],
            id: carProfile ? carProfile.id : v4()
        }
        if (!user) return
        const carProfiles = user.carProfiles
        const thisCarProfile = carProfiles.findIndex(
            (car) => car.id === carProfile?.id
        )

        if (thisCarProfile !== -1) {
            carProfiles[thisCarProfile] = carProfileTemp
        } else {
            carProfiles.push(carProfileTemp)
        }
        console.log(carProfiles, thisCarProfile)

        await addCarProfile(user, carProfiles)
        setCurrentCarProfile(carProfileTemp)
        setUser((old: UserInterface) => ({
            ...old,
            carProfiles
        }))
        closeModal()
        setLoading(false)
    }

    function onImageChange(e: any) {
        const file = e.target.files[0]
        if (!file.type.startsWith("image/")) {
            alert("Kindly provide a Image file")
            return
        }
        setImage(file)
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const maxDate = getDateFormat(today)
    const defaultDate = carProfile?.insuranceDate ? getDateFormat(new Date(carProfile.insuranceDate)) : maxDate
    const regNo = register("regNo", { required: true })
    // @ts-ignore
    return (
        <Form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Select Brand</Form.Label>
                        <Form.Control
                            className="rounded-0"
                            as="select"
                            {...register("brand", { required: true })}
                        >
                            <option value="">Car Brand</option>

                            {Object.keys(carsData).map((key) => (
                                <option key={key} value={carsData[key].id}>
                                    {carsData[key].name}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-danger small">
                            {getErrorText(errors.brand?.type)}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select Model</Form.Label>
                        <Form.Control
                            disabled={!brandWatch}
                            className="rounded-0"
                            as="select"
                            {...register("model", { required: true })}
                        >
                            <option value="">Car Model</option>
                            {carsData[brandWatch] &&
                            Object.keys(carsData[brandWatch].models).map((key) => {
                                return (
                                    <option
                                        key={key}
                                        value={carsData[brandWatch].models[key].id}
                                    >
                                        {carsData[brandWatch].models[key].name}
                                    </option>
                                )
                            })}
                        </Form.Control>
                        <Form.Text className="text-danger small">
                            {getErrorText(errors.model?.type)}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Registration No.</Form.Label>
                        <Form.Control
                            placeholder="Registration No."
                            {...regNo}
                            onChange={(e) => {
                                e.target.value = e.target.value.toUpperCase()
                                regNo.onChange(e)
                            }}
                        />
                        <Form.Text className="text-danger small">
                            {getErrorText(errors.regNo?.type)}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            placeholder={"Address"}
                            {...register("address", { required: true })}
                        />
                        <Form.Text className="text-danger small">
                            {getErrorText(errors.address?.type)}
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    {[
                        { name: "Chasis No.", id: "chasisNo", required: false },
                        { name: "Engine No.", id: "engineNo", required: false },
                        { name: "Insurance Company", id: "insuranceComp", required: false }
                    ].map((obj: any) => (
                        <Form.Group key={obj.id}>
                            <Form.Label>
                                {obj.name} {!obj.required && "(Optional)"}
                            </Form.Label>
                            <Form.Control
                                placeholder={obj.name}
                                {...register(obj.id, { required: obj.required })}
                            />
                            <Form.Text className="text-danger small">
                                {() => {
                                    // @ts-ignore
                                    getErrorText(errors[obj.id]?.type)
                                }}
                            </Form.Text>
                        </Form.Group>
                    ))}

                    <Form.Group>
                        <Form.Label>Insurance Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            defaultValue={defaultDate}
                            max={maxDate}
                            placeholder={"Insurance Date"}
                            {...register("insuranceDate", {
                                valueAsDate: true,
                                validate: {
                                    notOld: (v) => {
                                        v.setHours(0, 0, 0, 0)
                                        console.log(v)
                                        if (v.toString() === "Invalid Date") return true
                                        return (
                                            v <= today || "Can't select a date greater than today!"
                                        )
                                    }
                                }
                            })}
                        />
                        <Form.Text className="text-danger small">
                            {getErrorText(
                                errors.insuranceDate?.type,
                                errors.insuranceDate?.message
                            )}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Select Fuel</Form.Label>
                        <Form.Control
                            disabled={!modelWatch}
                            className="rounded-0"
                            as="select"
                            {...register("fuel")}
                        >
                            <option value="">Car Fuel (Optional)</option>
                            {carsData[brandWatch] &&
                            carsData[brandWatch].models[modelWatch] &&
                            Object.keys(carsData[brandWatch].models[modelWatch].fuel).map(
                                (key) => {
                                    return (
                                        <option
                                            key={key}
                                            value={
                                                carsData[brandWatch].models[modelWatch].fuel[key].id
                                            }
                                        >
                                            {carsData[brandWatch].models[modelWatch].fuel[key].name}
                                        </option>
                                    )
                                }
                            )}
                        </Form.Control>
                        <Form.Text className="text-danger small">
                            {getErrorText(errors.fuel?.type)}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Add Image (Optional)</Form.Label>
                        <div
                            className="d-flex align-items-center justify-content-center pointer-on-hover"
                            style={{
                                backgroundColor: "#F4F5F8",
                                height: image ? 109 : 109,
                                maxWidth: image ? 109 : 92
                            }}
                            onClick={() => document.getElementById("choose_pp")?.click()}
                        >
                            <img
                                alt="plus"
                                style={{
                                    maxHeight: image ? 109 : 27,
                                    maxWidth: image ? 109 : 27
                                }}
                                src={image ? URL.createObjectURL(image) : plus}
                            />
                            <input
                                id="choose_pp"
                                style={{
                                    display: "none"
                                }}
                                accept="image/*"
                                type="file"
                                onChange={onImageChange}
                            />
                        </div>
                    </Form.Group>
                </Col>
            </Row>
            <Button
                disabled={loading}
                variant="warning"
                className="rounded-0"
                type="submit"
            >
                {carProfile ? "Edit" : "Create"} Profile
            </Button>
        </Form>
    )
}
