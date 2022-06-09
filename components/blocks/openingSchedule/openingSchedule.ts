import { gsap } from "gsap";

export default defineNuxtComponent({
	components: {},
	props: {
		data: {
			type: Object,
		},
	},
	setup() {
		const schedule = ref<HTMLElement>(null);
		const weekdays = [
			{ name: "Mandag", id: "monday" },
			{ name: "Tirsdag", id: "tuesday" },
			{ name: "Onsdag", id: "wednesday" },
			{ name: "Torsdag", id: "thursday" },
			{ name: "Fredag", id: "friday" },
			{ name: "Lørdag", id: "saturday" },
			{ name: "Søndag", id: "sunday" },
		];

		function getWeekDays(index: number) {
			const today = new Date();
			const firstDay = today.getDate() - today.getDay() + 1;

			const weekday = new Date(today.setDate(firstDay + index));
			return weekday.toLocaleDateString("en-GB").replaceAll("/", ".");
		}

		// animation
		onMounted(() => {
			animateBanner();
		});

		function animateBanner() {
			gsap.fromTo(
				schedule.value,
				{
					y: 100,
					opacity: 0,
					ease: "power1",
				},
				{
					duration: 0.5,
					y: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: schedule.value,
						start: "top 75%",
					},
				}
			);
		}

		return {
			schedule,
			weekdays,
			getWeekDays,
		};
	},
});
