import React, {useState} from "react";
import Loginform from "./Loginform";
import Loginsuccess from"./Loginsuccess";

const Form = ()=>{ 
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    return (
    <div>
        {!formIsSubmitted ? (<Loginform submitForm={submitForm} />) : (<Loginsuccess />)
    }
    </div>
    );
};

export default Form;