import { ICmsExternalLink, ICmsId, ICmsInternalLink, ICmsModal, ICmsRTE } from "../globals";

export declare interface ICmsBlock5050Highlight extends ICmsId {
	highlightedText: string;
	text: ICmsRTE;
	cta: ICmsInternalLink | ICmsExternalLink | ICmsModal;
}
