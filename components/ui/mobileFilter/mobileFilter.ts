export default defineNuxtComponent({
	props: {
		refinements: {
			type: Object as () => { type: string; filter: string; name: string }[],
			default: [],
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["close-filter", "tab-change"],
	setup() {
		const currentActive = ref<string>("");

		function setCurrentActive(item: string) {
			currentActive.value = item;
		}

		return {
			currentActive,
			setCurrentActive,
		};
	},
});
