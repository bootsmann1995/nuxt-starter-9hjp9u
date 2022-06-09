import { useWindowScroll } from "@vueuse/core";
import { gsap } from "gsap";
import { IModelPage } from "~~/interfaces/pages/modelDetails";

export default defineNuxtComponent({
	setup() {
		const data: IModelPage = {
			backUrl: {
				id: "back-link",
				text: "Alle nye Volvo biler",
				url: "/",
				target: "_self",
				download: false,
			},
			imageSlider: [
				{
					contentType: "image",
					video: {
						id: "",
						placeholder: {
							alt: "",
							url: "",
						},
					},
					image: {
						alt: "test",
						url: "https://autohusetvestergaard.imgix.net/7490/_2022_mazda_cx-60_front_hvid_hus_1920x1080.jpg?q=80&h=650",
					},
				},
				{
					contentType: "image",
					video: {
						id: "",
						placeholder: {
							alt: "",
							url: "",
						},
					},
					image: {
						alt: "test",
						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
					},
				},
				{
					contentType: "video",
					video: {
						id: "NpEaa2P7qZI",
						placeholder: {
							alt: "test",
							url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
						},
					},
					image: {
						alt: "",
						url: "",
					},
				},
				{
					contentType: "image",
					video: {
						id: "",
						placeholder: {
							alt: "",
							url: "",
						},
					},
					image: {
						alt: "test",
						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
					},
				},
				{
					contentType: "image",
					video: {
						id: "",
						placeholder: {
							alt: "",
							url: "",
						},
					},
					image: {
						alt: "test",
						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
					},
				},
				{
					contentType: "video",
					video: {
						id: "NpEaa2P7qZI",
						placeholder: {
							alt: "test",
							url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
						},
					},
					image: {
						alt: "",
						url: "",
					},
				},
				{
					contentType: "image",
					video: {
						id: "",
						placeholder: {
							alt: "",
							url: "",
						},
					},
					image: {
						alt: "test",
						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
					},
				},
			],
			header: "Volvo S60",
			tagline: "Luksus Sedan i skandinavisk design",
			finance: {
				price: 499900,
				link: {
					id: "finance-link",
					text: "Se prisliste",
					url: "https://www.google.com",
					target: "_blank",
					download: false,
				},
				jotform: "Her kommer en jotform",
			},
			contactInfo: [
				{
					id: "string",
					icon: "string",
					value: "finance",
					text: "Se finansieringsmuligheder",
				},
				{
					id: "string",
					icon: "string",
					value: "read more",
					text: "Læs mere om bilen",
				},
				{
					id: "string",
					icon: "string",
					value: "map",
					text: "Se vores afdelinger",
				},
				{
					id: "string",
					icon: "string",
					value: "phone",
					text: "63 13 41 40",
				},
			],
			credentials: [
				{
					text: "Autoriseret Volvo forhandler",
				},
				{
					text: "På markedet siden 1983",
				},
				{
					text: "Fremragende på Trustpilot 4,6 ud af 5 ",
				},
			],

			equipment: {
				header: "Udstyr",
				tagline: "*Vi tager forbehold for fejl, ændringer og mangler",
				equipmentCollection: [
					{
						headline: "Standardudstyr",
						equipment: [
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
						],
					},
					{
						headline: "Plus",
						equipment: [
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
						],
					},
					{
						headline: "Ultimate",
						equipment: [
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
						],
					},
					{
						headline: "Polestar Engineered",
						equipment: [
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
							"12V stik ved for- og bagsæde19",
							"letmetalfælge 5-multi eger Black Diamond Cut 235/40 R19",
							"Fjernbetjent centrallås",
							"Forlygtevaskere",
							"Parkeringssensor for og bag",
							"Progressiv servostyring",
						],
					},
				],
			},
		};

		const blockRouterArrayOne: any[] = [
			{
				typeName: "AdvantagesComponent",
				data: {
					header: "Top fordele",
					text: [
						"Køreegenskaber i verdensklasse ",
						"Den absolut bedste komfort ",
						"Det bedste udstyr fra Volvo ",
						"Et sporty og samtidig elegant design",
						"Toppen af sikkerhed ",
					],
					video: {
						id: "NpEaa2P7qZI",
						placeholder: {
							alt: "test",
							url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
						},
					},
					image: {
						alt: "test",
						url: "https://images.ctfassets.net/9ji0mnletnv4/2RldGP6neDnezxhZ3QJwif/31c361767469ca2f87fb44411eb40c98/hero_skadecenter_autohuset_vestergaard_1920x1080.jpg",
					},
				},
			},
		];

		const blockRouterArrayTwo: any[] = [
			{
				typeName: "CtaBanner",
				data: {
					header: "Privatleasing af S60 | Attraktive månedlige ydelser",
					highlightedText:
						"<p class='c-my-reset'>Har du forelsket dig i S60? Prøv privatleasing hvor du kan være fri for at skulle tænke på omkostningerne til <br/>service og vedligholdelse.</p>",
					link: {
						id: "id",
						text: "Se priser",
						url: "/",
					},
					contactForm: {
						btnText: "",
						jotform: "",
					},
				},
			},
		];

		const { y } = useWindowScroll();
		const pricingSection = ref<HTMLImageElement>(null);

		onMounted(() => {
			animateSection();
		});

		function animateSection() {
			gsap.to(pricingSection.value, {
				scrollTrigger: {
					once: true,
					trigger: pricingSection.value,
					toggleClass: "animation-active",
					start: "top center",
				},
			});
		}

		return {
			data,
			blockRouterArrayOne,
			blockRouterArrayTwo,
			y,
			pricingSection,
		};
	},
});
