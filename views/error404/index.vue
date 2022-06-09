<template>
	<div>Test</div>
</template>
<script lang="ts" setup>
import { VehicleClient } from "~~/resources/vehicleClient";

// eslint-disable-next-line no-undef
const route = useRoute();
// eslint-disable-next-line no-undef
const config = useRuntimeConfig();
const vehicleApi = new VehicleClient(config);
const vehicleId = route.params.slug[1];
// eslint-disable-next-line no-case-declarations
const parsedId = parseInt(vehicleId);
// eslint-disable-next-line no-undef
const page = ref(null);
// eslint-disable-next-line no-undef
const data = ref(null);
page.value = { typename: "404Error" };
if (!isNaN(parsedId)) {
	// eslint-disable-next-line no-undef
	onMounted(async () => {
		data.value = await vehicleApi.GetVehicleByIdAsync(route.params.slug[1]);
	});
}
</script>
