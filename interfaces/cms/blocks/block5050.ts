import { ICmsExternalLink, ICmsId, ICmsImage, ICmsInternalLink, ICmsModal, ICmsRTE } from "../globals";

export declare interface ICmsBlock5050 extends ICmsId {
	tagline: string;
	headline: string;
	text: ICmsRTE;
	cta: ICmsInternalLink | ICmsExternalLink | ICmsModal;
	image: ICmsImage;
	youtubeId: string;
	rightOrLeft: "right" | "left";
	design: "simple" | "extended";
}
