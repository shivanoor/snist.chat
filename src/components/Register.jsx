import React, { useState } from "react";
import { useContext } from "react";
// import googlelogo from "../img/logo/google.png";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
// googleLogout();
import jwtDecode from "jwt-decode";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { AccountContext } from "../contexts/AccountProvider";
import "./register.scss";
const Register = () => {
	const { account, setAccount } = useContext(AccountContext);
	const onLoginSuccess = (res) => {
		console.log(jwtDecode(res.credential));
		setAccount(jwtDecode(res.credential));
		// googleLogout();
	};
	const onLoginError = (res) => {
		console.log(res);
	};
	return (
		<div className="signup-section">
			<div className="signup-form">
				{account && <Navigate to="/home" />}
				<h2 className="heading">SNIST Chat</h2>
				<h5>Register</h5>
				{/* {err && (
					<span
						style={{
							color: "red",
							display: "flex",
							alignContent: "center",
							justifyContent: "center",
						}}
					>
						Something went wrong
					</span>
				)} */}
				<form>
					<input type="text" placeholder="Display Name"></input>
					<input type="email" placeholder="Email"></input>
					<input type="password" placeholder="Password"></input>
					<button className="signup-btn"> Sign up</button>
				</form>
				<div className="orseg">
					<span className="line"></span>
					<span>OR</span>
					<span className="line"></span>
				</div>
				{/* {err && (
					<span style={{ textAlign: "center" }}>Something went wrong</span>
				)} */}
				<div className="icons">
					<GoogleLogin
						onSuccess={onLoginSuccess}
						onError={onLoginError}
						useOneTap
					/>
				</div>
				<p>
					Already registered?<Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
