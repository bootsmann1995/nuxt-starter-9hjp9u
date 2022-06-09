import { gsap } from "gsap";
import { Ref } from "nuxt/dist/app/compat/capi";
import InlineVideoPlayer from "~~/components/shared/inlineVideoPlayer/inlineVideoPlayer.vue";
import { IAdvantages } from "~~/interfaces/pages/modelDetails";

export default defineNuxtComponent({
	components: {
		InlineVideoPlayer,
	},
	props: {
		data: {
			type: Object as () => IAdvantages,
		},
	},
	setup() {
		const isDesktop = useMediaQuery("(min-width: 992px)");
		const advantagesSection: Ref<HTMLImageElement> = ref<HTMLImageElement>(null);

		onMounted(() => {
			animateSection();
		});

		function animateSection() {
			gsap.to(advantagesSection.value, {
				scrollTrigger: {
					once: true,
					trigger: advantagesSection.value,
					toggleClass: "animation-active",
					start: "top 75%",
				},
			});
		}

		return {
			isDesktop,
			advantagesSection,
		};
	},
});
