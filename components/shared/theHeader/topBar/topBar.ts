import { Ref } from "nuxt/dist/app/compat/vue-demi";
import { ITopbarItem } from "~~/interfaces/header/topbar";

export default defineNuxtComponent({
	props: {
		uspItems: {
			type: Array as () => ITopbarItem[],
		},
	},
	setup() {
		const topPos: Ref<number> = ref(0);

		onMounted(() => {
			setScrollPos();
			window.addEventListener("scroll", () => {
				setScrollPos();
			});
		});

		function setScrollPos() {
			if (window.scrollY > 0) {
				topPos.value = -38;
			} else if (window.scrollY < 39) {
				topPos.value = 0;
			}
		}
		return { topPos };
	},
});
