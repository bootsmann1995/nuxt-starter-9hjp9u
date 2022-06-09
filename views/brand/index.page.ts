export default defineNuxtComponent({
	props: {
		slug: {
			type: String,
		},
	},
	components: {},
	setup(props) {
		// 		const data: IBrandPage = {
		// 			headline: "Nye Volvo biler",
		// 			subHeadline:
		// 				"Vi er stolte over at være Volvo forhandler og yderst glade for at kunne præsentere alle modeller fra Volvo. Bilmærket har de sidste år virkelig forbedret design og ligeledes teknik, hvilket gør, at flere danskere end nogensinde kører i en Volvo. Har du ikke før prøvet en Volvo, så kan du forvente en oplevelse. ",
		// 			backUrl: "/",
		// 			carCollection: [
		// 				{
		// 					link: "/",
		// 					tag: "Nye priser",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo C40 Recharge",
		// 					description: "Den første 100% elektriske crossover fra Volvo",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo V60",
		// 					description:
		// 						"Er dit behov ikke til en stationcar som V60, så har du måske ventet på sedanudgaven, nemlig den nye S60",
		// 					price: "383.080",
		// 				},

		// 				{
		// 					link: "/",
		// 					tag: "",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo S60",
		// 					description: "Den perfekte stationcar til familien, pendler eller firmabil.",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "Kan prøvekøres nu",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo V60",
		// 					description: "V90 kombinerer udsøgte, naturlige materialer med sofistikeret, intuitiv teknologi.",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo V90",
		// 					description: "Så er den nye Volvo S90 ankommet, og du kan prøve den i alle vores Volvo-afdelinger.",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo S60",
		// 					description: "Behov for en kompakt luksus SUV? Så se her - valget er klart en XC40!",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "Nyhed",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo XC40",
		// 					description: "100% elektrisk SUV fra Volvo",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo XC40 Elbil",
		// 					description: "Behov for en stor SUV? Så skal du helt sikkert kigge på den fede XC60",
		// 					price: "383.080",
		// 				},
		// 				{
		// 					link: "/",
		// 					tag: "",
		// 					image: {
		// 						alt: "test",
		// 						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
		// 					},
		// 					headline: "Volvo XC60",
		// 					description:
		// 						"Denne moderne SUV, der findes med 5 eller 7 pladser, er vores markante bud på, hvad det vil sige at køre en luksusbil i det 21. århundrede.",
		// 					price: "383.080",
		// 				},
		// 			],
		// 		};

		// 		const blockRouterArray: any[] = [
		// 			{
		// 				typeName: "CtaBanner",
		// 				data: {
		// 					header: "Har du brug for hjælp til at vælge? ",
		// 					highlightedText:
		// 						"<p class='c-my-reset'>Vores Volvo eksperter sidder klar til at guide dig videre med den helt rigtige valg.<br/>De tager udgangspunkt i alle aspekter af din situation, både behov og det finansielle.</p>",
		// 					link: {
		// 						id: "",
		// 						text: "",
		// 						url: "",
		// 					},
		// 					contactForm: {
		// 						btnText: "Book en ekspert",
		// 						jotform: "Her kommer en booking Jotform",
		// 					},
		// 				},
		// 			},
		// 			{
		// 				typeName: "HighlightBlock",
		// 				data: {
		// 					reverse: false,
		// 					highlightContent: `
		// 						Sikkerhed, kvalitet og omtanke for miljøet`,
		// 					detailedContent: {
		// 						description: `Volvo, der produceres og udvikles i Sverige, er kendt for sikkerhed. Bilmærket har som det eneste sit eget crashtest-center på fabrikken i Gøteborg, hvor alle Volvo modeller bliver omhyggeligt testet, inden de sættes i produktion. Derfor kan Volvo i dag prale af at have verdens sikreste bil.
		// `,
		// 						ctaLink: {
		// 							text: "",
		// 							url: "",
		// 							target: "",
		// 							download: false,
		// 						},
		// 					},
		// 				},
		// 			},
		// 			{
		// 				typeName: "PromotionBox",
		// 				data: {
		// 					image: {
		// 						url: "https://autohusetvestergaard.imgix.net/7490/_2022_mazda_cx-60_front_hvid_hus_1920x1080.jpg?q=80&h=650",
		// 						alt: "",
		// 					},
		// 					reverse: false,
		// 					focusBox: {
		// 						tag: "ALTID PÅ FORKANT",
		// 						headline: "Polestar optimering",
		// 						text: "Polestar er en softwareoptimering, der påvirker op til 6 forskellige elementer i bilen. Med en effektoptimering af din Volvo kan du opnå følelsen af en helt ny bil uden at skulle købe en ny. ",
		// 						primaryLink: {
		// 							url: "/model",
		// 							text: "Læs mere om Polestar",
		// 						},
		// 						secondaryLink: {
		// 							url: "",
		// 							text: "",
		// 						},
		// 					},
		// 				},
		// 			},
		// 			{
		// 				typeName: "CtaBanner",
		// 				data: {
		// 					header: "Skal din nye firmabil være en Volvo?",
		// 					highlightedText:
		// 						"<p class='c-my-reset'>Volvos modeller er populære business modeller med deres rummelighed, design og køreegenskaber. Vi har samlet en oversigt over de mest populære modeller.</p>",
		// 					link: {
		// 						id: "link",
		// 						text: "Læs om Volvo Business Lease",
		// 						url: "/model",
		// 					},
		// 					contactForm: {
		// 						btnText: "",
		// 						jotform: "",
		// 					},
		// 				},
		// 			},
		// 		];
		const data = useGetBrandUniversePage(props.slug);
		const viewportTab = useMediaQuery("(max-width: 992px)");
		const isExpanded = ref(false);

		function toggleReadMore() {
			isExpanded.value = !isExpanded.value;
		}

		return {
			data,
			isExpanded,
			viewportTab,
			toggleReadMore,
		};
	},
});
