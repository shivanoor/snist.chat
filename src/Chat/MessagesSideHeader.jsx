import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import "./MessageSide.scss";
import { AccountContext } from "../contexts/AccountProvider";

export const MessagesSideHeader = ({ person }) => {
	const { activeUsers } = useContext(AccountContext);
	return (
		<div className="header-container">
			<div>
				<img src={person.picture} alt="dp" className="dp" />
			</div>
			<div className="message-side-header">
				<div className="header-left">
					<span
						className="username"
						style={{
							fontSize: 18,
							fontWeight: 500,
						}}
					>
						{person.name}
					</span>

					<span style={{ fontSize: 12 }}>
						{activeUsers?.find((user) => user.sub == person.sub)
							? "online"
							: "offline"}
					</span>
				</div>
				{/* <div className="message-side-icons">
					<FontAwesomeIcon icon={faSearch} className="icon" />
					<FontAwesomeIcon icon={faEllipsisV} className="icon" />
				</div> */}
			</div>
		</div>
	);
};

export default MessagesSideHeader;
