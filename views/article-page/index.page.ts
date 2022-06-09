import { useMediaQuery } from "@vueuse/core";
import { useGetArticlePage } from "~~/composables/useGetArticlePage";

export default defineNuxtComponent({
	props: {
		slug: {
			type: String,
		},
	},
	setup(props) {
		const data = useGetArticlePage(props.slug);
		const viewportMd = useMediaQuery("(max-width: 992px)");

		return {
			viewportMd,
			data,
		};
	},
});
