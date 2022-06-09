import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { ICmsId, ICmsImageLink } from "../globals";

export declare interface ICmsBlockLogoBanner extends ICmsId {
	logoLinksCollection: IGraphQLCollection<ICmsImageLink>;
}
