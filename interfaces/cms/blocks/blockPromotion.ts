import { ICmsExternalLink, ICmsId, ICmsImage, ICmsInternalLink, ICmsModal } from "../globals";

export declare interface ICmsBlockPromotion extends ICmsId {
	image: ICmsImage;
	mainHeadline: string;
	headline: string;
	subHeadline: string;
	primaryLink: ICmsInternalLink | ICmsExternalLink | ICmsModal;
	secondaryLink: ICmsInternalLink | ICmsExternalLink | ICmsModal;
	rightOrLeft: "right" | "left";
}
