import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { ICmsId } from "../globals";
import { ICmsSimpleModelDetailPage } from "../modelDetailPage";

export declare interface ICmsBlockNewCars extends ICmsId {
	carsCollection: IGraphQLCollection<ICmsSimpleModelDetailPage>;
}
