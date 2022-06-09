import { useMediaQuery } from "@vueuse/core";
import * as mapper from "~/utils/mapper";
import { getArticles, getArticleTags, getFilterArticlePages } from "~~/fragments/simplePages/simpleArticlePage";
import { ICmsSimpleArticlePage, ICmsSimpleArticlePageCollection } from "~~/interfaces/cms/articlePage";
import { IImageCard } from "~~/interfaces/components/blocks/imageCard/imageCard";
import { ITag } from "~~/interfaces/global";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";

export default defineNuxtComponent({
	async setup() {
		const data = useGetArticleListPage();
		const tagEls = ref([]);
		const showLess = ref(null);
		const showMore = ref(null);
		const selectAll = ref(null);
		const total = ref(null);
		const pageSize = ref(24);
		// tag properties
		const currentActiveTag = ref({ name: "Alle", id: "alle" });

		const showAllTags = ref(false);

		const isLargeScreen = useMediaQuery("(min-width: 992px)");

		// article properties
		const filteredArticles = ref<IImageCard[]>([]);
		const tags = ref<ITag[]>();

		const config = useRuntimeConfig();
		const cms = new CMSResource(config);
		const pages = await GetAllPages(cms);
		tags.value = await getTags();
		await getInitArticles(0);

		// functions for tags and filtering
		async function getTags() {
			let tagList: ITag[] = [];
			const cmsTags = await cms.getDataAsync<ICmsSimpleArticlePageCollection>(getArticleTags);
			if (cmsTags && cmsTags.data.articlePageCollection.items.length > 0) {
				cmsTags.data.articlePageCollection.items.forEach((article) => {
					if (article.contentfulMetadata.tags.length > 0) {
						article.contentfulMetadata.tags.forEach((tag) => {
							tagList.push(tag);
						});
					}
				});
			}

			//filter dublicates
			tagList = tagList.filter(
				(value, index, self) => index === self.findIndex((t) => t.id === value.id && t.name === value.name)
			);
			return tagList;
		}

		async function getInitArticles(currentPage: number) {
			const skip = currentPage * pageSize.value;
			const articles = await cms.getDataAsync<ICmsSimpleArticlePageCollection>(getArticles, {
				limit: pageSize.value,
				skip: skip,
			});
			total.value = articles.data.articlePageCollection.total;
			const cards: IImageCard[] = [];
			articles.data.articlePageCollection.items.forEach((article) => {
				cards.push(mapImageCard(article));
			});

			filteredArticles.value = cards;
		}

		function mapImageCard(article: ICmsSimpleArticlePage): IImageCard {
			const date = new Date(article.publishDate);
			const card = {
				date: mapper.formatDate(date),
				headline: article.headline,
				image: mapper.mapMediaItem(article.image),
				tag: "",
				link: mapper.getReferenceLink(article.sys.id, pages),
			} as IImageCard;

			return card;
		}

		function multiplesOf(pageCount, currentPage) {
			if (pageCount > 6) {
				if (currentPage + 5 > pageCount) {
					return pageCount + 5;
				}
			} else {
				return pageCount;
			}
		}

		async function filterByTag(tag: ITag, currentPage = 0) {
			filteredArticles.value = [];
			if (tag.id === "alle") {
				currentActiveTag.value = { name: "Alle", id: "alle" };
				await getInitArticles(currentPage);
				return;
			}
			currentActiveTag.value = tag;
			const skip = currentPage * pageSize.value;
			const cmsArticlesByTag = await cms.getDataAsync<ICmsSimpleArticlePageCollection>(getFilterArticlePages, {
				limit: pageSize.value,
				tags: tag.id,
				skip: skip,
			});

			total.value = cmsArticlesByTag.data.articlePageCollection.total;

			if (cmsArticlesByTag && cmsArticlesByTag.data.articlePageCollection.items.length > 0) {
				cmsArticlesByTag.data.articlePageCollection.items.forEach((article) => {
					filteredArticles.value.push(mapImageCard(article));
				});
			}

			return;
		}

		async function fetchData(currentPage: any) {
			await filterByTag(currentActiveTag.value, currentPage - 1);

			// const scroll = ScrollSmoother.get();
			// scroll.scrollTo(0, true);
		}

		return {
			total,
			pageSize,
			data,
			filteredArticles,
			tags,
			fetchData,
			filterByTag,
			currentActiveTag,
			showAllTags,
			selectAll,
			showMore,
			isLargeScreen,
			showLess,
			multiplesOf,
			tagEls,
		};
	},
});
