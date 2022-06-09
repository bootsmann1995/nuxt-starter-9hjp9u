import { IFocusBox } from "~~/interfaces/components/blocks/focusBox/focusBox";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IFocusBox,
		},
		isAbsolute: {
			required: false,
			type: Boolean,
			default: false,
		},
		type: {
			required: false,
			type: String,
			default: null,
		},
		hasCustomLinks: {
			required: false,
			type: Boolean,
			default: false,
		},
	},
});
