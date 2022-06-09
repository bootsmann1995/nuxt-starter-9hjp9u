import { ILinkItem, ILinkList } from "../../../global";

export declare interface IFooter {
	trustpilot: ITrustpilot;
	blueBox: IFooterContact;
	sections: ILinkList[];
	bottomBanner: IFooterBanner;
}

export declare interface IFooterContact {
	headline: string;
	subHeadline: string;
	links: IFooterContactLink[];
}

export declare interface ITrustpilot {
	headline: string;
	enableBanner: boolean;
	value: string;
}

export declare interface IFooterLinkArea {
	legalLinks: ILinkList;
	linkList: ILinkList[];
	jotForm: string;
}

export declare interface IFooterBanner {
	disclaimer: string;
	soMeLinks: ILinkItem[];
}

export declare interface IFooterContactLink {
	type: string;
	headline: string;
	text: string;
	value: string;
}

export declare interface IFooterTrustpilot {
	headline: string;
	enableBanner: boolean;
	value: string;
}
