import { CarBrand } from "../interfaces/car";

export function getBrands():CarBrand[]{
    return [
        {name:"Honda",id:"hyun",imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg",models:[
            {name:"Civic",id:"Civic",type:["petrol","cng"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-3-model-472.jpeg"},
            {name:"Jazz",id:"Jazz",type:["petrol","diesel"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-9-model-243.jpeg"},
            {name:"City",id:"City",type:["petrol","cng"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-3-model-472.jpeg"},
        ]},
        {name:"Maruti",id:"hyun2",imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-3.jpeg",models:[
            {name:"Swift",id:"Swift",type:["petrol","diesel"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-3-model-45.jpeg"},
            {name:"Swift Dzire",id:"Swift Dzire",type:["petrol","cng","diesel"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-3-model-45.jpeg"},
            {name:"800",id:"800",type:["petrol"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-9-model-243.jpeg"},
        ]},
        {name:"Hyundai",id:"hyun3",imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-4.jpeg",models:[
            {name:"i10",id:"i10",type:["petrol","cng","diesel"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-9-model-243.jpeg"},
            {name:"i20",id:"i20",type:["petrol"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-2-model-39.jpeg"},
            {name:"i30",id:"i30",type:["petrol","cng","diesel"],imageURL:"https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-2-model-39.jpeg"},
        ]},
        
    ]
}