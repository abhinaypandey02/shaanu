import React from 'react'
import { Form } from 'react-bootstrap'

export default function LoginForm() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Email2</Form.Label>
                <Form.Control type="email"/>
                <Form.Text></Form.Text>
            </Form.Group>
        </Form>
    )
}
