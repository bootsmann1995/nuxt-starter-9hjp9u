import { ICategoryItem } from "~~/interfaces/components/blocks/categorySlider/categorySlider";

export default defineNuxtComponent({
	props: {
		showText: {
			type: Boolean,
			default: false,
		},
		item: {
			type: Object as () => ICategoryItem,
		},
	},
});
