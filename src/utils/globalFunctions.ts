export function getErrorText(type:string|undefined){
    switch(type){
        case "required":return "This field is required"
        default: return""
    }
}