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
    regNo: number;
    odometer: number;
    avg: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    fuel: string;
    id:string;
    services:ServiceInterface[];
}
