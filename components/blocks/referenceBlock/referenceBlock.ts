import { gsap } from "gsap";
import { Ref } from "vue";
import { IReferenceBlock } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";
import ArticleComponent from "./articleComponent/articleComponent.vue";

export default defineNuxtComponent({
	components: {
		ArticleComponent,
	},
	props: {
		referenceBlock: {
			type: Object as () => IReferenceBlock,
		},
	},
	setup() {
		const reference: Ref<HTMLDivElement> = ref(null);
		onMounted(() => {
			animateArticle();
		});

		function animateArticle() {
			gsap.to(reference.value, {
				scrollTrigger: {
					once: true,
					trigger: reference.value,
					toggleClass: "animation-active",
					start: "top bottom",
				},
			});
		}

		return {
			reference,
			ArticleComponent,
		};
	},
});
