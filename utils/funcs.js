import { SERVER_URL } from "./consts";

export const getImageUri = (uri) => {
	if (uri && (uri.startsWith("https://") || uri.startsWith("file:///"))) {
		return uri;
	}

	return `${SERVER_URL}/${uri}`;
};

export const timeToReadbleTime = (time) => {
	const date2 = new Date();
	const date1 = new Date(time);

	const diffTime = Math.abs(date2 - date1);
	const diffMinutes = Math.floor(diffTime / (1000 * 60));
	if (diffMinutes > 60 && diffMinutes < 1440) {
		const minutes = diffMinutes - parseInt(diffMinutes / 60) * 60;
		return parseInt(diffMinutes / 60) + "h and " + minutes + "m ago";
	} else if (diffMinutes <= 1) {
		return "Just now";
	} else if (diffMinutes / 60 < 1) {
		return diffMinutes + "m ago";
	} else if (diffMinutes > 1440) {
		const hours = diffMinutes / 60 - (diffMinutes / 1440) * 24;
		return (
			parseInt(diffMinutes / 1440) +
			"d" +
			(parseInt(hours) == 0
				? " ago"
				: " and " + (parseInt(hours) < 0 ? parseInt(hours) * -1 : parseInt(hours)) + "h ago")
		);
	}
};
