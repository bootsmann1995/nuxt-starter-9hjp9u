export default defineNuxtComponent({
	props: {
		tabs: {
			type: Object as () => string[],
		},
		isButtonStyling: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["tab-change"],
	setup(props, { emit }) {
		const tabs = reactive(props.tabs);
		const activeTab = ref(tabs[0]);
		const tabPanels = ref<HTMLElement>(null);
		const activePanel = ref(null);

		const changeTab = (tab: string) => {
			activeTab.value = tab;
			const matchingIndex = tabs.findIndex((index) => index === tab);
			emit("tab-change", tab);
			setActivePanel(matchingIndex);
		};

		const setActivePanel = (index: number) => {
			if (activePanel.value) activePanel.value.classList.remove("is-active");
			activePanel.value = tabPanels.value.children[index];
			activePanel.value.classList.add("is-active");
		};

		const setTabState = () => {
			activeTab.value = tabs[0];
			setActivePanel(0);
		};

		onMounted(() => {
			setTabState();
		});

		return {
			tabs,
			activeTab,
			changeTab,
			tabPanels,
		};
	},
});
