import { gsap } from "gsap";
import { IHighlighBlock } from "~~/interfaces/components/blocks/highlightBlock/hightlightBlock";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IHighlighBlock,
		},
	},
	setup() {
		const isMobile = useMediaQuery("(max-width: 400px)");

		const highlightBlockRef = ref<HTMLDivElement>(null);

		onMounted(() => {
			animateText();
		});

		function animateText() {
			gsap.to(highlightBlockRef.value, {
				scrollTrigger: {
					once: true,
					trigger: highlightBlockRef.value,
					toggleClass: "animation-active",
					start: "top 75%",
				},
			});
		}

		return { isMobile, highlightBlockRef };
	},
});
