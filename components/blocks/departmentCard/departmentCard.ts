import { IDepartment } from "~~/interfaces/pages/contactPage";

export default defineNuxtComponent({
	props: {
		card: {
			type: Object as () => IDepartment,
		},
	},
	setup() {
		const dayOfWeek = new Date().toLocaleString("default", { weekday: "long" });
		const day = dayOfWeek.toLocaleLowerCase();

		return {
			day,
		};
	},
});
