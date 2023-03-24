// import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./login.scss";

import { AccountContext } from "../contexts/AccountProvider";
import { addUser } from "../service/api";
// logos

import logo1 from "../img/logo1.png";
const Login = () => {
	const { account, setAccount } = useContext(AccountContext);
	const [userError, setUserError] = useState(false);
	const onLoginSuccess = async (res) => {
		let decode = jwtDecode(res.credential);
		if (!decode.email.includes("@sreenidhi.edu.in")) {
			setUserError(true);
			return <Navigate to="/login" />;
		}
		setAccount(decode);
		await addUser(decode);
	};

	const onLoginError = (res) => {
		console.log(res);
	};

	return (
		<div
			className="login-page
		"
		>
			<div className="section">
				<div className="login">
					{account && <Navigate to="/home" />}
					<img src={logo1} alt="Logo" />

					<h2>
						JOIN NOW AND START YOUR CONVERSATIONS{" "}
						<i class="fa-solid fa-arrow-down fa-beat-fade"></i>
					</h2>
					<div className="login-form">
						{userError && (
							<span id="login-err">Use Valid Sreenidhi Email Id to join</span>
						)}

						<div className="icons">
							<div className="google-login">
								<GoogleLogin
									id="googleLogin"
									onSuccess={onLoginSuccess}
									onError={onLoginError}
									buttonText="Login"
								/>
							</div>
						</div>
					</div>

					<div className="box"></div>
				</div>
				<div className="box-2"></div>
			</div>
		</div>
	);
};
export default Login;
