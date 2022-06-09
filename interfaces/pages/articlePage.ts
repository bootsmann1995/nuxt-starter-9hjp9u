import { IBlockRouter } from "../components/blocks/blockRouter/blockRouter";
import { IReferenceBlock } from "../components/blocks/referenceBlock/referenceBlock";
import { IMediaImage } from "../global";

export interface IArticlePage {
	backUrl: string;
	date: string;
	subject: string;
	headline: string;
	subHeadline: string;
	img: IMediaImage;
	dynamicContent: IBlockRouter[];
	referenceBlock: IReferenceBlock;
	showReferenceBlock: boolean;
}
