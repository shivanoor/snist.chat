import React, { useContext, useEffect, useState } from "react";
import "./MessageSide.scss";

import { AccountContext } from "../contexts/AccountProvider";

import { getConversation } from "../service/api";
//components
import MessagesSideHeader from "./MessagesSideHeader";
import ChatBox from "./ChatBox";

import { EmptyChat } from "./EmptyChat";

export const MessagesSide = () => {
	const { person, account } = useContext(AccountContext);
	const [conversation, setConversation] = useState({});

	useEffect(() => {
		const getConversationDetails = async () => {
			let conversationData = await getConversation({
				senderId: account.sub,
				recieverId: person.sub,
			});
			setConversation(conversationData);
		};

		getConversationDetails();
	}, [person.sub]);

	return (
		<div className="messages-side">
			{Object.keys(person).length ? (
				<>
					<MessagesSideHeader person={person} />
					<ChatBox person={person} conversation={conversation} />
				</>
			) : (
				<EmptyChat />
			)}
		</div>
	);
};

export default MessagesSide;
