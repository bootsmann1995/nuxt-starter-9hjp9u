import { Document } from "@contentful/rich-text-types";
import { IButton } from "~~/interfaces/global";

export interface IHighlighBlock {
	highlightContent: string;
	detailedContent: {
		description: Document;
		ctaLink: IButton | null;
	};
	typename: string;
}
