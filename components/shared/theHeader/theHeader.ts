export default defineNuxtComponent({
	setup() {
		const data = useGetHeader();
		return { data };
	},
});
