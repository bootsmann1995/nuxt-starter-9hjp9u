import { Document } from "@contentful/rich-text-types";
import { btnType } from "../global";
import { IGraphQLCollection } from "../graphQL";
import { ICmsBlock5050 } from "./blocks/block5050";
import { ICmsBlock5050Highlight } from "./blocks/block5050Highlight";
import { ICmsAccordionBlock } from "./blocks/blockAccordion";
import { ICmsBlockCta } from "./blocks/blockCta";
import { ICmsBlockFullWidthTextArea } from "./blocks/blockFullWidthTextArea";
import { ICmsBlockFullWidthVideoArea } from "./blocks/blockFullWidthVideoArea";
import { ICmsBlockLogoBanner } from "./blocks/blockLogoBanner";
import { ICmsBlockPromoSlider } from "./blocks/blockPromoSlider";
import { ICmsBlockPromotion } from "./blocks/blockPromotion";
import { ICmsblockUspList } from "./blocks/blockUspList";

export interface ICmsLink extends ICmsId {
	internalName: string;
	title: string;
	externalLink: string;
	internalLink: ICmsPage;
	openInNewWindow: boolean;
}

export interface ICmsPage extends ICmsId {
	typename:
		| "ArticleListPage"
		| "ArticlePage"
		| "BrandListViewPage"
		| "BrandUniversePage"
		| "ContentPage"
		| "DepartmentDetailPage"
		| "DepartmentListViewPage"
		| "FrontPage"
		| "LeasingModelDetailPage"
		| "LeasingCarListViewPage"
		| "ModelDetailPage"
		| "UsedCarFilterPage"
		| "ApiUsedCar";
	nodeName: string;
	slug: string;
	seoMetaTitle?: string;
	seoMetaDescription?: string;
	parent?: ICmsPage;
	path: string;
	contentfulMetadata?: ICmsMetaData;
}

export interface ICmsMetaData {
	tags: ICmsTags[];
}

export interface ICmsTags {
	id: string;
	name: string;
}

export interface ICmsImage {
	title: string;
	description: string;
	contentType: string;
	url: string;
}

export interface ICmsId {
	typename: string;
	sys: { id: string; firstPublishedAt?: string };
}

export interface IRichTextEditor {
	json: Document;
}

export interface Sys {
	id: string;
	type: string;
	linkType: string;
}

export interface Target {
	sys: Sys;
}

export interface Data {
	target: Target;
	uri: string;
}

export interface INode {
	data: Data;
	content: unknown[];
	nodeType: string;
}

export interface ICmsRTE {
	json: Document;
}

export interface ICmsImageLink extends ICmsId {
	text: string;
	image: ICmsImage;
	link: ICmsInternalLink | ICmsExternalLink;
}

export interface ICmsInternalLink extends ICmsId {
	text: string;
	entry: ICmsPage;
	type: btnType;
	query: string;
}

export interface ICmsExternalLink extends ICmsId {
	text: string;
	url: string;
	type: btnType;
	openInNewWindow: boolean;
}

export interface ICmsModal extends ICmsId {
	text: string;
	jotformId: string;
	type: btnType;
}

export type IBlockCollection = IGraphQLCollection<
	| ICmsBlock5050
	| ICmsBlock5050Highlight
	| ICmsblockUspList
	| ICmsBlockCta
	| ICmsBlockFullWidthTextArea
	| ICmsBlockFullWidthVideoArea
	| ICmsBlockLogoBanner
	| ICmsBlockPromoSlider
	| ICmsBlockPromotion
	| ICmsAccordionBlock
>;
