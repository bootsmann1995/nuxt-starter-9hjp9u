import { ILinkItem, IMediaImage } from "../../../global";

export interface IPromoSlider {
	header: string;
	link: ILinkItem;
	items: IPromoArticle[];
}

export interface IPromoArticle {
	headline: string;
	link: ILinkItem;
	image: IMediaImage;
}
