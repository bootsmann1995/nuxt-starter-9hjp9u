import "instantsearch.css/themes/algolia-min.css";

export default defineNuxtComponent({
	setup() {
		const config = useRuntimeConfig();
		const index = config.ALGOLIA_INDEX;
		const data = ref<{ headline: string; text: string }>({
			headline: "Find din næste brugte bil hos os",
			text: `Vi har ét af Danmarks største udvalg af nyere brugte biler. Vores brede udvalg gør at, næsten ligegyldigt
			hvilket bilbehov du har, så har vi en bil der matcher det. Alle biler kommer med servicehistorik og 1 års
			garanti.`,
		});
		const refinements = [
			{ filter: "brand", name: "Mærke", type: "checkbox" },
			{ filter: "model", name: "Model", type: "checkbox" },
			{ filter: "price", filter2: "leasingMonthlyPayment", name: "Pris", type: "tab" },
			{ filter: "kilometersDriven", name: "Km kørt", type: "range" },
			{ filter: "fuelEfficiency", name: "Km/l", type: "range" },
			{ filter: "modelYear", name: "Årgang", type: "range" },
			{ filter: "fuelType", name: "Drivmiddel", type: "checkbox" },
			{ filter: "horsePower", name: "HK", type: "range" },
			{ filter: "color", name: "Farve", type: "checkbox" },
			{ filter: "typeName", name: "Gear", type: "checkbox" },
			{ filter: "departmentName", name: "Lokation", type: "checkbox" },
		];

		const replicas = [
			{ value: "dev-used-vehicles", label: "Nyeste først" },
			{ value: "dev-used-vehicles_price_desc", label: "Pris (lav til høj)" },
			{ value: "dev-used-vehicles_price_asc", label: "Pris (høj til lav)" },
			{ value: "dev-used-vehicles_km_driven_asc", label: "Km kørt (lav til høj)" },
			{ value: "dev-used-vehicles_km_driven_desc", label: "Km kørt (høj til lav)" },
			{ value: "dev-used-vehicles_model_year_asc", label: "Model År (lav til høj)" },
			{
				value: "dev-used-vehicles_model_year_desc",
				label: "Model År (høj til lav).",
			},
		];

		return { data, refinements, index, replicas };
	},
});
