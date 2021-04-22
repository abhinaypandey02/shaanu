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
                    title: "Premium",
                    description: "Normal A service",
                    price: 100,
                },
                {
                    id: "a-repair-1",
                    title: "Premium",
                    description: "Nice A service",
                    price: 100,
                },
                {
                    id: "a-repair-1",
                    title: "Premium",
                    description: "Very Nice A service",
                    price: 100,
                },
                {
                    id: "a-repair-1",
                    title: "Premium",
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
                    title: "Premium",
                    description: "Normal B service",
                    price: 100,
                },
                {
                    id: "b-repair-1",
                    title: "Premium",
                    description: "Nice B service",
                    price: 100,
                },
                {
                    id: "b-repair-1",
                    title: "Premium",
                    description: "V nice B service",
                    price: 100,
                },
                {
                    id: "b-repair-1",
                    title: "Premium",
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
                    title: "Premium",
                    description: "Normal C service",
                    price: 100,
                },
                {
                    id: "c-repair-1",
                    title: "Premium",
                    description: "Mast C service",
                    price: 100,
                },
                {
                    id: "c-repair-1",
                    title: "Premium",
                    description: "Faadhu C service",
                    price: 100,
                },
                {
                    id: "c-repair-1",
                    title: "Premium",
                    description: "Premium C service",
                    price: 100,
                },
            ],
        },
    ];
}
