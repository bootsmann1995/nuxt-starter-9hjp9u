export default defineNuxtComponent({
	props: {
		error: Object,
	},
	async setup() {
		// clearError();
		const vehicle = ref(null);

		onBeforeMount(async () => {
			const vehicleId = window.location.pathname.split("/")[1];
			const parsedId = parseInt(vehicleId);
			if (!isNaN(parsedId)) {
				// const config = useRuntimeConfig();
				console.log(process.env, parsedId);
				// const vehicleApi = new VehicleClient(process.env);
				// vehicle.value = await vehicleApi.GetVehicleByIdAsync(parsedId);
			}
		});

		console.log("Fail.");
		return {
			data: { vehicle },
		};
	},
});
