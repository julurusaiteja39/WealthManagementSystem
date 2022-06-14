import React, { useState } from "react";

import "../App.css";

function SignupForm() {

    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

   
    const handleClick = (e) => {
        e.preventDefault()
        const studentAdd = { id,email, password, firstName, lastName }
        console.log(studentAdd)
        fetch("http://localhost:8086/users/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentAdd)

        }).then(() => {
            setIsSubmitted(true);
        })
    }
    const renderForm = (
        <div className="form">
            <form onSubmit={handleClick}>
            <div className="input-container">
                    <label><h3>Id :-
                        <input type="number" name="uid" placeholder="Enter your Id" value={id}
                            onChange={(e) => setId(e.target.value)} required /></h3></label>
                </div>
                <div className="input-container">
                    <label><h3>E- Mail :-
                        <input type="email" name="uname" placeholder="Enter your Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required /></h3></label>
                </div>
                <div className="input-container">
                    <label><h3>Password :-
                        <input type="password" name="pass" placeholder="Enter the Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required /></h3></label>
                </div>
                <div className="input-container">
                    <label><h3>First Name :-
                        <input type="text" name="first_name" placeholder="Enter the First Name" value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} required /></h3></label>
                </div >
                <div className="input-container">
                    <label><h3>Last Name :-
                        <input type="text" name="last_name" placeholder="Enter the Last Name" value={lastName}
                            onChange={(e) => setLastName(e.target.value)} required /></h3></label >
                </div >
                <div className="button-container">
                    <input type="submit" />
                </div>
                <div>
                    <h5>This is for testing</h5>
                </div>
            </form >
        </div >
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title"><h2>User Registration - Sign Up</h2></div>
                {isSubmitted ? <div><h2>You have Signed Up Successfully !</h2>
                    <a href='/login'><h3>Click here to Login</h3></a>
                </div> : renderForm}
            </div>
        </div>
    );
}
export default SignupForm;