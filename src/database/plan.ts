import CarsData from '../interfaces/carsData';
import carsDataJSON from './carsData.json' ;

interface Service{
    [key:string]:{
        name:string,
        price:number
    }[]
}

export function getPlans(brand:string|null,model:string|null,fuel:string|null): Service{
    if(!brand||!model||!fuel)return {};

    const carsData:CarsData=carsDataJSON as CarsData;
    const services=carsData[brand].models[model].fuel[fuel].services;
    let data:Service={};
    services.forEach((service:any)=>{
        if(data[service.category]){
            data[service.category].push({
                name:service.name,
                price:service.price
            })
        } else {
            data[service.category]=[{
                name:service.name,
                price:service.price
            }]
        }
    })
    return data;
}
