import { ICar } from "~~/interfaces/pages/brandPage";

export default defineNuxtComponent({
	props: {
		item: {
			type: Object as () => ICar,
		},
	},

	setup() {
		return {};
	},
});
