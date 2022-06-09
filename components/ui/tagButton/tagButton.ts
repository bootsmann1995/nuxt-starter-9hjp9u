export default defineNuxtComponent({
	props: {
		currentActiveTag: {
			default: "",
		},
		tag: {
			type: Object as () => { name: string; id: string },
			default: null,
		},
		index: {
			type: Number,
			default: 0,
		},
		grayBg: {
			type: Boolean,
			default: false,
		},
	},
});
