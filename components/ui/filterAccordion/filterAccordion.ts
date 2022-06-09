export default defineNuxtComponent({
	props: {
		filter: {
			type: String,
			default: "",
		},
		filterIsActive: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["set-header"],
	setup(props) {
		const filterIsOpen = ref(false);
		const filterEl = ref<HTMLElement>(null);

		onMounted(() => {
			if (props.filterIsActive === true) {
				setTimeout(() => {
					toggleFilter();
				}, 500);
			} else {
				setTimeout(() => {
					setFilterHeight();
				}, 150);
			}
		});

		function toggleFilter() {
			filterIsOpen.value = !filterIsOpen.value;
			setFilterHeight();
		}

		function setFilterHeight() {
			let height = "";
			if (filterIsOpen.value === true) {
				// if (filterEl.value.children.length > 0) {
				// 	[filterEl.value.children[0], filterEl.value.children[1]].forEach((element) => {
				// 		if (element) {
				// 			height = height + element.getBoundingClientRect().height;
				// 		}
				// 	});
				// }
				height = "auto";
			} else {
				height = `${filterEl.value.children[0].getBoundingClientRect().height}px`;
			}
			filterEl.value.style.height = `${height}`;
		}

		return {
			toggleFilter,
			filterIsOpen,
			filterEl,
			setFilterHeight,
		};
	},
});
