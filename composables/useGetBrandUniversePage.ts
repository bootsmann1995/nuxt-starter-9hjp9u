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
import { blockLeasingCars } from "~~/fragments/blocks/blockLeasingCars";
import { blockLogoBanner } from "~~/fragments/blocks/blockLogoBanner";
import { blockNewCars } from "~~/fragments/blocks/blockNewCars";
import { blockPromotion } from "~~/fragments/blocks/blockPromotion";
import { blockUspList } from "~~/fragments/blocks/blockUspList";
import { externalLink, imageLink, internalLink } from "~~/fragments/Globals/link";
import { modal } from "~~/fragments/Globals/modal";
import { simpleArticlePage } from "~~/fragments/simplePages/simpleArticlePage";
import { ICmsBrandUniversePage, ICmsBrandUniversePageCollection } from "~~/interfaces/cms/brandUniversePage";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { IReferenceBlock } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";
import { IBrandPage } from "~~/interfaces/pages/brandPage";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";

export const useGetBrandUniversePage = (slug: string) => {
	const data: Ref<IBrandPage | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsBrandUniversePageCollection>(query, { slug: slug });
		if (newData !== null && newData.data.brandUniversePageCollection !== null) {
			data.value = mapBrandUniversePage(newData.data.brandUniversePageCollection.items[0], pages);
		}
	}

	useAsyncData("getBrandUniversePage", () => setData());

	return data;

	function mapBrandUniversePage(brandPage: ICmsBrandUniversePage, pages: ICmsPage[]): IBrandPage {
		const parent = mapper.getReferenceLink(brandPage.parent.sys.id, pages);
		const obj: IBrandPage = {
			headline: brandPage.headline,
			subHeadline: brandPage.subHeadline,
			backUrl: parent.url,
			dynamicContent: blockMapper.mapBlocks(brandPage.contentAreaCollection, pages),
			referenceBlock: mapRelatedArticles(brandPage, pages),
		};
		return obj;
	}
	function mapRelatedArticles(brandPage: ICmsBrandUniversePage, pages: ICmsPage[]): IReferenceBlock {
		const obj = {
			header: brandPage.relatedArticlesHeadline,
			articleCollection: null,
			link: null,
		};
		if (brandPage.relatedArticlesCollection && brandPage.relatedArticlesCollection.items.length > 0) {
			obj.articleCollection = brandPage.relatedArticlesCollection.items.map((article) =>
				mapper.mapArticle(article, pages)
			);
		}
		return obj;
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String, $slug: String) {
		brandUniversePageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
			items {
				sys {
					id
				}
				nodeName
				typename: __typename
				headline
				subHeadline
				logo {
					title
					description
					contentType
					url
				}
				contentAreaCollection(limit: 25) {
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
						...blockNewCars
						...blockLeasingCars
					}
				}
				seoMetaDescription
				seoMetaTitle
				relatedArticlesHeadline
				relatedArticlesCollection(limit: 5) {
					items {
						...simpleArticlePage
					}
				}
				showTrustpilotBanner
				parent {
					sys {
						id
					}
				}
			}
		}
	}
	${blockUspList}
	${blockAccordion}
	${blockPromotion}
	${blockFullWidthTextArea}
	${blockLogoBanner}
	${blockFullWidthVideoArea}
	${blockCta}
	${block5050Highlight}
	${modal}
	${block5050}
	${internalLink}
	${externalLink}
	${imageLink}
	${simpleArticlePage}
	${blockNewCars}
	${blockLeasingCars}
`;
