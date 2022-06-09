import gql from "graphql-tag";
import { type Ref } from "vue";
import { ICmsArticleListPage, ICmsArticleListPageCollection } from "~~/interfaces/cms/articleListPage";
import { IArticleListPage } from "~~/interfaces/pages/articleListPage";
import { CMSResource } from "~~/resources/contentfulClient";

export const useGetArticleListPage = () => {
	const data: Ref<IArticleListPage | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);

	async function setData() {
		const newData = await cms.getDataAsync<ICmsArticleListPageCollection>(query);
		if (newData !== null && newData.data.articleListPageCollection !== null) {
			data.value = mapArticleListPage(newData.data.articleListPageCollection.items[0]);
		}
	}

	useAsyncData("getArticleListPage", () => setData());

	return data;

	function mapArticleListPage(page: ICmsArticleListPage): IArticleListPage {
		const mappedPage = {
			headline: page.headline,
			teaser: page.subHeadline,
		} as IArticleListPage;
		return mappedPage;
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String) {
		articleListPageCollection(locale: $locale, preview: $preview, limit: 1) {
			items {
				sys {
					id
				}
				nodeName
				typename: __typename
				headline
				subHeadline
				seoMetaDescription
				seoMetaTitle
				showTrustpilotBanner
			}
		}
	}
`;
