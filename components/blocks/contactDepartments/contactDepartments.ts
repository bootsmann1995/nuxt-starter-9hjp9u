import { IContactDepartment } from "~~/interfaces/pages/contactDetailPage";
import ContactButton from "./contactButton/contactButton.vue";
import ContactPerson from "./contactPerson/contactPerson.vue";

export default defineNuxtComponent({
	components: {
		ContactPerson,
		ContactButton,
	},
	props: {
		items: {
			type: Object as () => IContactDepartment,
		},
	},
	setup() {
		return {};
	},
});
