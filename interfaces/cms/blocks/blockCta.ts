import { ICmsExternalLink, ICmsId, ICmsInternalLink, ICmsModal } from "../globals";

export declare interface ICmsBlockCta extends ICmsId {
	headline: string;
	subHeadline: string;
	cta: ICmsInternalLink | ICmsExternalLink | ICmsModal;
}
