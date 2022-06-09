import { INewCarBlock } from "~~/interfaces/components/blocks/newCarBlock/newCarBlock";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => INewCarBlock,
		},
	},
});
