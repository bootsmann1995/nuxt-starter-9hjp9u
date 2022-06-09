import { IBlockRouter } from "../components/blocks/blockRouter/blockRouter";
import { IReferenceBlock } from "../components/blocks/referenceBlock/referenceBlock";
import { ILinkItem, IMediaImage } from "../global";

export interface IBrandPage {
	backUrl: string;
	headline: string;
	subHeadline: string;
	referenceBlock: IReferenceBlock;
	dynamicContent: IBlockRouter[];
}

export interface ICar {
	link: ILinkItem;
	tag: string;
	image: IMediaImage;
	headline: string;
	description: string;
	price?: string;
	monthlyPayment?: string;
	oneTimePayment?: string;
}
