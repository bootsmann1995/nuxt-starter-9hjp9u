export default defineNuxtComponent({
	props: {
		index: {
			type: Number,
			default: 0,
		},

		item: {
			type: Object,
			default: Object,
		},
	},
	setup() {
		const isActive = ref(false);
		const accordionEl = ref<HTMLElement>(null);

		onBeforeMount(() => {
			window.addEventListener("resize", setAccordionHeight);
		});

		onUnmounted(() => {
			window.addEventListener("resize", setAccordionHeight);
		});

		function toggleAccordionItem() {
			isActive.value = !isActive.value;
			setAccordionHeight();
		}

		function setAccordionHeight() {
			const header = accordionEl.value.firstElementChild;
			const body = accordionEl.value.lastElementChild;
			if (isActive.value) {
				accordionEl.value.style.maxHeight = `${
					header.getBoundingClientRect().height + body.getBoundingClientRect().height
				}px`;
			} else {
				accordionEl.value.style.maxHeight = `${header.getBoundingClientRect().height}px`;
			}
		}

		return {
			isActive,
			toggleAccordionItem,
			accordionEl,
		};
	},
});
