import { Plan } from "../interfaces/plan";

export function getPlans(): Plan[] {
    return [
        {
            id: "a-repair",
            title: "A Repair",
            description: "With supporting text loerm ipsum",
            subPlans: [
                {
                    id: "a-repair-1",
                    title: "Normal A service",
                    description: "Normal A service",
                    price: 100,
                },
                {
                    id: "a-repair-1",
                    title: "Nice A service",
                    description: "Nice A service",
                    price: 100,
                },
                {
                    id: "a-repair-1",
                    title: "Very Nice A service",
                    description: "Very Nice A service",
                    price: 100,
                },
                {
                    id: "a-repair-1",
                    title: "Premium A service",
                    description: "Premium A service",
                    price: 100,
                },
            ],
        },
        {
            id: "b-repair",
            title: "B Repair",
            description: "With supporting text loerm ipsum",
            subPlans: [
                {
                    id: "b-repair-1",
                    title: "Normal B service",
                    description: "Normal B service",
                    price: 100,
                },
                {
                    id: "b-repair-1",
                    title: "Nice B service",
                    description: "Nice B service",
                    price: 100,
                },
                {
                    id: "b-repair-1",
                    title: "V nice B service",
                    description: "V nice B service",
                    price: 100,
                },
                {
                    id: "b-repair-1",
                    title: "Premium B service",
                    description: "Premium B service",
                    price: 100,
                },
            ],
        },
        {
            id: "c-repair",
            title: "C Repair",
            description: "With supporting text loerm ipsum",
            subPlans: [
                {
                    id: "c-repair-1",
                    title: "Normal C service",
                    description: "Normal C service",
                    price: 100,
                },
                {
                    id: "c-repair-1",
                    title: "Mast C service",
                    description: "Mast C service",
                    price: 100,
                },
                {
                    id: "c-repair-1",
                    title: "Faadhu C service",
                    description: "Faadhu C service",
                    price: 100,
                },
                {
                    id: "c-repair-1",
                    title: "Premium C service",
                    description: "Premium C service",
                    price: 100,
                },
            ],
        },
    ];
}
