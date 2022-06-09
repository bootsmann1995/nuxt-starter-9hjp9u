import { INode } from "~~/interfaces/cms/globals";

export default defineComponent({
	name: "CustomLink",
	props: {
		node: {
			type: Object as () => INode | null,
			default: null,
		},
		linkId: {
			type: String,
			default: "",
		},
		text: {
			type: Array,
			default: null,
		},
		url: {
			type: String,
			default: "",
		},
	},
});
