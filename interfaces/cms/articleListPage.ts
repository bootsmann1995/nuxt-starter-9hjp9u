import { IGraphQLCollection } from "../graphQL";
import { ICmsPage } from "./globals";

export declare interface ICmsArticleListPageCollection {
	articleListPageCollection: IGraphQLCollection<ICmsArticleListPage>;
}

export declare interface ICmsArticleListPage extends ICmsPage {
	headline: string;
	subHeadline: string;
	showRelatedArticles: boolean;
}
