import { ICarService } from "~~/interfaces/pages/contactDetailPage";

export default defineNuxtComponent({
	props: {
		item: Object as () => ICarService,
	},

	setup() {
		return {};
	},
});
