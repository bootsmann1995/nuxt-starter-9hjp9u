import { useGetContentPage } from "~~/composables/useGetContentPage";

export default defineNuxtComponent({
	props: {
		slug: {
			type: String,
		},
	},
	setup(props) {
		const data = useGetContentPage(props.slug);

		return {
			data,
		};
	},
});
