import { ILinkItem, IMediaImage } from "../../../global";

export declare interface IArticle {
	image: IMediaImage;
	tagline: string;
	headline: string;
	link: ILinkItem;
}

export declare interface IReferenceBlock {
	header: string;
	link: ILinkItem;
	articleCollection: IArticle[];
}
