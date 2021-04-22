import { CarBrand } from "../interfaces/car";

export function getBrands():CarBrand[]{
    return [
        {name:"hyundai",id:"hyun",models:[
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i30",id:"i10",type:["petrol"]},
        ]},
        {name:"hyundai2",id:"hyun2",models:[
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i30",id:"i10",type:["petrol"]},
        ]},
        {name:"hyundai3",id:"hyun3",models:[
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i30",id:"i10",type:["petrol"]},
        ]},
    ]
}