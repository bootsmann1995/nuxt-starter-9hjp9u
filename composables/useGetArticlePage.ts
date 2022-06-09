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
import { getRelatedArticlesBytags } from "~~/fragments/simplePages/simpleArticlePage";
import { ICmsArticlePage, ICmsArticlePageCollection, ICmsSimpleArticlePage } from "~~/interfaces/cms/articlePage";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { IReferenceBlock } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";
import { IArticlePage } from "~~/interfaces/pages/articlePage";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages, getFullPathByType } from "~~/resources/contentfulHelper";

export const useGetArticlePage = (slug: string) => {
	const data: Ref<IArticlePage | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsArticlePageCollection>(query, { slug: slug });
		if (newData !== null && newData.data.articlePageCollection !== null) {
			data.value = await mapArticlePage(newData.data.articlePageCollection.items[0], pages);
		}
	}

	useAsyncData("getArticlePage", () => setData());

	return data;

	async function mapArticlePage(articlePage: ICmsArticlePage, pages: ICmsPage[]): Promise<IArticlePage> {
		const parentPath = getFullPathByType(pages, "ArticleListPage");
		const date = new Date(articlePage.publishDate);
		const mappedArticle = {
			backUrl: parentPath,
			date: mapper.formatDate(date),
			headline: articlePage.headline,
			img: mapper.mapMediaItem(articlePage.image),
			subHeadline: articlePage.subHeadline,
			subject: articlePage.contentfulMetadata?.tags[0].name,
			dynamicContent: blockMapper.mapBlocks(articlePage.contentAreaCollection, pages),
			showReferenceBlock: articlePage.showRelatedArticles,
			referenceBlock: null,
		} as IArticlePage;

		if (articlePage.showRelatedArticles) {
			const tags = articlePage.contentfulMetadata?.tags.map((tag) => tag.id);
			const articlesData = await cms.getDataAsync<ICmsArticlePageCollection>(getRelatedArticlesBytags, {
				tags: tags,
				limit: 4,
				slug: slug,
			});
			if (articlesData && articlesData.data.articlePageCollection.items.length > 0) {
				mappedArticle.referenceBlock = mapRelatedArticles(pages, articlesData.data.articlePageCollection.items);
			}
		}

		return mappedArticle;
	}

	function mapRelatedArticles(pages: ICmsPage[], relatedArticles: ICmsSimpleArticlePage[]): IReferenceBlock {
		const obj = {
			header: "Relaterede artikler",
			link: null,
			articleCollection: null,
		};
		if (relatedArticles && relatedArticles.length > 0) {
			obj.articleCollection = relatedArticles.map((article) => mapper.mapArticle(article, pages));
		}
		return obj;
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String, $slug: String) {
		articlePageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
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
				publishDate
				headline
				subHeadline
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
				seoMetaDescription
				seoMetaTitle
				showRelatedArticles
				showTrustpilotBanner
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
