import { computed, ref } from "vue";
import { IAccordionItem } from "~~/interfaces/components/shared/accordion/accordionItem";

export default defineNuxtComponent({
	emits: ["selected"],
	props: {
		item: Object as () => IAccordionItem,
		index: {
			type: String,
			required: true,
		},
		isSelected: {
			required: false,
			type: String,
			default: null,
		},
	},
	setup(props, { emit }) {
		const item = ref<IAccordionItem>(props.item);
		const selectedItem = ref(props.isSelected);
		const accordionEl = ref(null);

		const iAmSelected = computed(() => {
			return selectedItem.value === item.value.id;
		});

		watch(
			() => {
				props.isSelected;
			},
			() => {
				setHeight();
			},
			{ deep: true }
		);
		onBeforeMount(() => {
			window.addEventListener("resize", setHeight);
		});

		onMounted(() => {
			setHeight();
		});

		onUnmounted(() => {
			window.addEventListener("resize", setHeight);
		});

		const handleClick = () => {
			console.log("open");
			emit("selected", item.value.id);
		};

		function setHeight() {
			if (accordionEl.value != null) {
				const header = (accordionEl.value as HTMLElement).firstElementChild;
				const body = (accordionEl.value as HTMLElement).lastElementChild;
				if (props.isSelected === item.value.id) {
					accordionEl.value.style.maxHeight = `${
						header.getBoundingClientRect().height + 2 + body.getBoundingClientRect().height
					}px`;
				} else {
					accordionEl.value.style.maxHeight = `${header.getBoundingClientRect().height + 2}px`;
				}
			}
		}

		return {
			item,
			iAmSelected,
			accordionEl,
			handleClick,
		};
	},
});
