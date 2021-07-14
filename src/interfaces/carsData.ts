export default interface CarsData {
    [key:string]:{
        imageURL:string,
        id:string,
        name:string,
        models:{
            [key:string]:{
                name:string,
                id:string,
                imageURL:string,
                segment:string,
                fuel:{
                    [key: string]:{
                        name:string,
                        id:string,
                        imageURL:string,
                        services:{
                            name:string,
                            price:number,
                            category:string,
                        }[]
                    }
                }
            }
        }
    }
}