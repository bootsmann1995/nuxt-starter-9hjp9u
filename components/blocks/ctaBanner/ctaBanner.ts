import { gsap } from "gsap";
import { Ref } from "nuxt/dist/app/compat/capi";
import SimpleModal from "~~/components/shared/simpleModal/simpleModal.vue";
import { ICtaBanner } from "~~/interfaces/components/blocks/ctaBanner/ctaBanner";

export default defineNuxtComponent({
	components: {
		SimpleModal,
	},
	props: {
		data: {
			type: Object as () => ICtaBanner,
		},
	},
	setup() {
		const ctaBanner = ref<HTMLElement>(null);
		const isOpen: Ref<boolean> = ref(false);

		const openModal = () => {
			isOpen.value = !isOpen.value;
		};

		onMounted(() => {
			animateBanner();
		});

		function animateBanner() {
			gsap.to(ctaBanner.value, {
				scrollTrigger: {
					once: true,
					trigger: ctaBanner.value,
					toggleClass: "animation-active",
					start: "top 75%",
				},
			});
		}

		return {
			SimpleModal,
			ctaBanner,
			isOpen,
			openModal,
		};
	},
});
