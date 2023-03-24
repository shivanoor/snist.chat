import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AccountContext } from "../contexts/AccountProvider";

// comp0nents

import ChatList from "./ChatList";
import MessagesSide from "./MessagesSide";
import "./home.scss";
import { EmptyChat } from "./EmptyChat";
const Home = () => {
	const { account } = useContext(AccountContext);
	const { person } = useContext(AccountContext);

	return (
		<>
			{account ? (
				<div className="home">
					<ChatList />
					<MessagesSide />
				</div>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
};

export default Home;
