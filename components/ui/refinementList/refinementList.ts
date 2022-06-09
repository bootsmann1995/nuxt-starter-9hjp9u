export default defineNuxtComponent({
	props: {
		filter: {
			type: String,
			default: null,
		},
	},
	emits: ["set-height"],
	setup(_props, { emit }) {
		const isDesktop = ref(false);

		onBeforeMount(() => {
			isDesktop.value = useMediaQuery("(max-width: 992px)").value;
		});

		function mapColor(color: string): string {
			return useMapcolor(color);
		}

		const count = ref(0);

		function changedShit(itemsLength: number) {
			if (count.value !== itemsLength) {
				console.log("yomama");
				count.value = itemsLength;
				emit("set-height");
			}
		}
		return {
			mapColor,
			changedShit,
			isDesktop,
		};
	},
});
