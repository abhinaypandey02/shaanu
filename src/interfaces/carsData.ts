export interface CarsDataService {
    name: string,
    price: number,
    category: string,
    description: string;
}

export interface CarsDataFuel {
    name: string,
    id: string,
    imageURL: string,
    services: CarsDataService[]
}

export interface CarsDataModel {
    name: string,
    id: string,
    imageURL: string,
    segment: string,
    fuel: {
        [key: string]: CarsDataFuel
    }
}

export interface CarsDataBrand {
    imageURL: string,
    id: string,
    name: string,
    models: {
        [key: string]: CarsDataModel
    }
}

export default interface CarsData {
    [key: string]: CarsDataBrand
}