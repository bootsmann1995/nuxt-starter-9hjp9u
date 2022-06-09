import { IContactPerson } from "~~/interfaces/pages/contactDetailPage";

export default defineNuxtComponent({
	props: {
		item: {
			type: Object as () => IContactPerson,
		},
	},
	setup() {
		return {};
	},
});
