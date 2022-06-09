import { IGraphQLCollection } from "../graphQL";
import { ICmsImage, ICmsPage } from "./globals";

export declare interface ICmsArticlePageCollection {
	articlePageCollection: IGraphQLCollection<ICmsArticlePage>;
}

export declare interface ICmsArticlePage extends ICmsPage {
	headline: string;
	subHeadline: string;
	publishDate: string;
	image: ICmsImage;
	contentAreaCollection: IGraphQLCollection<any>;
	showTrustpilotBanner: boolean;
	showRelatedArticles: boolean;
}

export declare interface ICmsSimpleArticlePageCollection {
	articlePageCollection: IGraphQLCollection<ICmsSimpleArticlePage>;
}

export declare interface ICmsSimpleArticlePage extends ICmsPage {
	image: ICmsImage;
	publishDate: string;
	headline: string;
}
