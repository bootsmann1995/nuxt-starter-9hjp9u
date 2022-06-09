export const useMapcolor = (color: string) => {
	const colors: { key: string; value: string }[] = [
		{ key: "Blå", value: "#004878" },
		{ key: "Rød", value: "#C71717" },
		{ key: "Sølv", value: "#E1E4E9" },
		{ key: "Sort", value: "#1E2327" },
		{ key: "Grå", value: "#CED3DC" },
		{ key: "Hvid", value: "#fff" },
		{ key: "Brun", value: "#fff" },
	];

	const mappedColor = colors.find((x) => color === x.key);

	if (mappedColor != null) {
		return mappedColor.value;
	} else {
		return "#CED3DC";
	}
};
