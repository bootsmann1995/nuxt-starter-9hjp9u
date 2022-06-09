import { ICmsRTE } from "../cms/globals";
import { IBlockRouter } from "../components/blocks/blockRouter/blockRouter";
import { ICategory, ICategorySlider } from "../components/blocks/categorySlider/categorySlider";
import { IHero } from "../components/blocks/hero/hero";
import { IReferenceBlock } from "../components/blocks/referenceBlock/referenceBlock";

export interface IFrontPage {
	hero: IHero;
	headline: ICmsRTE;
	categorySliders: ICategorySlider<ICategory[]>[];
	dynamicContent: IBlockRouter[];
	campaignSlider: IReferenceBlock;
}
