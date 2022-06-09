import { IBlockRouter } from "~~/interfaces/components/blocks/blockRouter/blockRouter";

export default defineNuxtComponent({
	props: {
		switchArray: {
			type: Object as () => IBlockRouter[],
		},
	},

	setup() {
		function RenderComponent(typename: string) {
			switch (typename) {
				case "Block5050simple": {
					return "twoColumnBlock";
				}
				case "Block5050extended": {
					return "twoColumnLargeBlock";
				}
				case "Block5050Highlight": {
					return "highlightBlock";
				}
				case "BlockCta": {
					return "ctaBanner";
				}
				case "BlockFullWidthVideoAreaVideo": {
					return "mediaBlock";
				}
				case "BlockFullWidthVideoAreaImage": {
					return "imageBlock";
				}
				case "BlockFullWidthTextArea": {
					return "fullWidthTextArea";
				}
				case "BlockLogoBanner": {
					return "logoBanner";
				}
				case "BlockPromotion": {
					return "promotionBox";
				}
				case "BlockAccordion": {
					return "accordionList";
				}
				case "BlockUspList": {
					return "uspList";
				}
				case "BlockPromoSlider": {
					return "promotionSlider";
				}
				case "BlockNewCars": {
					return "newCarBlock";
				}
				default: {
					return null;
				}
			}
		}

		return {
			RenderComponent,
		};
	},
});
