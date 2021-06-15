export interface ServiceInterface {
    partName: string;
    partLabour: "part" | "labour";
    qty: number;
    price: number;
    discount: number;
    hsn: number;
    taxPercentage: 12 | 5 | 18 | 28 | 0;
    taxRs: number;
    total: number;
    id: string;
}
export const defaultService: ServiceInterface = {
    partName: "",
    partLabour: "part",
    qty: 1,
    price: 0,
    discount: 0,
    hsn: 87081090,
    taxPercentage: 0,
    taxRs: 0,
    total: 0,
    id: "",
};
export default interface JobInterface {
    "Registration No.": number;
    Odometer: number;
    "Avg KMS/day": number;
    "Car Maker": string;
    "Car Model": string;
    "Car Variant": string;
    "Car Year": number;
    "Vehicle Colour": string;
    "Fuel Type": string;
    id:string;
    services:ServiceInterface[];
}
export const defaultJob:JobInterface={
    "Registration No.": 0,
    Odometer: 0,
    "Avg KMS/day": 0,
    "Car Maker": "",
    "Car Model": "",
    "Car Variant": "",
    "Car Year": 0,
    "Vehicle Colour": "",
    "Fuel Type": "",
    id:"",
    services:[]
}
