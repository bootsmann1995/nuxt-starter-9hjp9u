import gql from "graphql-tag";
import { type Ref } from "vue";
import * as blockMapper from "~/utils/blockMapper";
import * as mapper from "~/utils/mapper";
import { block5050 } from "~~/fragments/blocks/block5050";
import { block5050Highlight } from "~~/fragments/blocks/block5050Highlight";
import { blockAccordion } from "~~/fragments/blocks/blockAccordion";
import { blockCta } from "~~/fragments/blocks/blockCTA";
import { blockFullWidthTextArea } from "~~/fragments/blocks/blockFullWidthTextArea";
import { blockFullWidthVideoArea } from "~~/fragments/blocks/blockFullWidthVideoArea";
import { blockLogoBanner } from "~~/fragments/blocks/blockLogoBanner";
import { blockPromoSlider } from "~~/fragments/blocks/blockPromoSlider";
import { blockPromotion } from "~~/fragments/blocks/blockPromotion";
import { blockUspList } from "~~/fragments/blocks/blockUspList";
import { externalLink, imageLink, internalLink } from "~~/fragments/Globals/link";
import { modal } from "~~/fragments/Globals/modal";
import { getNewestArticles, simpleArticlePage } from "~~/fragments/simplePages/simpleArticlePage";
import { ICmsSimpleArticlePage, ICmsSimpleArticlePageCollection } from "~~/interfaces/cms/articlePage";
import { ICmsFrontPage, ICmsFrontPageCollection } from "~~/interfaces/cms/frontPage";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { ICategory, ICategorySlider } from "~~/interfaces/components/blocks/categorySlider/categorySlider";
import { IFocusBox } from "~~/interfaces/components/blocks/focusBox/focusBox";
import { IHero } from "~~/interfaces/components/blocks/hero/hero";
import { IReferenceBlock } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";
import { IFrontPage } from "~~/interfaces/pages/frontpage";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";

