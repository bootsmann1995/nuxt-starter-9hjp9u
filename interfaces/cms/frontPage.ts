import { IGraphQLCollection } from "../graphQL";
import { ICmsSimpleArticlePage } from "./articlePage";
import { ICmsExternalLink, ICmsImage, ICmsImageLink, ICmsInternalLink, ICmsPage, ICmsRTE } from "./globals";

export declare interface ICmsFrontPageCollection {
	frontPageCollection: IGraphQLCollection<ICmsFrontPage>;
}

export declare interface ICmsFrontPage extends ICmsPage {
	image: ICmsImage;
	promoMainHeadline: string;
	promoHeadline: string;
	promoSubHeadline: string;
	promoPrimaryLink: ICmsInternalLink | ICmsExternalLink;
	promoSecondaryLink: ICmsInternalLink | ICmsExternalLink;
	richHeadline: ICmsRTE;
	usedVehicleAreaHeadline: string;
	usedVehicleAreaImageSliderTypeCollection: IGraphQLCollection<ICmsImageLink>;
	usedVehicleAreaImageSliderBrandCollection: IGraphQLCollection<ICmsImageLink>;
	newVehicleAreaHeadline: string;
	newVehicleAreaImageSliderCollection: IGraphQLCollection<ICmsImageLink>;
	contentAreaCollection: IGraphQLCollection<any>;
	newArticlesAreaHeadline: string;
	newArticlesAreaLink: ICmsInternalLink;
	newArticlesAreaCollection: IGraphQLCollection<ICmsSimpleArticlePage>;
}
