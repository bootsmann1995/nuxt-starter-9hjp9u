import { Document } from "@contentful/rich-text-types";

export interface IAccordionItem {
	title: string;
	text: Document; // should be configured as Document from @contentful/rich-text-types
	id: string | number;
}
