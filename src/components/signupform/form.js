import React from 'react';
import { useState } from 'react';
import Signupform from "./Signupform";
import Signupformsuccess from "./Signupformsuccess";
const Form =() =>{
    const [formIssubmitted, setformsubmitted] = useState(false);

    const submitForm =() =>{
       setformsubmitted(true);
};   

    return (
        <div> {!formIssubmitted ? (<Signupform submitForm={submitForm}/> ) : (<Signupformsuccess /> )}
        
    </div>

    );

};

export default Form;