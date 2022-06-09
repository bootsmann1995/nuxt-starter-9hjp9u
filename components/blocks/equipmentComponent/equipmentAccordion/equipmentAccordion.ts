import { IEquipment } from "~~/interfaces/pages/modelDetails";

export default defineNuxtComponent({
	props: {
		equipment: {
			type: Object as () => IEquipment,
		},
	},
	setup() {
		const isExpanded = ref(false);

		function toggleReadMore() {
			isExpanded.value = !isExpanded.value;
		}

		return {
			isExpanded,
			toggleReadMore,
		};
	},
});
