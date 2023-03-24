import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useRef, useState } from "react";

import { uploadFile } from "../service/api";

export const Input = ({
	sendText,
	setValue,
	value,
	file,
	setFile,
	setImage,
}) => {
	useEffect(() => {
		const setImg = async () => {
			if (file) {
				const data = new FormData();
				data.append("name", file.name);
				data.append("file", file);

				let response = await uploadFile(data);

				setImage(response.data);
			}
		};
		setImg();
	}, [file]);

	const handleFile = (e) => {
		setFile(e.target.files[0]);
		console.log(e.target.files[0]);
		setValue(e.target.files[0].name);
	};

	return (
		<div className="input">
			<i className="fa-regular fa-face-smile"></i>
			<label htmlFor="fileInput">
				<i className="fa-solid fa-paperclip" style={{ rotate: "-45deg" }}></i>
			</label>

			<input
				type="file"
				id="fileInput"
				style={{ display: "none" }}
				onChange={(e) => {
					handleFile(e);
				}}
			/>

			<input
				type="text"
				className="input-text"
				placeholder="
            Type Message..."
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => sendText(e)}
				value={value}
			/>
		</div>
	);
};
export default Input;
