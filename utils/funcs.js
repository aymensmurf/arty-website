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

export const artKeyToTitle = (artKey) => {
	switch (artKey) {
		case "theatres":
			return "theater";
		case "handcrafts":
			return "hand crafts";
		case "sandarts":
			return "sand art";
		case "paintingtools":
			return "painting tools";
		case "photographytools":
			return "photography tools";
	}

	return artKey.replace("_", " ");
};

export const skillNameToIcon = (title) => {
	if (title) {
		switch (title.toLowerCase().split(" ").join("")) {
			case "music":
				return "/img/skill-items/music.png";
			case "painting":
				return "/img/skill-items/painting.png";
			case "theater":
				return "/img/skill-items/theater.png";
			case "dance":
				return "/img/skill-items/dance.png";
			case "photography":
				return "/img/skill-items/photography.png";
			case "sculpture":
				return "/img/skill-items/sculpture.png";
			case "architecture":
				return "/img/skill-items/architecture.png";
			case "literature":
				return "/img/skill-items/literature.png";
			case "handcrafts":
				return "/img/skill-items/handcrafts.png";
			case "calligraphy":
				return "/img/skill-items/caligraphy.png";
			case "sandart":
				return "/img/skill-items/sandarts.png";
			default:
				return "/img/skill-items/empty-skill.png";
		}
	}
};

export const compareSparkToTitle = (spark, title) => {
	if (spark && title) {
		spark = spark.toLowerCase();
		title = title.toLowerCase().replace(" ", "");

		if (spark === title) {
			return true;
		}

		if (spark === `${title}s`) {
			return true;
		}

		if (spark === "theatres" && title === "theater") {
			return true;
		}
	}

	return false;
};
