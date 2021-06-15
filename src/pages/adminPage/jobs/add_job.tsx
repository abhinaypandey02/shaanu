import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
export default function AddJob({ setTab }: { setTab: Function }) {
    const { register, handleSubmit } = useForm();
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
    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <div>
            <div className="row-fluid p-3 text-center text-light">
                <h1>ADD JOB</h1>
            </div>
            <div>
                <Button onClick={() => setTab("jobs")}>Back</Button>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup name="Registration No." type="text" />
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
