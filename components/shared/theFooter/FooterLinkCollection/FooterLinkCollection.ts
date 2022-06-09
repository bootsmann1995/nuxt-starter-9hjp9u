import { ILinkItem } from "~~/interfaces/global";

export default defineNuxtComponent({
	props: {
		item: {
			type: Object,
		},
		text: {
			type: String,
		},
		link: {
			type: Object as () => ILinkItem,
		},
	},
});
