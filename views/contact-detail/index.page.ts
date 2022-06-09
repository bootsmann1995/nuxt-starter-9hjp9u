import { IContactDetailPage } from "~~/interfaces/pages/contactDetailPage";

export default defineNuxtComponent({
	setup() {
		// const data: IContactPage | null = null,

		const data: IContactDetailPage = {
			backButton: {
				text: "Alle afdelinger",
				url: "/contact/",
				target: "_self",
				download: false,
				id: "back-button",
			},
			hero: {
				focusBox: {
					tag: "",
					headline: "Velkommen til Kolding",
					text: "Vi er klar til at servicere din bil.",
					primaryLink: {
						url: "/",
						text: "Kontakt os",
					},
					secondaryLink: {
						url: "/",
						text: "Se åbningstider",
					},
				},
				image: {
					url: "https://www.autohuset-vestergaard.dk/media/1777/autohuset_vestergaard_odense_facade_800x600.jpg",
					alt: "test",
				},
			},

			carService: [
				{
					headline: "Vi tilbyder service på disse mærker",
					cars: [
						{
							url: "/",
							image: {
								alt: "",
								url: "https://www.autohuset-vestergaard.dk/media/7215/volvo_graa_baggrund_ny_800x600.jpg",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/6601/renault_logo_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/3602/opel_logo_graa_baggrund_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/6035/peugoet_logo_graa_baggrund_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/6292/kia_ny_logo_graa_baggrund_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/4981/mazda_logo_graaaa_baggrund_800x600.jpg",
								alt: "",
							},
						},
					],
				},
				{
					headline: "Vi tilbyder salg på disse mærker",
					cars: [
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/6292/kia_ny_logo_graa_baggrund_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/4981/mazda_logo_graaaa_baggrund_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/5117/nissan_logo_graa_baggrund_ny_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/1471/alfa_romeo_logo_graa_baggrund_800x600.jpg",
								alt: "",
							},
						},
						{
							url: "/",
							image: {
								url: "https://www.autohuset-vestergaard.dk/media/6604/daica_logo_800x600.jpg",
								alt: "",
							},
						},
					],
				},
			],
			header: "Vi glæder os til at betjene dig",
			subHeader:
				"Vores salgskonsulenter og mekanikere er eksperter, når det kommer til biler – og god kundeservice – så kig forbi og se vores store udvalg af biler, nye såvel som brugte, eller få din egen bil tjekket efter i sømmene på vores værksted.",

			contactSection: {
				address: {
					street: "Trianglen 4",
					postCode: 6000,
					city: "Kolding",
				},

				direction: {
					text: "Se rutevejledning",
					url: "https://www.google.com/maps",
					target: "_blank",
					id: "",
					download: false,
				},
				contactInformation: [
					{
						text: "Tlf",
						url: "75 52 25 55",
						download: false,
						target: "_self",
						id: "",
					},
					{
						text: "Email",
						url: "salg@av.dk",
						download: false,
						id: "",
						target: "_self",
					},
				],
				booking: {
					headline: "Har du brug for at bestille tid til vores værksted?",
					link: {
						text: "Book værkstedstid",
						url: "/",
						target: "_self",
						download: false,
						id: "",
					},
				},
				employeesCta: {
					headline: "Kom i kontakt med vores medarbejdere",
					department: [
						{
							name: "Salg",
							id: "sales-department",
						},
						{
							name: "Værksted",
							id: "workshop-department",
						},
						{
							name: "Skadecenter",
							id: "damages-department",
						},
						{
							name: "Reservedele",
							id: "reserve-parts-department",
						},
						{
							name: "Administration",
							id: "admin-department",
						},
					],
				},
			},

			contactDepartments: [
				{
					id: "sales-department",
					headline: "Salg",
					linkCollection: {
						mail: {
							text: "indskrivning.kolding@autohuset-vestergaard.dk",
							url: "indskrivning.kolding@autohuset-vestergaard.dk",
							target: "_self",
							id: "",
							download: false,
						},
						phone: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
						directions: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
					},
					contactPerson: [
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
					],
				},
				{
					id: "workshop-department",
					headline: "Værksted",
					linkCollection: {
						mail: {
							text: "indskrivning.kolding@autohuset-vestergaard.dk",
							url: "indskrivning.kolding@autohuset-vestergaard.dk",
							target: "_self",
							id: "",
							download: false,
						},
						phone: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
						directions: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
					},
					contactPerson: [
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
					],
				},
				{
					id: "emergency-department",
					headline: "Skadecenter",
					linkCollection: {
						mail: {
							text: "indskrivning.kolding@autohuset-vestergaard.dk",
							url: "indskrivning.kolding@autohuset-vestergaard.dk",
							target: "_self",
							id: "",
							download: false,
						},
						phone: {
							text: "76 33 69 70",
							url: "76 33 69 70",
							target: "_self",
							id: "",
							download: false,
						},
						directions: {
							text: "Trianglen 18, 6000 Kolding",
							url: "https://www.google.dk/maps",
							target: "_blank",
							id: "",
							download: false,
						},
					},
					contactPerson: [
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
					],
				},
				{
					id: "reserve-department",
					headline: "Reservedele",
					linkCollection: {
						mail: {
							text: "indskrivning.kolding@autohuset-vestergaard.dk",
							url: "indskrivning.kolding@autohuset-vestergaard.dk",
							target: "_self",
							id: "",
							download: false,
						},
						phone: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
						directions: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
					},
					contactPerson: [
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
					],
				},
				{
					id: "admin-department",
					headline: "Administration",
					linkCollection: {
						mail: {
							text: "mail.personvogne@autohuset-vestergaard.dk",
							url: "mail.personvogne@autohuset-vestergaard.dk",
							target: "_self",
							id: "",
							download: false,
						},
						phone: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
						directions: {
							text: "",
							url: "",
							target: "_self",
							id: "",
							download: false,
						},
					},
					contactPerson: [
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
						{
							image: {
								url: "https://autohusetvestergaard.imgix.net/6295/jesper_poulsen_180x180.jpg",
								alt: "kontakt-person",
							},
							tagline: "Salgschef personvogne",
							name: "Dennis Kowal Kristiansen",

							mail: {
								text: "Tlf:",
								url: "dennis.kristiansen@autohuset-vestergaard.dk",
								target: "_self",
								id: "",
								download: false,
							},
							phone: {
								text: "Email:",
								url: "75 52 25 55",
								target: "_self",
								id: "",
								download: false,
							},
						},
					],
				},
			],
		};

		const blockRouterArray: any[] = [
			{
				typeName: "CtaBanner",
				data: {
					header: "Åbningstider på helligdage i 2022",
					highlightedText:
						"<p class='c-my-reset'>Har du brug for at se vores åbningstider på helligdage? Vi har lavet en oversigt til dig.</p>",
					link: {
						id: "link",
						text: "Gå til oversigten",
						url: "/",
					},
					contactForm: {
						btnText: "",
						jotform: "",
					},
				},
			},
			{
				typeName: "TwoColumnLargeBlock",
				data: {
					image: {
						url: "https://autohusetvestergaard.imgix.net/7490/_2022_mazda_cx-60_front_hvid_hus_1920x1080.jpg?q=80&h=650",
						alt: "",
					},
					video: null,
					reverse: true,
					contentBlock: {
						tag: "",
						headline: "Er du varevognskunde?",
						text: `Så kommer du automatisk forrest i køen, når du har behov for akut hjælp til bilen. Af samme grund har vi oprettet en akut vagttelefon, som holder åbent helt til kl. 20.00* Vi tilbyder prismatch på alle serviceeftersyn og reparationer.* Vagttelefon: 75 52 25 55 OBS! Vagt telefonen skal kun benyttes i forbindelse med akutte nedbrud på varebiler - alle andre henvendelser skal ske via hovednummeret. *Fredag lukker vagttelefonen kl. 17.00"`,
						primaryLink: null,
					},
				},
			},
			{
				typeName: "PromotionBox",
				data: {
					image: {
						url: "https://autohusetvestergaard.imgix.net/7490/_2022_mazda_cx-60_front_hvid_hus_1920x1080.jpg?q=80&h=650",
						alt: "",
					},
					reverse: false,
					focusBox: {
						tag: "",
						headline: "Leder du efter vores biler?",
						text: "Vi har et stort udvalg af både brugte og nye biler. Her på hjemmesiden kan du finde alle vores biler, samt bestille tid til en prøvekørsel. Vi står klar til at hjælpe dig uanset dine behov.",
						primaryLink: {
							url: "/used-cars",
							text: "Se brugte biler",
						},
						secondaryLink: {
							url: "/new-cars",
							text: "Se nye biler",
						},
					},
				},
			},
			{
				typeName: "OpeningSchedule",
				data: {
					headline: "Åbningstider",
					schedule: [
						{
							headline: "Salg",
							monday: { value: "9:00 - 17:30" },
							tuesday: { value: "9:00 - 17:30" },
							wednesday: { value: "9:00 - 17:30" },
							thursday: { value: "9:00 - 17:30" },
							friday: { value: "9:00 - 17:30" },
							saturday: { value: "11:00 - 16:00" },
							sunday: { value: "11:00 - 16:00" },
						},
						{
							headline: "Skadecenter",
							monday: { value: "9:00 - 15:30" },
							tuesday: { value: "9:00 - 15:30" },
							wednesday: { value: "9:00 - 15:30" },
							thursday: { value: "9:00 - 15:30" },
							friday: { value: "9:00 - 15:30" },
							saturday: { value: "" },
							sunday: { value: "" },
						},
						{
							headline: "Værksted",
							monday: { value: "9:00 - 17:30" },
							tuesday: { value: "9:00 - 17:30" },
							wednesday: { value: "9:00 - 17:30" },
							thursday: { value: "9:00 - 17:30" },
							friday: { value: "9:00 - 17:30" },
							saturday: { value: "" },
							sunday: { value: "" },
						},
						{
							headline: "Reservedele",
							monday: { value: "9:00 - 17:30" },
							tuesday: { value: "9:00 - 17:30" },
							wednesday: { value: "9:00 - 17:30" },
							thursday: { value: "9:00 - 17:30" },
							friday: { value: "9:00 - 17:30" },
							saturday: { value: "" },
							sunday: { value: "" },
						},
					],
				},
			},
		];

		return {
			data,
			blockRouterArray,
		};
	},
});
