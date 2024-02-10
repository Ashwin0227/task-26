export const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexContact = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!values.Customer_ID) {
      errors.id = "Customer ID is required!";
    }
    if (!values.Customer_Name) {
        errors.name = "customer name is required!";
      }
    if (!values.Customer_Email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.Customer_Email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Password) {
      errors.password = "Password is required";
    } else if (values.Password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } 
    if(!values.Contact){
        errors.contact = "contact is required!";
    }else if (!regexContact.test(values.Contact)){
        errors.contact = "This is not a valid Contact format!";
    }
    if(values.age===0){
      errors.age = "incorrect age!"
    }
    return errors;
  };