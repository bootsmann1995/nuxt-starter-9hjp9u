import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";
import { VehicleClient } from "~~/resources/vehicleClient";

export default defineNuxtComponent({
	async setup() {
		const usedCarsPath = "/brugte-biler/";
		const config = useRuntimeConfig();
		const route = useRoute();
		const cms = new CMSResource(config);
		const vehicleApi = new VehicleClient(config);

		const page = ref(null);
		if (route.path.startsWith(usedCarsPath) && route.path.length !== usedCarsPath.length) {
			page.value = { typename: "ApiUsedCar" };
		} else {
			const allRoutes = await GetAllPages(cms);
			page.value = allRoutes.filter((p) => p.path === route.path)[0];
		}
		const data = ref(null);
		switch (page.value?.typename) {
			case "ArticleListPage":
				data.value = "";
				break;
			case "ArticlePage":
				data.value = "";
				break;
			case "BrandListViewPage":
				data.value = "";
				break;
			case "BrandUniversePage":
				data.value = "";
				break;
			case "ContentPage":
				data.value = "";
				break;
			case "DepartmentDetailPage":
				data.value = "";
				break;
			case "DepartmentListViewPage":
				data.value = "";
				break;
			case "FrontPage":
				data.value = "";
				break;
			case "LeasingCarListViewPage":
				data.value = "";
				break;
			case "LeasingModelDetailPage":
				data.value = "";
				break;
			case "ModelDetailPage":
				data.value = "";
				break;
			case "UsedCarFilterPage":
				data.value = "";
				break;
			// Placeholder
			case "ApiUsedCar":
				data.value = await vehicleApi.GetVehicleByIdAsync(route.params.slug[1]);
				break;
			default:
				page.value = { typename: "Error404" };
				data.value = { test: "Anders er en kalkun" };
				break;
		}

		return {
			page,
			data,
		};
	},
});
