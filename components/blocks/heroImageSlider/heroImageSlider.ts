import { gsap } from "gsap";
import { Ref } from "nuxt/dist/app/compat/capi";
import { Controller, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/scss/scrollbar";
import { Swiper, SwiperSlide } from "swiper/vue";
import InlineVideoPlayer from "~~/components/shared/inlineVideoPlayer/inlineVideoPlayer.vue";
import SimpleModal from "~~/components/shared/simpleModal/simpleModal";

export default defineNuxtComponent({
	components: {
		Pagination,
		Scrollbar,
		Navigation,
		Controller,
		Swiper,
		SwiperSlide,
		InlineVideoPlayer,
		SimpleModal,
	},
	props: {
		slider: {
			type: Object,
		},
	},
	setup(props) {
		const isDesktop = useMediaQuery("(min-width: 992px)");
		const isOpen: Ref<boolean> = ref(false);
		const imageSliderRef: Ref<HTMLImageElement> = ref<HTMLImageElement>(null);
		const firstSwiper = ref(null);
		const secondSwiper = ref(null);
		const swiperModal = ref(null);

		onMounted(() => {
			animateImage();
		});

		function getImages() {
			let totalImages = 0;
			props.slider.forEach(function (images) {
				totalImages += images.contentType.startsWith("image");
			});

			return totalImages;
		}

		function getVideos() {
			let totalVideos = 0;
			props.slider.forEach(function (images) {
				totalVideos += images.contentType.startsWith("video");
			});

			return totalVideos;
		}

		const openModal = () => {
			isOpen.value = !isOpen.value;
		};

		const setFirstSwiper = (swiper) => {
			firstSwiper.value = swiper;
		};
		const setSecondSwiper = (swiper) => {
			secondSwiper.value = swiper;
		};

		const setModalSwiper = (swiper) => {
			swiperModal.value = swiper;
		};

		function animateImage() {
			gsap.to(imageSliderRef.value, {
				scrollTrigger: {
					once: true,
					trigger: imageSliderRef.value,
					toggleClass: "animation-active",
					start: "top 75%",
				},
			});
		}

		return {
			Pagination,
			Navigation,
			Scrollbar,
			Controller,
			isOpen,
			isDesktop,
			swiperModal,
			imageSliderRef,
			firstSwiper,
			secondSwiper,
			setModalSwiper,
			openModal,
			setFirstSwiper,
			setSecondSwiper,
			getImages,
			getVideos,
		};
	},
});
