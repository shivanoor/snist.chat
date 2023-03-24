import React, { useContext } from "react";
import { AccountContext } from "../contexts/AccountProvider";

import { formatDate, downloadMedia } from "../utils/commonUtils";

// images

import pdf from "../img/pdf.png";
import docx from "../img/docx.png";
import ppt from "../img/ppt.png";
import pptx from "../img/pptx.png";
import text from "../img/text.png";

export const Message = ({ message }) => {
	const { account } = useContext(AccountContext);
	return (
		<>
			{account.sub === message.senderId ? (
				<>
					{message.type === "file" ? (
						<FileMessageUser message={message} />
					) : (
						<TextMessageUser message={message} />
					)}
				</>
			) : (
				<>
					{message.type === "file" ? (
						<FileMessage message={message} />
					) : (
						<TextMessage message={message} />
					)}
				</>
			)}
		</>
	);
};

const TextMessageUser = ({ message }) => {
	return (
		<div className="message user">
			<p className="">
				{message.text}
				<span className="time text-time">{formatDate(message.createdAt)}</span>
			</p>
		</div>
	);
};
const TextMessage = ({ message }) => {
	return (
		<div className="message">
			<p className="">
				{message.text}
				<span className="time  text-time">{formatDate(message.createdAt)}</span>
			</p>
		</div>
	);
};

const FileMessage = ({ message }) => {
	return (
		<div className="message">
			{message?.text?.includes(".txt") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={text} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : message?.text?.includes(".pdf") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={pdf} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : message?.text?.includes(".pptx") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={pptx} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : message?.text?.includes(".docx") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={docx} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<div className="file-footer">
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</div>
				</div>
			) : message?.text?.includes(".ppt") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={ppt} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : (
				<div className="image-box">
					<img
						src={message.text}
						alt="image"
						onClick={(e) => downloadMedia(e, message.text)}
					/>
				</div>
			)}
		</div>
	);
};

const FileMessageUser = ({ message }) => {
	return (
		<div className="message user">
			{message?.text?.includes(".txt") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={text} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : message?.text?.includes(".pdf") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={pdf} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : message?.text?.includes(".pptx") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={pptx} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : message?.text?.includes(".docx") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={docx} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
					</span>
				</div>
			) : message?.text?.includes(".ppt") ? (
				<div
					className="file-box"
					onClick={(e) => downloadMedia(e, message.text)}
				>
					<div className="file-image">
						<img src={ppt} alt="" />
						<span>{message.text.split("/").pop()}</span>
					</div>
					<span>
						<i
							class="fa-solid fa-download"
							onClick={(e) => downloadMedia(e, message.text)}
						></i>
						<span className="time">{formatDate(message.createdAt)}</span>
					</span>
				</div>
			) : (
				<div className="image-box">
					<img
						src={message.text}
						alt="image"
						onClick={(e) => downloadMedia(e, message.text)}
					/>
				</div>
			)}
		</div>
	);
};

export default Message;
