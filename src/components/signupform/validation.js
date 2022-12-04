const validation =(values) => {
    let errors={};

    if(!values.firstname){
        errors.firstname="Name is required.";

    }
    if(!values.lastname){
        errors.lastname="Name is required.";
    }
    if(!values.email){
        errors.email="Email is required.";
    } /*else if(!/\s+@\s+\.\s+/.test(values.email))
    {
        errors.email="Email is invalid.";
    }*/
    if(!values.password){
        errors.password="Password is required.";
    } else if(values.password.length<5){
        errors.password = "Password must be more than five characters.";
    }
    if(!values.confirmpassword) 
    {
        errors.confirmpassword="Password is required.";
    }else if(values.confirmpassword <5){
        errors.confirmpassword="Password must be more than five characters.";

    }else if(values.confirmpassword !== values.password){
        errors.confirmpassword="confirmpassword is not equal to password.";
    }
    if(values.recruiter)
    {
        if(!values.candidate)
        {
            errors.candidate="Click any one."
        }
    }


    return errors;
}

export default validation;