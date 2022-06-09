import { history as historyRouter } from "instantsearch.js/es/lib/routers";
import { singleIndex as singleIndexMapping } from "instantsearch.js/es/lib/stateMappings";

export default defineNuxtComponent({
	props: {
		hero: {
			type: Object as () => { headline: string; text: string },
		},
		refinements: {
			type: Object as () => { filter: string; name: string; type: string }[],
			default: [],
		},
		searchIndex: {
			type: String,
		},
		replicas: {
			type: Object as () => { value: string; label: string }[],
		},
		price: {
			type: String,
		},
		isLeasing: {
			type: Boolean,
			default: null,
		},
	},
	setup(props) {
		const activePrice = ref(props.price);
		const mobileFilterIsActive = ref(false);
		const sortByMobile = ref(false);
		const isMobile = useMediaQuery("(max-width: 992px)");
		const searchClient = useAlgolia();
		const fixedEl = ref(null);
		const routing = {
			router: historyRouter(),
			stateMapping: singleIndexMapping(props.searchIndex),
		};

		useGetFixedSidebar(fixedEl, 40 + 88 + 60);

		function openMobileFilter() {
			mobileFilterIsActive.value = !mobileFilterIsActive.value;
		}

		// reason for document queryselector is bc of update error refines it self on ais-sort-by
		function toggleSortByMobile() {
			const backDrop = document.querySelector(".filter-sort-by-backdrop");
			const sortBy = document.querySelector(".filter-sort-by");
			if (backDrop != null) {
				backDrop.classList.toggle("is-active");
			}
			if (sortBy != null) {
				sortBy.classList.toggle("is-active");
			}
		}

		function tabChange(tab: string) {
			activePrice.value = tab;
		}

		return {
			searchClient,
			routing,
			tabChange,
			activePrice,
			openMobileFilter,
			mobileFilterIsActive,
			isMobile,
			toggleSortByMobile,
			sortByMobile,
			fixedEl,
		};
	},
});
