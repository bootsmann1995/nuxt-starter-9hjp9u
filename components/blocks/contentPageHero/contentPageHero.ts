import { gsap } from "gsap";
import { IHero } from "~~/interfaces/components/blocks/hero/hero";

export default defineNuxtComponent({
	props: {
		hero: {
			type: Object as () => IHero,
		},
	},
	setup() {
		const focus = ref(null);

		onMounted(() => {
			animateText();
		});

		function animateText() {
			gsap.to(focus.value, {
				y: window.innerWidth > 992 ? "+=20" : "-=20",
				scrollTrigger: {
					trigger: focus.value,
					toggleClass: "animation-active",
					start: "top 75%",
					scrub: 1,
				},
			});
		}

		return { focus };
	},
});
