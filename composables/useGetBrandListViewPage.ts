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
import { blockPromotion } from "~~/fragments/blocks/blockPromotion";
import { blockUspList } from "~~/fragments/blocks/blockUspList";
import { externalLink, imageLink, internalLink } from "~~/fragments/Globals/link";
import { modal } from "~~/fragments/Globals/modal";
import { ICmsBrandListViewPage, ICmsBrandListViewPageCollection } from "~~/interfaces/cms/brandListViewPage";
import { ICmsSimpleBrandUniversePage } from "~~/interfaces/cms/brandUniversePage";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { IImageLinkListBlock } from "~~/interfaces/components/blocks/imageLinkList/imageLinkList";
import { IBrandListViewPage } from "~~/interfaces/pages/brandListViewPage";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";

export const useGetBrandListViewPage = (slug: string) => {
	const data: Ref<IBrandListViewPage | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsBrandListViewPageCollection>(query, { slug: slug });
		if (newData !== null && newData.data.brandListViewPageCollection !== null) {
			data.value = mapBrandListViewPage(newData.data.brandListViewPageCollection.items[0], pages);
		}
	}

	useAsyncData("getBrandListViewPage", () => setData());

	return data;

	function mapBrandListViewPage(brandListView: ICmsBrandListViewPage, pages: ICmsPage[]): IBrandListViewPage {
		const obj = {
			dynamicContent: blockMapper.mapBlocks(brandListView.contentAreaCollection, pages),
			headline: brandListView.headline,
			teaser: brandListView.subHeadline,
			brands: null,
		} as IBrandListViewPage;

		if (brandListView.brandsCollection && brandListView.brandsCollection.items.length > 0) {
			obj.brands = mapBrands(brandListView.brandsCollection.items, pages);
		}

		return obj;
	}

	function mapBrands(items: ICmsSimpleBrandUniversePage[], pages: ICmsPage[]): IImageLinkListBlock {
		const obj = {
			imageLinks: [],
			typename: "brands",
		} as IImageLinkListBlock;

		items.forEach((brand) => {
			obj.imageLinks.push({
				image: mapper.mapMediaItem(brand.logo),
				link: mapper.getReferenceLink(brand.sys.id, pages),
				text: "",
			});
		});

		return obj;
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String, $slug: String) {
		brandListViewPageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
			items {
				sys {
					id
				}
				typename: __typename
				nodeName
				headline
				subHeadline
				brandsCollection(limit: 40) {
					items {
						sys {
							id
						}
						slug
						nodeName
						logo {
							title
							description
							contentType
							url
						}
					}
				}
				contentAreaCollection(limit: 20) {
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
					}
				}
				showTrustpilotBanner
				seoMetaTitle
				seoMetaDescription
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
`;
