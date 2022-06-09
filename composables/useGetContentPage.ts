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
import { simpleArticlePage } from "~~/fragments/simplePages/simpleArticlePage";
import { ICmsContentPage, ICmsContentPageCollection } from "~~/interfaces/cms/contentPage";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { IHero } from "~~/interfaces/components/blocks/hero/hero";
import { IReferenceBlock } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";
import { IContentPage } from "~~/interfaces/pages/contentPage";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";

export const useGetContentPage = (slug: string) => {
	const data: Ref<IContentPage | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsContentPageCollection>(query, {
			slug: slug,
		});
		if (newData !== null && newData.data.contentPageCollection !== null) {
			data.value = await mapContentPage(newData.data.contentPageCollection.items[0], pages);
		}
	}

	useAsyncData("getContentPage", () => setData());

	return data;

	async function mapContentPage(contentPage: ICmsContentPage, pages: ICmsPage[]): Promise<IContentPage> {
		return {
			hero: mapHero(contentPage),
			campaignSlider: mapRelatedArticles(contentPage, pages),
			dynamicContent: blockMapper.mapBlocks(contentPage.contentAreaCollection, pages),
			introText: contentPage.introText?.json,
		};
	}

	function mapRelatedArticles(contentPage: ICmsContentPage, pages: ICmsPage[]): IReferenceBlock {
		const obj = {
			header: contentPage.relatedArticlesAreaHeadline,
			articleCollection: null,
			link: null,
		};
		if (contentPage.relatedArticlesAreaCollection && contentPage.relatedArticlesAreaCollection.items.length > 0) {
			obj.articleCollection = contentPage.relatedArticlesAreaCollection.items.map((article) =>
				mapper.mapArticle(article, pages)
			);
		}
		return obj;
	}

	function mapHero(contentPage: ICmsContentPage): IHero {
		return {
			focusBox: {
				headline: contentPage.heroBoxHeadline,
				text: contentPage.heroBoxSubHeadline,
				primaryLink: mapper.mapCtaBtn(contentPage.heroBoxPrimaryLink, pages),
				secondaryLink: mapper.mapCtaBtn(contentPage.heroBoxSecondaryLink, pages),
			},
			image: mapper.mapMediaItem(contentPage.image),
		};
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String, $slug: String) {
		contentPageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
			items {
				sys {
					id
				}
				nodeName
				typename: __typename
				contentfulMetadata {
					tags {
						id
						name
					}
				}
				introText {
					json
				}
				heroBoxHeadline
				heroBoxSubHeadline
				heroBoxPrimaryLink {
					...internalLink
					...externalLink
					...modal
				}
				heroBoxSecondaryLink {
					...internalLink
					...externalLink
					...modal
				}
				image {
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
					}
				}
				relatedArticlesAreaHeadline
				relatedArticlesAreaCollection {
					items {
						...simpleArticlePage
					}
				}
				seoMetaDescription
				seoMetaTitle
				showTrustpilotBanner
			}
		}
	}
	${simpleArticlePage}
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
