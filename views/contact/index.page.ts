import { IContactPage } from "~~/interfaces/pages/contactPage";

export default defineNuxtComponent({
	setup() {
		// const data: IContactPage | null = null,

		const data: IContactPage = {
			header: "Vores afdelinger",
			teaser: "Hos Autohuset Vestergaard tager vi ansvar for at give vores kunder en god og behagelig oplevelse. Vi hjælper med at løse hverdagens udfordringer, hvad enten du har brug for en bil eller reparation/service. Hvad enten du befinder dig i Jylland, på Fyn eller Sjælland, så kan du altid finde en Autohuset Vestergaard A/S afdeling i nærheden af dig. ",
			departments: [
				{
					departmentHeader: "Afdelinger i Jylland",
					department: [
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/1777/autohuset_vestergaard_odense_facade_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Vejle",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda"],
						},
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/4933/odense_s_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Kolding",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda", "Polestar"],
						},
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/1777/autohuset_vestergaard_odense_facade_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Fredericia",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda", "Polestar"],
						},
					],
				},
				{
					departmentHeader: "Afdelinger på Fyn",
					department: [
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/4933/odense_s_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Odense SV",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda"],
						},
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/1777/autohuset_vestergaard_odense_facade_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Horsens",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda", "Polestar"],
						},
					],
				},
				{
					departmentHeader: "Afdelinger på Sjælland",
					department: [
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/1777/autohuset_vestergaard_odense_facade_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Odense",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda", "Polestar"],
						},
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/4933/odense_s_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Horsens",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda"],
						},
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/1777/autohuset_vestergaard_odense_facade_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Horsens",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda", "Polestar"],
						},
						{
							link: {
								id: "test",
								text: "",
								url: "/contact/contactItem",
								target: "_self",
								download: false,
							},
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/4933/odense_s_800x600.jpg",
								alt: "test",
							},
							openingHours: {
								monday: { value: "9:00 - 17:30" },
								tuesday: { value: "" },
								wednesday: { value: "9:00 - 17:30" },
								thursday: { value: "9:00 - 17:30" },
								friday: { value: "9:00 - 17:30" },
								saturday: { value: "9:00 - 17:30" },
								sunday: { value: "" },
							},
							city: "Horsens",
							address: {
								street: "Ormhøjgårdvej 2",
								postCode: 8700,
								city: "Horsens",
							},
							phone: "75 64 80 00",
							cars: ["Volvo", "Ford", "Mazda", "Polestar"],
						},
					],
				},
			],
			subTeaser:
				"Vi hjælper dig sikkert igennem Har du behov for en ny eller brugt bil, så hjælper vi dig sikkert igennem dit bilkøb. Vores brede udvalg af bilmærker og vores mange brugte biler, gør at vi i langt de fleste tilfælde har en bil, der passer perfekt til dine behov. Brug for et værksted? Vi har hele 11 værksteder, der alle er autoriseret og derfor kan yde den absolut bedste service til dig og din bil. Du kan nemt bestille tid på et af vores værksteder online eller stille spørgsmål via vores chat. ",
			dynamicContent: undefined,
		};

		const search = ref("");
		const searchedProducts = computed(() => {
			return (
				data.departments.filter((x) => x.department.some((y) => y.cars.includes(search.value))) ||
				data.departments.filter((x) => x.department.some((y) => y.city.includes(search.value))) ||
				data.departments.filter((x) => x.department.some((y) => y.address.city.includes(search.value))) ||
				data.departments.filter((x) => x.department.some((y) => y.address.street.includes(search.value)))
			);
		});

		return {
			data,
			search,
			searchedProducts,
		};
	},
});
