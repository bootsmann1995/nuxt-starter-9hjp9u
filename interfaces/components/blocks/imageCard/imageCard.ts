import { ILinkItem, IMediaImage } from "~~/interfaces/global";

export interface IImageCard {
	image: IMediaImage;
	date: string;
	link: ILinkItem;
	tag: string;
	headline: string;
}
