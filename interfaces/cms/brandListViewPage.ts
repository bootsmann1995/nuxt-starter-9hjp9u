import { IGraphQLCollection } from "../graphQL";
import { ICmsSimpleBrandUniversePage } from "./brandUniversePage";
import { ICmsPage } from "./globals";

export declare interface ICmsBrandListViewPageCollection {
	brandListViewPageCollection: IGraphQLCollection<ICmsBrandListViewPage>;
}

export declare interface ICmsBrandListViewPage extends ICmsPage {
	headline: string;
	subHeadline: string;
	brandsCollection: IGraphQLCollection<ICmsSimpleBrandUniversePage>;
	contentAreaCollection: IGraphQLCollection<any>;
}
