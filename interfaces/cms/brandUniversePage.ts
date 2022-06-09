import { IGraphQLCollection } from "../graphQL";
import { ICmsSimpleArticlePage } from "./articlePage";
import { ICmsImage, ICmsPage } from "./globals";

export declare interface ICmsBrandUniversePageCollection {
	brandUniversePageCollection: IGraphQLCollection<ICmsBrandUniversePage>;
}

export declare interface ICmsBrandUniversePage extends ICmsPage {
	logo: ICmsImage;
	headline: string;
	subHeadline: string;
	contentAreaCollection: IGraphQLCollection<any>;
	relatedArticlesHeadline: string;
	relatedArticlesCollection: IGraphQLCollection<ICmsSimpleArticlePage>;
	showTrustpilotBanner: boolean;
}

export declare interface ICmsSimpleBrandUniversePage extends ICmsPage {
	logo: ICmsImage;
}
