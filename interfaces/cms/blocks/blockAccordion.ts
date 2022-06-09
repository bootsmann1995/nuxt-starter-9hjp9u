import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { ICmsId, ICmsRTE } from "../globals";

export declare interface ICmsAccordionBlock extends ICmsId {
	headline: string;
	accordionItemsCollection: IGraphQLCollection<ICmsAccordionItem>;
}

export declare interface ICmsAccordionItem extends ICmsId {
	headline: string;
	text: ICmsRTE;
}
