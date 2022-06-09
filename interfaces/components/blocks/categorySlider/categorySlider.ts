import { ILinkItem, IMediaImage } from "../../../global";

export interface ICategoryItem {
	id: string;
	name: string;
	link: ILinkItem;
	image: IMediaImage;
}

export interface ICategorySlider<T> {
	headline: string;
	categories: T;
}

export interface ICategory {
	categoryName: string;
	items: ICategoryItem[];
}
