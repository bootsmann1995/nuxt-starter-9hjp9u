import { IArticle } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";

export default defineNuxtComponent({
	props: {
		item: {
			type: Object as () => IArticle,
		},
	},
	setup() {
		return {};
	},
});
