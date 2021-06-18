import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import JobInterface from "../../../interfaces/job";
import {v4} from 'uuid';
import { setJob } from "../../../utils/firebase/firestore";
import { useHistory } from "react-router-dom";
export default function AddJob({ setTab }: { setTab: Function }) {
    const { register, handleSubmit } = useForm();
    const his=useHistory();
    function FormGroup({ name, type }: { name: string; type: string }) {
        return (
            <Form.Group>
                <Form.Label className="text-white">{name}</Form.Label>
                <Form.Control
                    {...register(name)}
                    name={name}
                    id={name}
                    placeholder={"Enter " + name}
                    type={type}
                />
            </Form.Group>
        );
    }
    async function onSubmit(data: any) {
        const tempJob:JobInterface={...data,id:v4(),services:[]};
        await setJob(tempJob);
        his.push("/job/"+tempJob.id);
    }

    return (
        <div className='container'>
            <div className="row-fluid p-3 text-center text-light">
                <h1>ADD JOB</h1>
            </div>
            <div>
                <Button onClick={() => setTab("jobs")}>Back</Button>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup name="Registration No" type="text" />
                <FormGroup name="Odometer" type="number" />
                <FormGroup name="Avg KMS/day" type="number" />
                <FormGroup name="Car Maker" type="text" />
                <FormGroup name="Car Model" type="text" />
                <FormGroup name="Car Variant" type="text" />
                <FormGroup name="Car Year" type="number" />
                <FormGroup name="Vehicle Colour" type="text" />
                <FormGroup name="Fuel Type" type="text" />
                <FormGroup name="Car Year" type="text" />
                <Button type="submit">Add Job</Button>
            </Form>
        </div>
    );
}
