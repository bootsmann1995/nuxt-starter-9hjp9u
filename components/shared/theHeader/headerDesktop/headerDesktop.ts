import { type Ref } from "vue";
import { IMenuItem } from "~~/interfaces/components/shared/header/menu";
import SubMenu from "./subMenu/subMenu.vue";

export default defineNuxtComponent({
	components: {
		SubMenu,
	},
	props: {
		menuLinks: {
			type: Array as () => IMenuItem[],
			// default: [
			// 	{
			// 		id: "1",
			// 		text: "Biler",
			// 		url: "/",
			// 		target: "_blank",
			// 		linkSections: [
			// 			{
			// 				text: "Find bil",
			// 				links: [
			// 					{
			// 						text: "Brugtebiler",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Nye biler",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Varebiler",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 				],
			// 			},
			// 			{
			// 				text: "Læs om finansierings",
			// 				links: [
			// 					{
			// 						text: "Finansieringsmuligheder",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Leasingtyper",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Billån",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 				],
			// 			},
			// 		],
			// 		cta: {
			// 			id: "id",
			// 			image: { url: "/elbil-billede/", alt: "" },
			// 			text: "Se hvordan du kan få billun uden udbetaling",
			// 			url: "/",
			// 		},
			// 	},
			// 	{
			// 		url: "/",
			// 		text: "Ydelser",
			// 		id: "1",
			// 		target: "_blank",
			// 		linkSections: [
			// 			{
			// 				text: "Find bil",
			// 				links: [
			// 					{
			// 						text: "Brugtebiler",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Nye biler",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Varebiler",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 				],
			// 			},
			// 			{
			// 				text: "Læs om finansierings",
			// 				links: [
			// 					{
			// 						text: "Finansieringsmuligheder",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Leasingtyper",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 					{
			// 						text: "Billån",
			// 						url: "/",
			// 						id: "idid",
			// 					},
			// 				],
			// 			},
			// 		],
			// 		cta: {
			// 			id: "id",
			// 			image: { url: "/elbil-billede/", alt: "" },
			// 			text: "Se hvordan du kan få billun uden udbetaling",
			// 			url: "/",
			// 		},
			// 	},
			// 	{
			// 		url: "/",
			// 		text: "Værksted",
			// 		id: "1",
			// 		target: "_blank",
			// 	},
			// 	{
			// 		url: "/",
			// 		text: " Gode råd og viden",
			// 		id: "1",
			// 		target: "_blank",
			// 	},
			// 	{
			// 		url: "/",
			// 		text: "Kontakt",
			// 		id: "1",
			// 		target: "_blank",
			// 	},
			// ],
		},
	},
	setup() {
		const activeMenu: Ref<number> = ref(-1);
		const topPos: Ref<number> = ref(40);

		const router = useRouter().currentRoute;

		watch(router, () => {
			setScrollPos();
			activeMenu.value = -1;
		});

		onMounted(() => {
			setScrollPos();
			window.addEventListener("scroll", () => {
				setScrollPos();
			});
		});

		function setScrollPos() {
			if (window.scrollY > 0) {
				topPos.value = 0;
			} else if (window.scrollY < 39) {
				topPos.value = 40;
			}
		}

		const openMenu = (index: number) => {
			if (activeMenu.value === index) {
				activeMenu.value = -1;
			} else {
				activeMenu.value = index;
			}
			setScrollPos();
		};

		return { openMenu, activeMenu, topPos };
	},
});
