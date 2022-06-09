import { gsap } from "gsap";
import { IImageCard } from "~~/interfaces/components/blocks/imageCard/imageCard";

export default defineNuxtComponent({
	props: {
		card: {
			type: Object as () => IImageCard,
			default: null,
		},
		index: {
			type: Number,
			default: 0,
		},
		colClasses: {
			type: String,
			default: "",
		},
	},
	setup() {
		const item = ref(null);
		onMounted(() => animateItems());

		function animateItems() {
			gsap.fromTo(
				item.value,
				{
					y: 15,
					opacity: 0,
					ease: "power1",
				},
				{
					duration: 0.5,
					y: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: item.value,
						start: "top 95%",
					},
				}
			);
		}
		return { item };
	},
});
