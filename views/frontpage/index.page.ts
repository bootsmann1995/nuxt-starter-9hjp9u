export default defineNuxtComponent({
	async setup() {
		const data = useGetFrontPage();
		return {
			data,
		};
	},
});
