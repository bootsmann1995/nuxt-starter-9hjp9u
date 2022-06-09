import { ITwoColumnBlock } from "~~/interfaces/components/blocks/twoColumnBlock/twoColumnBlock";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => ITwoColumnBlock,
		},
	},
	setup() {
		const isTablet = useMediaQuery("(max-width: 992px)");

		return {
			isTablet,
		};
	},
});
