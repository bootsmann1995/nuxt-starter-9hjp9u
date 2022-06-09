export interface ILinkItem {
	id: string;
	text: string;
	url: string;
	target: "_blank" | "_self" | "_parent" | "_top" | "framename";
	download: boolean;
}

export interface IButton {
	id: string;
	type: btnType;
	ref?: ILinkMultiItem;
}

export type ILinkMultiItem = {
	text: string;
	url?: string;
	target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
	download?: boolean;
	jotformId?: string;
};

export interface ILinkList {
	text: string;
	links: ILinkItem[];
}

export interface IMediaImage {
	url: string;
	alt: string;
	description?: string;
}
export interface IMediaVideo {
	id: string;
}

export type btnType = "primary" | "secondary" | "simple";

export declare interface IAddress {
	street: string;
	postCode: number;
	city: string;
}

export declare interface ITag {
	id: string;
	name: string;
}
