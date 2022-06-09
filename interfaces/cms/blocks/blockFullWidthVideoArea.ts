import { ICmsId, ICmsImage } from "../globals";

export declare interface ICmsBlockFullWidthVideoArea extends ICmsId {
	image: ICmsImage;
	youtubeId: string;
	distance: "100px" | "48px";
}
