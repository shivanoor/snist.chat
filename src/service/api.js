import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
	try {
		await axios.post(`${url}/add`, data);
	} catch (error) {
		console.log("Error while Adding User in api ", error.message);
	}
};

export const getUsers = async () => {
	try {
		let res = await axios.get(`${url}/users`);
		return res.data;
	} catch (error) {
		console.log("Error while calling getUsers in api" + error.message);
	}
};

export const setConversation = async (data) => {
	try {
		await axios.post(`${url}/conversation/add`, data);
	} catch (error) {
		console.log("Error while setting Conversation in api", +error.messsage);
	}
};

export const getConversation = async (data) => {
	try {
		let res = await axios.post(`${url}/conversation/get`, data);
		return res.data;
	} catch (error) {
		console.log("Error while getting Conversation in api", +error.messsage);
	}
};

export const newMessage = async (data) => {
	try {
		await axios.post(`${url}/message/add`, data);
	} catch (error) {
		console.log(
			"Error while saving newMessage in database in api " + error.message
		);
	}
};

export const getMessages = async (id) => {
	try {
		let res = await axios.get(`${url}/message/get/${id}`);
		return res.data;
	} catch (error) {
		console.log(
			"Error while getting  messages  from database in api " + error.message
		);
	}
};

export const uploadFile = async (data) => {
	try {
		return await axios.post(`${url}/file/upload`, data);
		
	} catch (error) {
		console.log("Error while Uploading File in api " + error.message);
	}
};
