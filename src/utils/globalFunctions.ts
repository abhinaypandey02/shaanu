export function getErrorText(type:string|undefined){
    switch(type){
        case "required":return "This field is required";
        case"minLength":return "Too short";
        case "notUndefined":return "Please select an option";
        case "confirmPassword":return "Password don't match";
        case "pattern":return "Invalid input";
        default: return""
    }
}