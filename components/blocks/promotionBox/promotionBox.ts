import { gsap } from "gsap";
import { Ref } from "nuxt/dist/app/compat/vue-demi";
import { IPromoBox } from "~~/interfaces/components/blocks/promoBox/promoBox";
export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IPromoBox,
		},
	},
	setup() {
		const image: Ref<HTMLImageElement | null> = ref(null);
		const text: Ref<HTMLDivElement | null> = ref(null);

		onMounted(() => {
			animateImage();
		});

		return { image, text };

		function animateImage() {
			gsap.fromTo(
				image.value,
				{
					y: 15,
					opacity: "0",
				},
				{
					y: 0,
					opacity: "1",
					scrollTrigger: {
						pin: false,
						trigger: image.value.parentElement,
						start: "top bottom", // when the top of the trigger hits the top of the viewport
						end: "60% bottom",
						scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
						once: true,
					},
				}
			);
		}
	},
});
