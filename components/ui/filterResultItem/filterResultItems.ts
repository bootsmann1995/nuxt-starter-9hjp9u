import { Lazy, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineNuxtComponent({
	props: {
		activePrice: {
			type: String,
		},
		isLeasing: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Navigation, Lazy, Pagination],
		};
	},
});
