import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Style.css';

function Login() {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginNameErr, setLoginNameErr] = useState(false);
    const [loginPasswordErr, setPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function Loginvalidation() {
        if (loginName.trim().length !== 0) {
            setLoginNameErr(false);
        } else {
            setLoginNameErr(true);
        }

        if (loginPassword.trim().length !== 0) {
            setPasswordErr(false);
        } else {
            setPasswordErr(true);
        }

        const register = JSON.parse(localStorage.getItem('user'));
        if (register && (register.name !== loginName || register.password !== loginPassword)) {
            setIncorrectErr(true);
            alert("User Not Found");
        } else if (register) {
            setIncorrectErr(false);
            window.location.href = '/';
        }
    }

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>Login</h1>
                {incorrectErr && <small className="error-message">Enter the correct username and password</small>}
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type='text' 
                            id="username" 
                            value={loginName} 
                            onChange={(e) => setLoginName(e.target.value)}
                            className={loginNameErr ? 'input-error' : ''}
                        />
                        {loginNameErr && <small className="error-message">Please enter the Username</small>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            id="password" 
                            value={loginPassword} 
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className={loginPasswordErr ? 'input-error' : ''}
                        />
                        {loginPasswordErr && <small className="error-message">Please enter the password</small>}
                    </div>
                    <label className="checkbox-container">
                        <input 
                            type="checkbox" 
                            checked={showPassword} 
                            onChange={() => setShowPassword(!showPassword)} 
                        />
                        <span className="checkmark"></span>
                        Show Password
                    </label>
                    <button type="button" onClick={Loginvalidation}>Login</button>
                </form>
                <p className="register-link">Don't have an account yet? <Link to={'/register'}>Register</Link></p>
            </div>
            
        </div>
    );
}

export default Login;