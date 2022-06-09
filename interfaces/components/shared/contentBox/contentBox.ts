import { Document } from "@contentful/rich-text-types";
import { IButton } from "~~/interfaces/global";

export interface IContentBox {
	tag: string;
	headline: string;
	text: Document;
	primaryLink?: IButton;
}
