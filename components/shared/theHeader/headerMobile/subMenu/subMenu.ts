// import { defineEmits } from "Vue";

import { ILinkSection, IMenuCta } from "~~/interfaces/components/shared/header/menu";

export default defineNuxtComponent({
	props: {
		cta: {
			type: Object as () => IMenuCta,
			default: null,
		},
		linkSections: {
			type: Array as () => ILinkSection[],
			default: null,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		menuText: {
			type: String,
			default: "",
		},
	},
	emits: ["goBack", "closeMenu"],
});
