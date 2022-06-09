export default defineNuxtComponent({
	props: {
		isMobile: {
			type: Boolean,
			default: false,
		},
		sortByFilterActive: {
			type: Boolean,
			default: false,
		},
		replicas: {
			type: Object as () => { value: string; label: string }[],
		},
	},
	setup() {
		const filter = ref(null);
		const filterSortBy = ref(null);
		const filterToggle = ref(null);
		const filterSortByBrackdrop = ref(null);
		function openSortBy() {
			if (filterToggle.value != null) {
				filterToggle.value.classList.toggle("is-active");
			}
			if (filterSortBy.value != null) {
				filterSortBy.value.classList.toggle("is-active");
			}
			if (filterSortByBrackdrop.value != null) {
				filterSortByBrackdrop.value.classList.toggle("is-active");
			}
		}

		return {
			openSortBy,
			filterSortByBrackdrop,
			filter,
			filterSortBy,
			filterToggle,
		};
	},
});
