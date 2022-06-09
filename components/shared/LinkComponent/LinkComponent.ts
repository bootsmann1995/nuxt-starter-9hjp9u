import { IButton } from "~~/interfaces/global";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IButton,
			default: null,
		},
		confirm: {
			type: Object as () => { headline: string; text: string; btnText: string },
			required: false,
			default: null,
		},
	},
});
