import { useMediaQuery } from "@vueuse/core";
import { gsap } from "gsap";
import { Scrollbar } from "swiper";
import "swiper/scss";
import "swiper/scss/scrollbar";
import { Swiper, SwiperSlide } from "swiper/vue";
import { IPromoSlider } from "~~/interfaces/components/blocks/promoSlider/promoSlider";
import PromotionItem from "./promotionItem/promotionItem";

export default defineNuxtComponent({
	components: {
		Swiper,
		SwiperSlide,
		PromotionItem,
	},
	props: {
		data: {
			type: Object as () => IPromoSlider,
		},
	},
	setup() {
		const isMobile = useMediaQuery("(max-width: 400px)");
		const isDesktop = useMediaQuery("(min-width: 992px)");

		const promotionSliderRef = ref<HTMLElement>(null);

		const swiper = ref(null);

		const setSwiper = (swiper) => {
			swiper.value = swiper;
		};

		onMounted(() => {
			animateSlider();
		});

		function animateSlider() {
			gsap.to(promotionSliderRef.value, {
				scrollTrigger: {
					once: true,
					trigger: promotionSliderRef.value,
					toggleClass: "animation-active",
					start: "top center",
				},
			});
		}

		return {
			promotionSliderRef,
			setSwiper,
			swiper,
			Scrollbar,
			isMobile,
			isDesktop,
			PromotionItem,
		};
	},
});
