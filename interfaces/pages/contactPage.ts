import { IBlockRouter } from "../components/blocks/blockRouter/blockRouter";
import { IPromoBox } from "../components/blocks/promoBox/promoBox";
import { IPromoSlider } from "../components/blocks/promoSlider/promoSlider";
import { IAddress, ILinkItem, IMediaImage } from "../global";

export interface IContactPage {
	header: string;
	teaser: string;
	departments: {
		departmentHeader: string;
		department: IDepartment[];
	}[];
	// rte
	subTeaser: string;
	dynamicContent: IBlockRouter<IPromoBox | IPromoSlider> | null;
}

export declare interface IDepartment {
	link: ILinkItem;
	image: IMediaImage;
	openingHours: {
		monday: { value: string };
		tuesday: { value: string };
		wednesday: { value: string };
		thursday: { value: string };
		friday: { value: string };
		saturday: { value: string };
		sunday: { value: string };
	};
	city: string;
	address: IAddress;
	phone: string;
	cars: string[];
}
