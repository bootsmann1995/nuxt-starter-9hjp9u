import { ITextAreaBlock } from "~~/interfaces/components/blocks/textAreaBlock/textAreaBlock";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => ITextAreaBlock,
			default: null,
		},
	},
});
