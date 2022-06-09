import { IGraphQLCollection } from "../graphQL";
import { ICmsSimpleArticlePage } from "./articlePage";
import {
	IBlockCollection,
	ICmsExternalLink,
	ICmsImage,
	ICmsInternalLink,
	ICmsModal,
	ICmsPage,
	ICmsRTE,
} from "./globals";

export declare interface ICmsContentPageCollection {
	contentPageCollection: IGraphQLCollection<ICmsContentPage>;
}

export declare interface ICmsContentPage extends ICmsPage {
	image: ICmsImage;
	heroBoxHeadline: string;
	heroBoxSubHeadline: string;
	heroBoxPrimaryLink: ICmsExternalLink | ICmsInternalLink | ICmsModal;
	heroBoxSecondaryLink: ICmsExternalLink | ICmsInternalLink | ICmsModal;
	introText: ICmsRTE;
	contentAreaCollection: IBlockCollection;
	relatedArticlesAreaHeadline: string;
	relatedArticlesAreaCollection: IGraphQLCollection<ICmsSimpleArticlePage>;
	showTrustpilotBanner: boolean;
}
