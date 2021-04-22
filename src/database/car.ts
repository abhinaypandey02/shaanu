import { CarBrand } from "../interfaces/car";

export function getBrands():CarBrand[]{
    return [
        {name:"Honda",id:"hyun",models:[
            {name:"Civic",id:"Civic",type:["petrol","cng"]},
            {name:"Jazz",id:"Jazz",type:["petrol","diesel"]},
            {name:"City",id:"City",type:["petrol","cng"]},
        ]},
        {name:"Maruti",id:"hyun2",models:[
            {name:"Swift",id:"Swift",type:["petrol","diesel"]},
            {name:"Swift Dzire",id:"Swift Dzire",type:["petrol","cng","diesel"]},
            {name:"800",id:"800",type:["petrol"]},
        ]},
        {name:"Hyundai",id:"hyun3",models:[
            {name:"i10",id:"i10",type:["petrol","cng","diesel"]},
            {name:"i20",id:"i20",type:["petrol"]},
            {name:"i30",id:"i30",type:["petrol","cng","diesel"]},
        ]},
    ]
}