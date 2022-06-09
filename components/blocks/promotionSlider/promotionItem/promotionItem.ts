import { IPromoArticle } from "~~/interfaces/components/blocks/promoSlider/promoSlider";

export default defineNuxtComponent({
	props: {
		item: {
			type: Object as () => IPromoArticle,
		},
	},
});
