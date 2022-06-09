import { Ref } from "nuxt/dist/app/compat/vue-demi";

export const useGetFixedSidebar = (el: Ref<HTMLElement>, headerHeight: number, footerClass = "footer") => {
	const height = ref(0);
	let footer: HTMLElement | null = null;
	const hasPassedFooter = ref(false);

	function setStyles() {
		hasPassedFooter.value ? setPassedFooterStyles() : setFixedStyles();
	}

	function setFixedStyles() {
		if (el && el.value != null) {
			el.value.style.position = "fixed";
			el.value.style.height = `calc(100vh - ${headerHeight}px)`;
			el.value.style.top = `${headerHeight}px`;
			el.value.style.bottom = "unset";
			el.value.style.overflowY = "auto";
		}
	}

	function setPassedFooterStyles() {
		if (el && el.value != null) {
			el.value.style.position = "absolute";
			el.value.style.top = "unset";
			el.value.style.bottom = "0px";
			el.value.style.overflowY = "auto";
		}
	}

	function checkForFooterCollision() {
		if (footer != null && el != null) {
			if (footer.offsetTop < window.scrollY + window.innerHeight) {
				hasPassedFooter.value = true;
			} else {
				hasPassedFooter.value = false;
			}
		} else {
			footer = document.querySelector<HTMLElement>(footerClass);
		}
	}

	watch(hasPassedFooter, setStyles);

	onBeforeMount(() => {
		window.addEventListener("resize", checkForFooterCollision);
		window.addEventListener("scroll", checkForFooterCollision);
	});

	onMounted(() => {
		checkForFooterCollision();
		setStyles();
	});

	return {
		height,
	};
};
