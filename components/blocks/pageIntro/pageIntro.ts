export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => { headline: string; teaser: string },
			default: null,
		},
		teaserIsManchet: {
			type: Boolean,
			default: false,
		},
		isSearchPage: {
			type: Boolean,
			default: false,
		},
		smallerSpacing: {
			type: Boolean,
			default: false,
		},
		grayText: {
			type: Boolean,
			default: false,
		},
		isDefault: {
			type: Boolean,
			default: false,
		},
	},
});
