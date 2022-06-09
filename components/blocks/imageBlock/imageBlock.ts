import { IMediaBlock } from "~~/interfaces/components/blocks/mediaBlock/mediaBlock";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IMediaBlock,
		},
	},
});
