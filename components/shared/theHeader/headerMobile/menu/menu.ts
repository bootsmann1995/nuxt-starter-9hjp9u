import { Ref } from "@vue/runtime-dom";
import SubMenu from "~~/components/shared/theHeader/headerMobile/subMenu/subMenu.vue";
import { IMenuItem } from "~~/interfaces/components/shared/header/menu";

export default defineNuxtComponent({
	components: {
		SubMenu,
	},
	props: {
		menuLinks: {
			type: Array as () => IMenuItem[],
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["closeMenu"],
	setup() {
		const activeMenu: Ref<number> = ref(-1);

		const setSubMenu = (index: number) => {
			if (activeMenu.value !== index) {
				activeMenu.value = index;
			} else {
				activeMenu.value = -1;
			}
		};

		const closeParentChild = () => {
			setTimeout(() => {
				activeMenu.value = -1;
			}, 700);
		};

		return { setSubMenu, activeMenu, closeParentChild };
	},
});
