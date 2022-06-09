import AddressBlock from "./addressBlock/addressBlock.vue";
import BookingBlock from "./bookingBlock/bookingBlock.vue";
import DepartmentCta from "./departmentCta/departmentCta.vue";

export default defineNuxtComponent({
	components: {
		AddressBlock,
		BookingBlock,
		DepartmentCta,
	},
	props: {
		items: {
			type: Object,
		},
	},
	setup() {
		return {};
	},
});
