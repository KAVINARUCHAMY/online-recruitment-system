import React from 'react';
//import { ReactDOM } from 'react';
import useform from "./useform.js";
import {Link, Route } from 'react-router-dom';

const signupform =({ submitform }) => {
    const {handleChange, handleFormsubmit, values, errors} = useform(
        submitform
    );
        
    
    return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">First Name</label>
                    <input className="input" type="text" name="firstname" value={values.firstname} onChange={handleChange} placeholder="firstname"/>
                
                {errors.firstname && <p className="error">{errors.firstname} </p>}
                </div>
                <div className="name">
                    <label className="label">Last Name</label>
                    <input className="input" type="text" name="lastname" value={values.lastname} onChange={handleChange} placeholder="lastname"/>
                
                {errors.lastname && <p className="error">{errors.lastname} </p>}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" type="email" name="email" value={values.email} onChange={handleChange} placeholder="email"/>
            
                {errors.email && <p className="error">{errors.email} </p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange} placeholder="password"/>
            
                {errors.password && <p className="error">{errors.password} </p>}
                </div>
                <div className="password">
                    <label className="label">Confirmpassword</label>
                    <input className="input" type="password" name="confirmpassword" value={values.confirmpassword} onChange={handleChange} placeholder="confirmpassword"/>
                
                {errors.confirmpassword && <p className="error">{errors.confirmpassword} </p>}
                </div>
            </form>
            <form className="checker">  
                    <div className="recuriter">
                    <input className="input" type="radio" name="recruiter" value={values.recruiter} onChange={handleChange} ></input>
                    <label className="label">Recuriter</label>
                    
                {errors.recuriter && <p className="error">{errors.recruiter}</p>}
                </div>
                <div className="recuriter">
                    <input className="input" type="radio" name="candidate" value={values.candidate} onChange={handleChange} ></input>
                    <label className="label">Candidate</label>
                    
                {errors.candidate && <p className="error">{errors.candidate}</p>}
                </div>
                <div button className="submit" onClick={handleFormsubmit}><Link to="/components/login/Loginform">Sign Up</Link></div>
                <Route path='./components/login/Loginform' compononet ={Loginform}></Route>
            </form>
            
        </div>
    </div>
    )
};

export default signupform;
