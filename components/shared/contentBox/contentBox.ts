import { IContentBox } from "~~/interfaces/components/shared/contentBox/contentBox";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IContentBox,
		},
	},
});
