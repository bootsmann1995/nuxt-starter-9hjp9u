import { ICarEquipment } from "~~/interfaces/pages/modelDetails";
import EquipmentAccordion from "./equipmentAccordion/equipmentAccordion";

export default defineNuxtComponent({
	components: {
		EquipmentAccordion,
	},
	props: {
		item: {
			type: Object as () => ICarEquipment,
		},
	},
	setup() {
		const isExpanded = ref(false);

		function toggleReadMore() {
			isExpanded.value = !isExpanded.value;
		}

		return {
			EquipmentAccordion,
			isExpanded,
			toggleReadMore,
		};
	},
});
