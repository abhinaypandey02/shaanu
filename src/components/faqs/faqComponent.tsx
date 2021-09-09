import React from "react"
import { Accordion, Card } from "react-bootstrap"
import faqs from "../../database/faqs.json"
import { FAQ } from "../../interfaces/faq"

const FAQComponent = (props: { answersClass: string, firstAlternatingCardHeaderClass: string, secondAlternatingCardHeaderClass: string }) => {
    const { FAQs }: { FAQs: FAQ[] } = faqs
    return (
        <Accordion defaultActiveKey="0">
            {FAQs.map((faq, index) => <Card key={index} className="p-0 m-0">
                <Card.Header
                    className={"pointer-on-hover p-0 m-0 " + (index % 2 === 0 ? props.firstAlternatingCardHeaderClass : props.secondAlternatingCardHeaderClass)}>
                    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                        {index + 1}. {faq.question}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse className="border border-light" eventKey={index.toString()}>
                    <Card.Body className={props.answersClass}>
                        {faq.answer}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>)}

        </Accordion>
    )
}

export default FAQComponent
