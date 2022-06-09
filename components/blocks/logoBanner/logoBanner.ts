import { gsap } from "gsap";
import { IImageLinkListBlock } from "~~/interfaces/components/blocks/imageLinkList/imageLinkList";
export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IImageLinkListBlock,
			default: [],
		},
	},
	setup() {
		const items = ref([]);
		const wrapper = ref(null);

		onMounted(() => animateItems());

		function animateItems() {
			items.value.forEach((item, index) => {
				if (wrapper.value != null) {
					gsap.fromTo(
						item,
						{
							y: 15,
							opacity: 0,
							ease: "power1",
						},
						{
							delay: index / 15,
							y: 0,
							opacity: 1,
							scrollTrigger: {
								trigger: wrapper.value,
								start: "top 80%",
							},
						}
					);
				}
			});
		}

		return { items, wrapper };
	},
});
