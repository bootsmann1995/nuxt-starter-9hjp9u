import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { ICmsExternalLink, ICmsId, ICmsImage, ICmsInternalLink, ICmsPage } from "../globals";

export declare interface ICmsBlockPromoSlider extends ICmsId {
	nodeName: string;
	headline: string;
	link: ICmsInternalLink | ICmsExternalLink;
	promotionsCollection: IGraphQLCollection<ICmsPromotion>;
}

export declare interface ICmsPromotion extends ICmsPage {
	headline: string;
	image: ICmsImage;
}