export const useGetFrontPage = () => {
	const data: Ref<IFrontPage | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsFrontPageCollection>(query);
		const newestArticles = await cms.getDataAsync<ICmsSimpleArticlePageCollection>(getNewestArticles, { limit: 4 });
		if (newData !== null && newData.data.frontPageCollection !== null) {
			data.value = mapFrontPage(newData.data.frontPageCollection.items[0], newestArticles.data);
		}
	}

	useAsyncData("getFrontPage", () => setData());

	return data;

	function mapFrontPage(frontPage: ICmsFrontPage, newestArticles: ICmsSimpleArticlePageCollection): IFrontPage {
		const obj = {
			headline: frontPage.richHeadline,
			hero: mapHero(frontPage),
			categorySliders: mapCategorySliders(frontPage),
			dynamicContent: blockMapper.mapBlocks(frontPage.contentAreaCollection, pages),
			campaignSlider: null,
		} as IFrontPage;

		if (newestArticles !== null && newestArticles.articlePageCollection !== null) {
			obj.campaignSlider = mapRelatedArticles(frontPage, pages, newestArticles.articlePageCollection.items);
		}
		return obj;
	}

	function mapHero(frontPage: ICmsFrontPage): IHero {
		const obj = {
			focusBox: mapFocusBox(frontPage),
			image: mapper.mapMediaItem(frontPage.image),
		};
		return obj;
	}

	function mapFocusBox(frontPage: ICmsFrontPage): IFocusBox {
		return {
			tag: frontPage.promoMainHeadline,
			headline: frontPage.promoHeadline,
			text: frontPage.promoSubHeadline,
			primaryLink: mapper.mapCtaBtn(frontPage.promoPrimaryLink, pages),
			secondaryLink: mapper.mapCtaBtn(frontPage.promoSecondaryLink, pages),
		};
	}

	function mapCategorySliders(frontPage: ICmsFrontPage): ICategorySlider<ICategory[]>[] {
		const categoriesSliders: ICategorySlider<ICategory[]>[] = [];
		const usedCarsSlider: ICategorySlider<ICategory[]> = {
			headline: frontPage.usedVehicleAreaHeadline,
			categories: [],
		};
		if (frontPage.usedVehicleAreaImageSliderTypeCollection.items.length > 0) {
			usedCarsSlider.categories.push({
				categoryName: "Type",
				items: frontPage.usedVehicleAreaImageSliderTypeCollection.items.map((car) => {
					return {
						id: car.sys.id,
						image: mapper.mapMediaItem(car.image),
						link: mapper.mapLink(car.link, pages),
						name: car.text === null ? "" : car.text,
					};
				}),
			});
		}

		if (frontPage.usedVehicleAreaImageSliderBrandCollection.items.length > 0) {
			usedCarsSlider.categories.push({
				categoryName: "Mærke",
				items: frontPage.usedVehicleAreaImageSliderBrandCollection.items.map((car) => {
					return {
						id: car.sys.id,
						image: mapper.mapMediaItem(car.image),
						link: mapper.mapLink(car.link, pages),
						name: car.text === null ? "" : car.text,
					};
				}),
			});
		}

		categoriesSliders.push(usedCarsSlider);

		const newCarSlider: ICategorySlider<ICategory[]> = {
			headline: frontPage.newVehicleAreaHeadline,
			categories: [],
		};

		if (frontPage.newVehicleAreaImageSliderCollection.items.length > 0) {
			newCarSlider.categories.push({
				categoryName: "New",
				items: frontPage.newVehicleAreaImageSliderCollection.items.map((car) => {
					return {
						id: car.sys.id,
						image: mapper.mapMediaItem(car.image),
						link: mapper.mapLink(car.link, pages),
						name: car.text === null ? "" : car.text,
					};
				}),
			});
		}

		categoriesSliders.push(newCarSlider);
		return categoriesSliders;
	}

	function mapRelatedArticles(
		frontPage: ICmsFrontPage,
		pages: ICmsPage[],
		newestArticles: ICmsSimpleArticlePage[]
	): IReferenceBlock {
		const obj = {
			header: frontPage.newArticlesAreaHeadline,
			link: mapper.mapLink(frontPage.newArticlesAreaLink, pages),
			articleCollection: null,
		};
		if (newestArticles && newestArticles.length > 0) {
			obj.articleCollection = newestArticles.map((article) => mapper.mapArticle(article, pages));
		}
		return obj;
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String) {
		frontPageCollection(locale: $locale, preview: $preview, limit: 1) {
			items {
				sys {
					id
				}
				typename: __typename
				nodeName
				image {
					title
					description
					contentType
					url
				}
				promoMainHeadline
				promoHeadline
				promoSubHeadline
				promoPrimaryLink {
					...internalLink
					...externalLink
				}
				promoSecondaryLink {
					...internalLink
					...externalLink
				}
				richHeadline {
					json
				}
				usedVehicleAreaHeadline
				usedVehicleAreaImageSliderTypeCollection(limit: 50) {
					items {
						...imageLink
					}
				}
				usedVehicleAreaImageSliderBrandCollection(limit: 50) {
					items {
						...imageLink
					}
				}
				newVehicleAreaHeadline
				newVehicleAreaImageSliderCollection(limit: 50) {
					items {
						...imageLink
					}
				}
				contentAreaCollection(limit: 15) {
					items {
						...block5050
						...block5050Highlight
						...blockCta
						...blockFullWidthVideoArea
						...blockLogoBanner
						...blockFullWidthTextArea
						...blockLogoBanner
						...blockPromotion
						...blockAccordion
						...blockUspList
						...blockPromoSlider
					}
				}
				newArticlesAreaHeadline
				newArticlesAreaLink {
					...internalLink
				}
				newArticlesAreaCollection(limit: 4) {
					items {
						...simpleArticlePage
					}
				}
				showTrustpilotBanner
				seoMetaTitle
				seoMetaDescription
			}
		}
	}
	${blockPromoSlider}
	${blockUspList}
	${blockAccordion}
	${blockPromotion}
	${blockFullWidthTextArea}
	${blockLogoBanner}
	${blockFullWidthVideoArea}
	${blockCta}
	${block5050Highlight}
	${simpleArticlePage}
	${modal}
	${block5050}
	${internalLink}
	${externalLink}
	${imageLink}
`;
