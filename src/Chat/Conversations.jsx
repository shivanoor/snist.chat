import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../service/api";
import Conversation from "./Conversation";
import { AccountContext } from "../contexts/AccountProvider";

export const Conversations = ({ text }) => {
	const { account, socket, setActiveUsers, activeUsers } =
		useContext(AccountContext);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			let res = await getUsers();
			let filteredRes = res.filter((user) =>
				user.name.toLowerCase().includes(text.toLowerCase())
			);
			setUsers(filteredRes);
		};
		fetchData();
	}, [text]);

	useEffect(() => {
		socket.current.emit("addUsers", account);
		socket.current.on("getUsers", (users) => {
			setActiveUsers(users);
		});
	}, [account]);

	return (
		<div className="conversations">
			{users.map(
				(user) => user.sub !== account.sub && <Conversation user={user} />
			)}
		</div>
	);
};

export default Conversations;
