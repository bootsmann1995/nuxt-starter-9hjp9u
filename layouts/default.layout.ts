import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtComponent({
	setup() {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		// onMounted(() => {
		// 	const route = useRouter();
		// 	watch(route, () => {
		// 		setTimeout(() => {
		// 			const scroll = ScrollSmoother.get();
		// 			scroll.scrollTop(0);
		// 			ScrollSmoother.refresh();
		// 		}, 150);
		// 	});
		// 	setTimeout(() => {
		// 		ScrollSmoother.create({
		// 			smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
		// 			effects: true, // looks for data-speed and data-lag attributes on elements
		// 			smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
		// 		});
		// 	}, 200);
		// });
		function test() {
			console.log("tester");
		}

		return {
			test,
		};
	},
});
