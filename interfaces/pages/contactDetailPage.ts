import { IHero } from "../components/blocks/hero/hero";
import { IImageLink } from "../components/blocks/imageLinkList/imageLinkList";
import { IAddress, ILinkItem, IMediaImage } from "../global";

export interface IContactDetailPage {
	backButton: ILinkItem;
	hero: IHero;
	carService: ICarService[];
	header: string;
	subHeader: string;
	contactSection: IContactSection;
	contactDepartments: IContactDepartment[];
}

export interface ICarService {
	headline: string;
	cars: IImageLink[];
}

export interface IContactSection {
	address: IAddress;
	direction: ILinkItem;
	contactInformation: ILinkItem[];
	booking: {
		headline: string;
		link: ILinkItem;
	};
	employeesCta: {
		headline: string;
		department: {
			name: string;
			id: string;
		}[];
	};
}

export interface IContactDepartment {
	id: string;
	headline: string;
	linkCollection: {
		mail: ILinkItem;
		phone: ILinkItem;
		directions: ILinkItem;
	};
	contactPerson: IContactPerson[];
}

export interface IContactPerson {
	image: IMediaImage;
	tagline: string;
	name: string;
	phone: ILinkItem;
	mail: ILinkItem;
}
