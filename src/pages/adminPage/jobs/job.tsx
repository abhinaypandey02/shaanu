import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import JobInterface from "../../../interfaces/job";
import { getJob, setJob } from "../../../utils/firebase/firestore";
import { v4 } from "uuid";
import { ServiceInterface, defaultService } from "../../../interfaces/job";

function MyLadInput(service: any, setServices: Function, field: string) {
    return (
        <input
            style={{ width: 150 }}
            onChange={(e) => {
                setServices((old: any[]) => {
                    const prev = old.find(
                        (service2) => service2.id === service.id
                    );
                    if (prev) prev[field] = e.target.value;
                    return [...old];
                });
            }}
            value={service[field]}
        />
    );
}

const processPrice = (prev: ServiceInterface) => prev.price * prev.qty;

function processTotal(prev: ServiceInterface) {
    return processPrice(prev) * (1 + prev.taxPercentage / 100) - prev.discount;
}

function Service({
    service,
    index,
    setServices,
}: {
    service: ServiceInterface;
    index: number;
    setServices: Function;
}) {
    return (
        <tr key={service.id}>
            <td>{index + 1}</td>
            <td>{MyLadInput(service, setServices, "partName")}</td>
            <td>{MyLadInput(service, setServices, "partLabour")}</td>
            <td>
                <input
                    type="number"
                    style={{ width: 150 }}
                    onChange={(e) => {
                        setServices((old: any[]) => {
                            const prev = old.find(
                                (service2) => service2.id === service.id
                            );
                            if (prev) {
                                prev.qty = parseInt(e.target.value);
                                prev.total = processTotal(prev);
                            }
                            return [...old];
                        });
                    }}
                    value={service.qty}
                />
            </td>
            <td>
                <input
                    type="number"
                    style={{ width: 150 }}
                    onChange={(e) => {
                        setServices((old: any[]) => {
                            const prev = old.find(
                                (service2) => service2.id === service.id
                            );
                            if (prev) {
                                prev.price = parseInt(e.target.value);
                                prev.total = processTotal(prev);
                            }
                            return [...old];
                        });
                    }}
                    value={service.price}
                />
            </td>
            <td>
                <input
                    type="number"
                    style={{ width: 150 }}
                    onChange={(e) => {
                        setServices((old: any[]) => {
                            const prev = old.find(
                                (service2) => service2.id === service.id
                            );
                            if (prev) {
                                prev.discount = parseInt(e.target.value);
                                prev.total = processTotal(prev);
                            }
                            return [...old];
                        });
                    }}
                    value={service.discount}
                />
            </td>
            <td>{MyLadInput(service, setServices, "hsn")}</td>
            <td>
                <select
                    style={{ width: 150 }}
                    onChange={(e) => {
                        setServices((old: any[]) => {
                            const prev = old.find(
                                (service2) => service2.id === service.id
                            );
                            if (prev) {
                                prev.taxPercentage = parseInt(e.target.value);
                                prev.taxRs =
                                    (prev.taxPercentage * prev.price) / 100;
                                prev.total = processTotal(prev);
                            }
                            return [...old];
                        });
                    }}
                    value={service.taxPercentage}
                >
                    <option value={0}>0%</option>
                    <option value={5}>5%</option>
                    <option value={12}>12%</option>
                    <option value={18}>18%</option>
                    <option value={28}>28%</option>
                </select>
            </td>
            <td>
                <input style={{ width: 150 }} disabled value={service.taxRs} />
            </td>

            <td>
                <input style={{ width: 150 }} disabled value={service.total} />
            </td>
            <td>
                <Button
                    onClick={() =>
                        setServices((old: ServiceInterface[]) =>
                            old.filter(
                                (service2: ServiceInterface) =>
                                    service2.id !== service.id
                            )
                        )
                    }
                    variant="danger"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}

export default function Job() {
    const [job, setJob2] = React.useState<JobInterface>();
    const [services, setServices] = React.useState<ServiceInterface[]>([]);
    const { register, handleSubmit } = useForm();
    const params: any = useParams();
    function onSave() {
        if (job)
            setJob({ ...job, services }).then(() => {
                alert("Saved!");
            });
    }
    useEffect(() => {
        getJob(params.jobID).then((data: any) => {
            if(data){

                setJob2(data);
                setServices(data.services);
            }
        });
    }, [params.jobID]);
    function onSubmit(data: any) {
        setServices((old) => [
            ...old,
            {
                ...defaultService,
                partName: data.partName,
                price: parseInt(data.price),
                total: parseInt(data.price),
                partLabour: data.serviceLabour,
                id: v4(),
            },
        ]);
    }
    return (
        <div className="text-white p-5">
            <div>Job</div>
            <Form onSubmit={handleSubmit(onSubmit)} inline>
                <Form.Group className='mx-2'>
                    <Form.Control
                        {...register("partName")}
                        placeholder="PART NUMBER / PART NAME"
                    />
                </Form.Group>
                <Form.Group className='mx-2'>
                    <Form.Control
                        type="number"
                        {...register("price")}
                        placeholder="PART PRICE"
                    />
                </Form.Group>
                <Form.Group className='mx-2'>
                    <Form.Control 
                        as="select"
                        {...register("serviceLabour")}
                        placeholder="SERVICE/LABOUR"
                    >
                        <option value="part">Service</option>
                        <option value="labour">Labour</option>
                    </Form.Control>
                </Form.Group>
                <Button className='mx-2' type="submit">+</Button>
            </Form>
            <br/>
            <table className="table" style={{border: '2px white solid '}}>
                <tbody >
                    <tr className='alert alert-dark text-dark'>
                        <th>#</th>
                        <th>Part Name</th>
                        <th>Part/Labour</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>HSN/SAC</th>
                        <th>Tax%</th>
                        <th>Tax Rs</th>
                        <th>Total Rs</th>
                    </tr>
                    {services.map((service, index) => (
                        <Service
                            setServices={setServices}
                            service={service}
                            index={index}
                            key={service.id}
                        />
                    ))}
                    <tr>
                        <td colSpan={5}>Grand Total</td>
                        <td colSpan={3}>{services.reduce((accu,curr)=>accu+curr.discount,0)}</td>
                        <td >{services.reduce((accu,curr)=>accu+curr.taxRs,0)}</td>
                        <td >{services.reduce((accu,curr)=>accu+curr.total,0)}</td>
                    </tr>
                    <tr>
                        <td colSpan={9}>Discount</td>
                        <td >{services.reduce((accu,curr)=>accu+curr.discount,0)}</td>
                    </tr>
                    <tr>
                        <td colSpan={9}>Paid</td>
                        <td >0</td>
                    </tr>
                    <tr>
                        <td colSpan={9}>Balance</td>
                        <td >{services.reduce((accu,curr)=>accu+curr.total,0)}</td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={onSave} variant="success">
                Save
            </Button>
        </div>
    );
}
