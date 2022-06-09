import { IFinance } from "~~/interfaces/pages/modelDetails";
import SimpleModal from "../../shared/simpleModal/simpleModal.vue";

export default defineNuxtComponent({
	components: {
		SimpleModal,
	},
	props: {
		item: {
			type: Object as () => IFinance,
		},
	},
	setup() {
		const bookingOpen = ref(false);
		const bookingExpert = ref(false);

		function modalBooking() {
			bookingOpen.value = !bookingOpen.value;
		}

		function modalExpert() {
			bookingExpert.value = !bookingExpert.value;
		}

		return {
			bookingOpen,
			bookingExpert,
			modalBooking,
			modalExpert,
			SimpleModal,
		};
	},
});
