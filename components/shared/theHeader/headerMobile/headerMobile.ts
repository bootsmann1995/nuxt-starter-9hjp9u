import { Ref } from "@vue/runtime-dom";
import { IMenuItem } from "~~/interfaces/components/shared/header/menu";
import Menu from "./menu/menu.vue";

export default defineNuxtComponent({
	components: {
		Menu,
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
			// 		url: "/test",
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
		const menuActive: Ref<boolean> = ref(false);

		const topPos: Ref<number> = ref(38);

		const router = useRouter().currentRoute;

		watch(router, () => {
			if (menuActive.value != null) {
				menuActive.value = false;
			}
			setScrollPos();
		});

		onMounted(() => {
			setScrollPos();
			window.addEventListener("scroll", () => {
				setScrollPos();
			});
		});

		function setScrollPos() {
			if (menuActive.value === true) {
				topPos.value = 0;
				return;
			}
			if (window.scrollY > 0) {
				topPos.value = 0;
			} else if (window.scrollY < 35) {
				topPos.value = 38;
			}
		}

		const setMobileMenu = () => {
			menuActive.value = !menuActive.value;

			setScrollPos();
		};

		return {
			menuActive,
			setMobileMenu,
			topPos,
			router,
		};
	},
});
