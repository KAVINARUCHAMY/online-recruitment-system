import React from "react";
import useForm from "./useForm.js";

const Loginform=({submitForm}) =>{
    const {handleChange, handleFormsubmit, values, errors} = useForm(
         submitForm
);

    return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">LOGIN</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">UserName</label>
                    <input className="input" type="text" name="username" value={values.username} onChange={handleChange} placeholder="Username"/>
                
                {errors.username && <p className="error">{errors.username} </p>}
                </div>
                
                
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange} placeholder="password"/>
            
                {errors.password && <p className="error">{errors.password} </p>}
                </div>
                
                 <div button className="submit" onClick={handleFormsubmit}>Login</div>
            </form>
        </div>
    </div>
    )
}

export default  Loginform;
