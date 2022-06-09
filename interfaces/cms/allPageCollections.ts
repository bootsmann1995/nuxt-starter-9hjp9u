import { IGraphQLCollection } from "../graphQL";
import { ICmsPage } from "./globals";

export declare interface ICmsAllPageCollection {
	articlePageCollection: IGraphQLCollection<ICmsPage>;
	articleListPageCollection: IGraphQLCollection<ICmsPage>;
	brandListViewPageCollection: IGraphQLCollection<ICmsPage>;
	brandUniversePageCollection: IGraphQLCollection<ICmsPage>;
	contentPageCollection: IGraphQLCollection<ICmsPage>;
	departmentListViewPageCollection: IGraphQLCollection<ICmsPage>;
	departmentDetailPageCollection: IGraphQLCollection<ICmsPage>;
	frontPageCollection: IGraphQLCollection<ICmsPage>;
	leasingCarListViewPageCollection: IGraphQLCollection<ICmsPage>;
	leasingModelDetailPageCollection: IGraphQLCollection<ICmsPage>;
	modelDetailPageCollection: IGraphQLCollection<ICmsPage>;
	usedCarFilterPageCollection: IGraphQLCollection<ICmsPage>;
}
