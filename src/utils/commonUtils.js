export const formatDate = (date) => {
	const hours = new Date(date).getHours();
	const mins = new Date(date).getMinutes();
	return `${hours < 10 ? "0" + hours : hours}:${mins < 10 ? "0" + mins : mins}`;
};

export const downloadMedia = (e, origin) => {
	e.preventDefault();

	try {
		fetch(origin)
			.then((res) => res.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.style.display = "none";
				a.href = url;

				const name = origin.split("/").pop();

				a.download = "" + name + "";
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
			.catch((err) =>
				console.log("Error while downlaoding file " + err.messsage)
			);
	} catch (error) {
		console.log("Error while downlaoding file " + error.messsage);
	}
};
