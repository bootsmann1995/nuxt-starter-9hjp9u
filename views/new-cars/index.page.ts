export default defineNuxtComponent({
	props: {
		slug: {
			type: String,
		},
	},
	setup(props) {
		const data = useGetBrandListViewPage(props.slug);
		const pageIntro = ref({
			headline: "Find din næste ny bil hos os",
			teaser: `Vi er eksperter i biler. Så meget
	eksperter at vi er autoriseret forhandler af intet mindre end 12 bilmærker. For dig betyder det, at du
	kan få den helt rigtige ny bil hos os, uanset hvad du har brug for. Vælg bilmærke for at se hele
	modelprogrammet. Under hver bilmodel, finder du priser, udstyrsbeskrivelse, info og billeder.`,
		});
		// const logoBannerList: Ref<IImageLinkListBlock> = ref({
		// 	typename: "logoBanner",
		// 	imageLinks: [
		// 		{
		// 			url: "/",
		// 			image: {
		// 				alt: "",
		// 				url: "https://www.autohuset-vestergaard.dk/media/7215/volvo_graa_baggrund_ny_800x600.jpg",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/6601/renault_logo_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/3602/opel_logo_graa_baggrund_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/6035/peugoet_logo_graa_baggrund_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/6292/kia_ny_logo_graa_baggrund_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/4981/mazda_logo_graaaa_baggrund_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/5117/nissan_logo_graa_baggrund_ny_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/1471/alfa_romeo_logo_graa_baggrund_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 		{
		// 			url: "/",
		// 			image: {
		// 				url: "https://www.autohuset-vestergaard.dk/media/6604/daica_logo_800x600.jpg",
		// 				alt: "",
		// 			},
		// 			text: "",
		// 		},
		// 	],
		// });

		return {
			data,
			pageIntro,
		};
	},
});
