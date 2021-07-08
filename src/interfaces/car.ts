export interface CarModel{
    name:string;
    id:string;
    imageURL:string;
    type:("petrol"|"cng"|"diesel")[]
}
export interface CarBrand{
    name:string;
    id:string;
    models:CarModel[];
    imageURL:string;
}
export interface CarInterface{
    id:string;
    brand:string;
    model:string;
    segment:string;
    fuel:string;
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
    imageURL:string;
}