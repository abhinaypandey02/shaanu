import React from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import JobInterface from "../../../interfaces/job"
import { v4 } from "uuid"
import { setJob } from "../../../utils/firebase/firestore"
import { useHistory } from "react-router-dom"
import { getErrorText } from "../../../utils/globalFunctions"
import carsDataJSON from "../../../database/carsData.json"
import CarsData from "../../../interfaces/carsData"
import ROUTES_META from "../../../metadata/routes_meta"

export default function AddJob({ setTab }: { setTab: Function }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()
    const his = useHistory()
    const carsData = carsDataJSON as CarsData
    const brandWatch = watch("brand")
    const modelWatch = watch("model")

    async function onSubmit({
                                brand,
                                model,
                                fuel,
                                regNo,
                                odometer,
                                color,
                                year,
                                avg
                            }: any) {
        const tempJob: JobInterface = {
            brand,
            model,
            fuel,
            regNo,
            odometer,
            color,
            year,
            avg,
            id: v4(),
            services: []
        }
        await setJob(tempJob)
        his.push("/job/" + tempJob.id)
    }

    return (
        <div className="container">
            <div className="row-fluid p-3 text-center text-light">
                <h1>ADD JOB</h1>
            </div>
            <div>
                <Button
                    onClick={() => setTab(ROUTES_META.admin + ROUTES_META.adminJobs)}
                >
                    Back
                </Button>
            </div>
            <Form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Select Brand</Form.Label>
                    <Form.Control
                        className="rounded-0"
                        as="select"
                        {...register("brand", { required: true })}
                    >
                        <option value="">Car Brand</option>
                        {Object.keys(carsData).map((key) => (
                            <option key={key} value={carsData[key].id}>{carsData[key].name}</option>
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
                        {brandWatch &&
                        Object.keys(carsData[brandWatch].models).map((key) => {
                            return (
                                <option key={key} value={carsData[brandWatch].models[key].id}>
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
                    <Form.Label>Select Fuel</Form.Label>
                    <Form.Control
                        disabled={!modelWatch}
                        className="rounded-0"
                        as="select"
                        {...register("fuel", { required: true })}
                    >
                        <option value="">Car Fuel</option>
                        {modelWatch &&
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
                    <Form.Label>Registration No.</Form.Label>
                    <Form.Control
                        placeholder="Registration No."
                        {...register("regNo", { required: true })}
                    />
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.regNo?.type)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Odometer</Form.Label>
                    <Form.Control
                        placeholder="Odometer"
                        type="number"
                        {...register("odometer", { required: true })}
                    />
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.odometer?.type)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Avg. Kms/day</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Avg. Kms/day"
                        {...register("avg", { required: true })}
                    />
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.avg?.type)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Car Color</Form.Label>
                    <Form.Control
                        placeholder="Car Color"
                        {...register("color", { required: true })}
                    />
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.color?.type)}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Car Year</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Car Year"
                        {...register("year", { required: true })}
                    />
                    <Form.Text className="text-danger small">
                        {getErrorText(errors.year?.type)}
                    </Form.Text>
                </Form.Group>

                <Button type="submit">Add Job</Button>
            </Form>
        </div>
    )
}
