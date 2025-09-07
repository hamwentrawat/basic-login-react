import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "./LoginSub.css"
const LoginSub = ({ handleLogin }) => {
    const [signUpMode, setSignUpMode] = useState(false);
    const toggleSignupClass = () => {
        setSignUpMode(!signUpMode);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [allEntry, setAllEntry] = useState([]);
    const [error, setError] = useState('');
    const actionFormSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        if (email === "admin@gmail.com" && password === "admin@123") {
            handleLogin();
        }
        else {
            setError('Invalid username or password hemant ji');
        }
    }
    return (
        <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <Login error={error} handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmitForm={actionFormSubmit} />
                    <SignUp />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={toggleSignupClass}>
                            Sign up
                        </button>
                    </div>
                    <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={toggleSignupClass}>
                            Sign in
                        </button>
                    </div>
                    <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginSub