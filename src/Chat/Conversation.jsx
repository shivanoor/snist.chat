import React, { useContext, useEffect, useState } from "react";

import { AccountContext } from "../contexts/AccountProvider";
import { setConversation, getConversation } from "../service/api";
import { formatDate } from "../utils/commonUtils";
export const User = ({ user }) => {
	const { setPerson, account, newMessageFlag } = useContext(AccountContext);
	const [message, setMesssage] = useState({});
	useEffect(() => {
		const getConversationDetails = async () => {
			const data = await getConversation({
				senderId: account.sub,
				recieverId: user.sub,
			});

			setMesssage({ text: data?.message, timestamp: data?.updatedAt });
		};
		getConversationDetails();
	}, [newMessageFlag]);

	const getUser = async () => {
		setPerson(user);
		await setConversation({ senderId: account.sub, recieverId: user.sub });
	};
	return (
		<div className="conversation" onClick={() => getUser()}>
			<div className="user-left">
				<img src={user.picture ? user.picture : ""} alt="" />
				<span>{user.name}</span>
				{/* <span>{}</span> */}
			</div>
			<div className="user-right">
				<span>{message?.text && formatDate(message?.timestamp)}</span>
			</div>
		</div>
	);
};

export default User;
