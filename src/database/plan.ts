import { Plan } from "../interfaces/plan";

export function getPlans(): Plan[] {
    return [
        {
            id: "a-repair",
            title: "A Repair",
            description: "With supporting text loerm ipsum",
            subPlans: [
                {
                    id: "a-b-repair-1",
                    title: "Bronze",
                    description: "Normal A service",
                    price: 100,
                    color:"#CD7F32"
                },
                {
                    id: "a-s-repair-1",
                    title: "Silver",
                    description: "Nice A service",
                    price: 100,
                    color:"silver"
                },
                {
                    id: "a-g-repair-1",
                    title: "Gold",
                    description: "Very Nice A service",
                    price: 100,
                    color:"gold"
                },
                {
                    id: "a-p-repair-1",
                    title: "Platinum",
                    description: "Premium A service",
                    price: 100,
                    color:"#E5E4E2"
                },
            ],
        },
        {
            id: "b-repair",
            title: "B Repair",
            description: "With supporting text loerm ipsum",
            subPlans: [
                {
                    id: "b-b-repair-1",
                    title: "Bronze",
                    description: "Normal B service",
                    price: 100,
                    color:"#CD7F32"
                },
                {
                    id: "b-s-repair-1",
                    title: "Silver",
                    description: "Nice B service",
                    price: 100,
                    color:"silver"
                },
                {
                    id: "b-g-repair-1",
                    title: "Gold",
                    description: "V nice B service",
                    price: 100,
                    color:"gold"
                },
                {
                    id: "b-p-repair-1",
                    title: "Platinum",
                    description: "Premium B service",
                    price: 100,
                    color:"#E5E4E2"
                },
            ],
        },
        {
            id: "c-repair",
            title: "C Repair",
            description: "With supporting text loerm ipsum",
            subPlans: [
                {
                    id: "c-b-repair-1",
                    title: "Bronze",
                    description: "Normal C service",
                    price: 100,
                    color:"#CD7F32"
                },
                {
                    id: "c-s-repair-1",
                    title: "Silver",
                    description: "Mast C service",
                    price: 100,
                    color:"silver"
                },
                {
                    id: "c-g-repair-1",
                    title: "Gold",
                    description: "Faadhu C service",
                    price: 100,
                    color:"gold"
                },
                {
                    id: "c-p-repair-1",
                    title: "Platinum",
                    description: "Premium C service",
                    price: 100,
                    color:"#E5E4E2"
                },
            ],
        },
    ];
}
