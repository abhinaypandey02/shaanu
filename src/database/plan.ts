import CarsData, { CarsDataService } from "../interfaces/carsData"
import carsDataJSON from "./carsData.json"

interface Service {
    [key: string]: CarsDataService[]
}

export function getPlans(brand: string | null, model: string | null, fuel: string | null): Service {
    if (!brand || !model || !fuel) return {}

    const carsData: CarsData = carsDataJSON as CarsData
    const services = carsData[brand].models[model].fuel[fuel].services
    let data: Service = {}
    services.forEach((service: any) => {
        if (!service.description) service.description = ""
        if (data[service.category]) {
            data[service.category].push(service)
        } else {
            data[service.category] = [service]
        }
    })
    return data
}
