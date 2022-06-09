import { IBlockRouter } from "../components/blocks/blockRouter/blockRouter";
import { IImageLinkListBlock } from "../components/blocks/imageLinkList/imageLinkList";

export declare interface IBrandListViewPage {
	headline: string;
	teaser: string;
	brands: IImageLinkListBlock;
	dynamicContent: IBlockRouter[];
}
