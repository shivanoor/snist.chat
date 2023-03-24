import React, { useState } from "react";

// components
import ChatListHeader from "./ChatListHeader";
import Conversations from "./Conversations";
import Search from "./Search";

export const ChatList = () => {
	const [text, setText] = useState("");
	return (
		<div className="chat-list">
			<ChatListHeader />
			<Search setText={setText} />
			<Conversations text={text} />
		</div>
	);
};

export default ChatList;
