import React from "react";
import { Form } from "react-bootstrap";

export default function CreateCarProfile() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>car's name</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>regn. no.</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>chassis no.</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>engine no</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>car color</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>insurance date</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>insurance comp.</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>address</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form>
    );
}
