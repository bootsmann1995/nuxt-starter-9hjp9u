import { ILinkSection, IMenuCta } from "~~/interfaces/components/shared/header/menu";

export default defineNuxtComponent({
	props: {
		linkSections: {
			type: Object as () => ILinkSection,
			default: null,
		},
		cta: {
			type: Object as () => IMenuCta,
			default: null,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
});
