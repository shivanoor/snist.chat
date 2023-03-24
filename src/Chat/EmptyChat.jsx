import React from "react";
import smart from "../img/logo/smart.svg";
import logo2 from '../img/logo2.png'
export const EmptyChat = () => {
	return (
		<div className="empty-chat">
			<img src={logo2} alt=""  className="snist-logo"/>
			<h2>Start Messaging</h2>
			<img src={smart} alt="" />
		</div>
	);
};
