import { IButton } from "~~/interfaces/global";

export interface IFocusBox {
	tag?: string;
	headline: string;
	text: string;
	primaryLink: IButton;
	secondaryLink: IButton;
}
