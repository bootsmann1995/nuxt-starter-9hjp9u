import { Document } from "@contentful/rich-text-types";
import { IBlockRouter } from "../components/blocks/blockRouter/blockRouter";
import { IHero } from "../components/blocks/hero/hero";
import { IReferenceBlock } from "../components/blocks/referenceBlock/referenceBlock";

export interface IContentPage {
	hero: IHero;
	introText: Document;
	dynamicContent: IBlockRouter[] | null;
	campaignSlider: IReferenceBlock | null;
}
