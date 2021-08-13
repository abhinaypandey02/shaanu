export function getErrorText(type: string | undefined, message?: string) {
  switch (type) {
    case "required":
      return "This field is required";
    case "minLength":
      return "Too short";
    case "min":
      return "Too short";
    case "max":
      return "Too long";
    case "maxLength":
      return "Too long";
    case "notUndefined":
      return "Please select an option";
    case "confirmPassword":
      return "Password don't match";
    case "pattern":
      return "Invalid input";
    case "alreadyExists":
      return "Phone number already exists! Please sign in!";
    case undefined:
      return "";
    default: {
      if (message && message !== "") return message;
      return "Error in this field";
    }
  }
}
