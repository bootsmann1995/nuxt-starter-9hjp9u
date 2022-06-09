import { Ref } from "nuxt/dist/app/compat/capi";
import { IFooterContactLink } from "~~/interfaces/components/shared/footer/footer";

export default defineNuxtComponent({
	props: {
		item: {
			type: Object as () => IFooterContactLink,
		},
	},
	emits: ["triggerModal"],

	setup() {
		const isOpen: Ref<boolean> = ref(false);

		const openModal = () => {
			isOpen.value = !isOpen.value;
		};

		return {
			isOpen,
			openModal,
		};
	},
});
