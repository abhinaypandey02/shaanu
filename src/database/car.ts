import { CarBrand } from "../interfaces/car";

export function getBrands():CarBrand[]{
    return [
        {name:"Honda",id:"hyun",models:[
            {name:"Civic",id:"i10",type:["petrol","cng"]},
            {name:"Jazz",id:"i10",type:["petrol","diesel"]},
            {name:"City",id:"i10",type:["petrol","cng"]},
        ]},
        {name:"Maruti",id:"hyun2",models:[
            {name:"Swift",id:"i10",type:["petrol","diesel"]},
            {name:"Swift Dzire",id:"i10",type:["petrol","cng","diesel"]},
            {name:"800",id:"i10",type:["petrol"]},
        ]},
        {name:"Hyundai",id:"hyun3",models:[
            {name:"i10",id:"i10",type:["petrol","cng","diesel"]},
            {name:"i10",id:"i10",type:["petrol"]},
            {name:"i30",id:"i10",type:["petrol","cng","diesel"]},
        ]},
    ]
}