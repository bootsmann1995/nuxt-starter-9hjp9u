import { ILinkItem, IMediaImage } from "~~/interfaces/global";

export declare interface IMenuItem extends ILinkItem {
	linkSections: ILinkSection[];
	cta: IMenuCta;
}

export declare interface ILinkSection {
	text: "";
	links: ILinkItem[];
}

export declare interface IMenuCta {
	image: IMediaImage;
	text: string;
	url: string;
}
