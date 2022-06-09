import { ILinkItem, IMediaImage } from "~~/interfaces/global";

export interface IImageLinkListBlock {
	imageLinks: IImageLink[];
	typename: string;
}

export interface IImageLink {
	text: string;
	link: ILinkItem;
	image: IMediaImage;
}
