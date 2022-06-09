import { IUspList } from "~~/interfaces/components/blocks/uspList/uspList";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IUspList,
			default: null,
		},
	},
	setup() {
		const isDesktop = useMediaQuery("(min-width: 992px)");

		return { isDesktop };
	},
});
