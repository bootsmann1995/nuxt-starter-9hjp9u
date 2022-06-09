import { ref } from "vue";
import { IAccordionList } from "~~/interfaces/components/shared/accordion/accordionList";
import AccordionItem from "./accordionItem/accordionItem.vue";

export default defineNuxtComponent({
	name: "accordionList",
	components: {
		AccordionItem,
	},
	props: {
		data: {
			type: Object as () => IAccordionList,
		},
	},
	setup() {
		const selectedItem = ref<number | null>(null);

		const handleSelected = (id: number) => {
			if (selectedItem.value !== id) {
				selectedItem.value = id;
			} else {
				selectedItem.value = null;
			}
		};

		return {
			selectedItem,
			handleSelected,
		};
	},
});
