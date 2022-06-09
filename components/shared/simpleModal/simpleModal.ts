import { OnClickOutside } from "@vueuse/components";
import { IModalOptions } from "~~/interfaces/components/shared/simpleModal/modalOptions";

export default defineNuxtComponent({
	components: {
		OnClickOutside,
	},
	emits: ["closeModal"],
	props: {
		options: {
			type: Object as () => IModalOptions,
			default: {
				backgroundColor: "default",
				layout: "boxed",
			},
		},
	},
	setup() {
		return { OnClickOutside };
	},
});
