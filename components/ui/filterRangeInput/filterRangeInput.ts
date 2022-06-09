export default defineNuxtComponent({
	props: {
		filter: {
			type: String,
			default: "",
		},
	},
	setup() {
		const min = ref(0);
		const max = ref(0);

		function formatMinValue(minValue: string, minRange: string): string {
			return minValue !== null && minValue !== minRange ? minValue : "";
		}
		function formatMaxValue(maxValue: string, maxRange: string): string {
			return maxValue !== null && maxValue !== maxRange ? maxValue : "";
		}
		return {
			formatMinValue,
			formatMaxValue,
			min,
			max,
		};
	},
});
