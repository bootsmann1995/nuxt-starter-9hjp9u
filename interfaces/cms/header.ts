import { IGraphQLCollection } from "../graphQL";
import { ICmsId, ICmsImage, ICmsInternalLink } from "./globals";

export interface ICmsHeaderCollection {
	headerCollection: IGraphQLCollection<ICmsHeader>;
}
export interface ICmsHeader extends ICmsId {
	internalName: string;
	menuCollection: IGraphQLCollection<ICmsMenuItem | ICmsInternalLink>;
	uspOneText: string;
	uspTwoText: string;
	uspThreeText: string;
	uspFourText: string;
}

export interface ICmsMenuItem extends ICmsId {
	nodeName: string;
	internalName: string;
	leftColumnHeadline: string;
	leftColumnLinksCollection: IGraphQLCollection<ICmsInternalLink>;
	rightColumnHeadline: string;
	rightColumnLinksCollection: IGraphQLCollection<ICmsInternalLink>;
	ctaImage: ICmsImage;
	ctaLink: ICmsInternalLink;
}
