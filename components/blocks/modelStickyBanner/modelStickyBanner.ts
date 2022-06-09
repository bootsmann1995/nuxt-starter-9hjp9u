import { useScroll } from "@vueuse/core";
import { IFinance } from "~~/interfaces/pages/modelDetails";
import SimpleModal from "../../shared/simpleModal/simpleModal.vue";

export default defineNuxtComponent({
	components: {
		SimpleModal,
	},
	props: {
		carImage: {
			type: Object,
		},
		carHeader: {
			type: String,
		},
		carTagline: {
			type: String,
		},

		item: {
			type: Object as () => IFinance,
		},
	},
	setup() {
		const bookingOpen = ref(false);
		const bookingExpert = ref(false);
		const isDesktop = useMediaQuery("(min-width: 992px)");

		function modalBooking() {
			bookingOpen.value = !bookingOpen.value;
		}

		function modalExpert() {
			bookingExpert.value = !bookingExpert.value;
		}

		return {
			bookingOpen,
			bookingExpert,
			isDesktop,
			modalBooking,
			modalExpert,
			SimpleModal,
			useScroll,
		};
	},
});
