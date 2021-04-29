export interface CarModel{
    name:string;
    id:string;
    type:("petrol"|"cng"|"diesel")[]
}
export interface CarBrand{
    name:string;
    id:string;
    models:CarModel[]
}
export interface CarProfile{
    name:string;
    regNo:string;
    chasisNo:string;
    engineNo:string;
    carColor:string;
    insuranceDate:string;
    insuranceComp:string;
    address:string;
}