import React, {useState, useEffect} from "react";
import validation from "./validation";

const useForm = (submitForm) => {


const [values,setvalues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    recruiter:"",
    candidate:"",

});

const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect]= useState(false);
const handleChange = (event) => {
    setvalues({ 
        ...values,
        [event.target.name]: event.target.value,
    });
};
const handleFormsubmit =(event) =>{
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
};
useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect ){
    submitForm(true);
    }
}, [errors]);
 return { handleChange, handleFormsubmit, errors, values };
};

export default useForm;
