import carsDataJSON from './carsData.json' ;
export function getPlans(brand:string|null,model:string|null,fuel:string|null): any {
    if(!brand||!model||!fuel)return {};
    const carsData:any=carsDataJSON;
    const services=carsData[brand].models[model].fuel[fuel].services;
    let data:any={};
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
