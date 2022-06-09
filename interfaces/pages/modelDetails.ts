import { IVideoPlayer } from "../components/shared/videoPlayer/videoPlayer";
import { ILinkItem, IMediaImage } from "../global";

export declare interface IModelPage {
	backUrl: ILinkItem;
	imageSlider: IMedia[];
	header: string;
	tagline: string;
	finance: IFinance;
	contactInfo: IContactInformation[];
	credentials: ICredentials[];
	equipment: ICarEquipment;
}

export declare interface IFinance {
	price: number;
	link: ILinkItem;
	jotform: string;
}

export declare interface IContactInformation {
	id: string;
	icon: string;
	value: string;
	text: string;
}

export declare interface ICredentials {
	text: string;
}

export declare interface IAdvantages {
	header: string;
	text: string[];
	video: IVideoPlayer | null;
	image: IMediaImage | null;
}

export declare interface ICarEquipment {
	header: string;
	tagline: string;
	equipmentCollection: IEquipment[];
}

export declare interface IEquipment {
	headline: string;
	equipment: string[];
}

export declare interface IMedia {
	contentType: "image" | "video";
	image: IMediaImage;
	video: IVideoPlayer;
}
