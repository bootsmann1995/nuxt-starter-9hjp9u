import { IGraphQLCollection } from "../graphQL";
import { ICmsExternalLink, ICmsId, ICmsInternalLink } from "./globals";

export interface ICmsFooterCollection {
	footerCollection: IGraphQLCollection<ICmsFooter>;
}
export interface ICmsFooter extends ICmsId {
	internalName: string;
	nodeName: string;
	blueBoxHeadline: string;
	blueBoxSubHeadline: string;
	blueBoxInfoHeadline: string;
	blueBoxInfo: string;
	blueBoxPhoneHeadline: string;
	blueBoxPhone: string;
	blueBoxChatHeadline: string;
	blueBoxChat: string;
	blueBoxEmailHeadline: string;
	blueBoxEmail: string;
	centerHeadline: string;
	centerLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
	columnOneHeadline: string;
	columnOneLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
	columnTwoHeadline: string;
	columnTwoLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
	columnThreeHeadline: string;
	columnThreeLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
	columnFourHeadline: string;
	columnFourLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
	columnFiveHeadline: string;
	columnFiveLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
	jotform: string;
	disclaimer: string;
	soMeLinksCollection: IGraphQLCollection<ICmsInternalLink | ICmsExternalLink>;
}
