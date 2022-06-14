
const validation = (values) => {

    let errors ={};
    if(!values.firstName){
        errors.firstName="First Name is required"
    }
    if(!values.lastName){
        errors.lastName="Last Name is required"
    }
    if(!values.email){
        errors.email="email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if(!values.password){
        errors.password="Password is required"
    } else if(values.password.length < 5){
        errors.password="Password must be atleast 5 characters long"
    }

  return errors;
};

export default validation