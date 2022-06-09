import { useMediaQuery } from "@vueuse/core";
import gsap from "gsap";
import { Scrollbar } from "swiper";
import "swiper/scss";
import "swiper/scss/scrollbar";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ICategory, ICategorySlider } from "~~/interfaces/components/blocks/categorySlider/categorySlider";

export default defineNuxtComponent({
	components: {
		Swiper,
		SwiperSlide,
	},
	props: {
		slider: {
			type: Object as () => ICategorySlider<ICategory[]>,
		},
	},
	setup(props) {
		const isTablet = useMediaQuery("(min-width: 992px)");
		const isDesktop = useMediaQuery("(min-width: 1200px)");

		const categorySliderRef = ref<HTMLElement>(null);

		const swiper = ref(null);

		const setSwiper = (swiper) => {
			swiper.value = swiper;
		};

		const categoryNames = computed(() => {
			return props.slider.categories.map((item) => {
				return item.categoryName;
			});
		});

		onMounted(() => {
			animateSlider();
		});

		function animateSlider() {
			gsap.to(categorySliderRef.value, {
				scrollTrigger: {
					once: true,
					trigger: categorySliderRef.value,
					toggleClass: "animation-active",
					start: "top 80%",
				},
			});
		}

		return {
			categorySliderRef,
			setSwiper,
			swiper,
			Scrollbar,
			categoryNames,
			isTablet,
			isDesktop,
		};
	},
});
