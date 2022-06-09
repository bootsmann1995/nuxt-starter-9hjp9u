import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { ICmsId } from "../globals";
import { ICmsSimpleLeasingDetailPage } from "../leasingDetailPage";

export declare interface ICmsBlockLeasingCars extends ICmsId {
	leasingCarsCollection: IGraphQLCollection<ICmsSimpleLeasingDetailPage>;
}
