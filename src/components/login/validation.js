const validation =(values)=>{

    let errors ={};
    if(!values.username){
        errors.username="Username is Required.";
    }
    if(!values.password){
        errors.password="Password is Required.";
    }
    else if(values.password.length<5){
        errors.password="Password must be greater than 5";
    }

    return errors;

};
export default validation;