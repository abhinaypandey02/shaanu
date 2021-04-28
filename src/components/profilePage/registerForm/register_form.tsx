import React from 'react'
import { Form } from 'react-bootstrap'

export default function RegisterForm() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
                <Form.Text></Form.Text>
            </Form.Group>
        </Form>
    )
}
