import React, { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../contexts/AccountProvider";
import { getMessages, newMessage } from "../service/api";
// components
import Input from "./Input";
import Message from "./Message";

export const ChatBox = ({ person, conversation }) => {
	const [value, setValue] = useState("");
	const [messages, setMessages] = useState([]);
	const [file, setFile] = useState();
	const [image, setImage] = useState("");

	const [incomingMessage, setIncomingMessage] = useState(null);

	const scrollRef = useRef();

	const { account, socket, newMessageFlag, setNewMessageFlag } =
		useContext(AccountContext);

	useEffect(() => {
		socket.current.on("getMessage", (data) => {
			setIncomingMessage({
				...data,
				createdAt: Date.now(),
			});
		});
	});

	useEffect(() => {
		const getMessageDetails = async () => {
			let messagesData = await getMessages(conversation._id);
			setMessages(messagesData);
		};

		{
			conversation && getMessageDetails();
		}
	}, [conversation, newMessageFlag]);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ transition: "smooth" });
	}, [messages]);

	useEffect(() => {
		incomingMessage &&
			conversation?.members?.includes(incomingMessage.senderId) &&
			setMessages((prev) => [...prev, incomingMessage]);
	}, [incomingMessage, conversation]);

	const sendText = async (e) => {
		if (e.code === "Enter") {
			let message = {};
			e.preventDefault();
			if (!file) {
				message = {
					senderId: account.sub,
					recieverId: person.sub,
					conversationId: conversation._id,
					type: "text",
					text: value,
				};
			} else {
				message = {
					senderId: account.sub,
					recieverId: person.sub,
					conversationId: conversation._id,
					type: "file",
					text: image,
				};
			}

			socket.current.emit("sendMessage", message);

			await newMessage(message);

			setValue("");
			setFile("");
			setImage("");
			setNewMessageFlag((prev) => !prev);
		}
	};

	return (
		<div className="chat-box">
			<div className="message-box">
				{messages &&
					messages.map((m) => (
						<div ref={scrollRef}>
							<Message message={m} />
						</div>
					))}
			</div>

			<Input
				sendText={sendText}
				setValue={setValue}
				value={value}
				file={file}
				setFile={setFile}
				setImage={setImage}
			/>
		</div>
	);
};

export default ChatBox;
