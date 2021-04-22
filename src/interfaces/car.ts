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