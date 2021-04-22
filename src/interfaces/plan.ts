export interface Plan{
    id:string;
    title:string;
    description:string;
    subPlans:SubPlan[]
}
export interface SubPlan{
    id:string;
    title:string;
    description:string;
    price:number;
    color:string;
}