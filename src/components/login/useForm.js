import React, { useState, useEffect } from "react";
import validation from "./validation";

const useForm = (submitForm) => {
        
const [values, setValues] = useState({
            username:"",
            password:"",
 });

 
const [errors, setErrors] =useState({}); 
const [dataIsCorrect, setDataIsCorrect] = useState(false);
const handleChange =(event) =>{  
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    
    });
     
};
const handleFormsubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
};
useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
}, [errors]);
 return { handleChange, handleFormsubmit, errors,values };
};

export default useForm;