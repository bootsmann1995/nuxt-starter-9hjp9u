import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtComponent({
	setup() {
		function test() {
			console.log("test");
		}
		return {
			test,
		};
	},
});
