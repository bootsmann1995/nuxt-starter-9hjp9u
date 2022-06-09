import { IButton, IMediaImage } from "~~/interfaces/global";

export interface IPromoBox {
	image: IMediaImage;
	tag: string;
	headline: string;
	text: string;
	primaryLink: IButton;
	secondaryLink: IButton;
	reverse: boolean;
}
