import { ICmsSimpleArticlePage } from "~~/interfaces/cms/articlePage";
import { ICmsExternalLink, ICmsImage, ICmsInternalLink, ICmsModal, ICmsPage } from "~~/interfaces/cms/globals";
import { IArticle } from "~~/interfaces/components/blocks/referenceBlock/referenceBlock";
import { IButton, ILinkItem, ILinkList, ILinkModal, ILinkMultiItem, IMediaImage } from "~~/interfaces/global";

export function getUrl(id: string, pages: ICmsPage[]) {
	const page = pages.filter((page) => page.sys.id == id)[0];
	if (page) {
		const url = page.path;
		return url;
	}
	return null;
}

export function mapLink(link: ICmsInternalLink | ICmsExternalLink, pages: ICmsPage[]): ILinkItem {
	if (link) {
		if (link.typename === "InternalLink") {
			return mapInternalLink(link as ICmsInternalLink, pages);
		}
		if (link.typename === "ExternalLink") {
			return mapExternalLink(link as ICmsExternalLink);
		}
	}

	return null;
}

export function getReferenceLink(id: string, pages: ICmsPage[]): ILinkItem {
	return {
		download: false,
		id: id,
		target: "_self",
		text: "",
		url: getUrl(id, pages),
	};
}

export function mapInternalLink(link: ICmsInternalLink, pages: ICmsPage[]): ILinkItem {
	if (link) {
		const obj = {
			id: link.entry.sys.id,
			text: link.text,
			url: link.entry != null && Object.keys(link.entry).length !== 0 ? getUrl(link.entry.sys.id, pages) : null,
			target: "_self",
			download: false,
		} as ILinkItem;
		return obj;
	}
	return null;
}

export function mapExternalLink(link: ICmsExternalLink): ILinkItem {
	if (link) {
		return {
			id: link.sys.id,
			text: link.text,
			url: link.url,
			target: link.openInNewWindow ? "_blank" : "_self",
			download: false,
		};
	}
	return null;
}

export function mapLinkList(
	text: string,
	links: (ICmsInternalLink | ICmsExternalLink)[],
	pages: ICmsPage[]
): ILinkList {
	if (links.length > 0) {
		return {
			text: text,
			links: links.map((link) => mapLink(link, pages)),
		};
	}
}

export function mapMediaItem(image: ICmsImage): IMediaImage {
	if (image && image !== null) {
		return {
			alt: image.description === null ? "" : image.description,
			url: image.url,
		};
	}
	return null;
}

export function mass(link: ICmsExternalLink): ILinkItem {
	if (link) {
		return {
			id: link.sys.id,
			text: link.text,
			url: link.url,
			target: link.openInNewWindow ? "_blank" : "_self",
			download: false,
		};
	}
	return null;
}

export function mapCtaBtn(btn: ICmsInternalLink | ICmsExternalLink | ICmsModal, pages: ICmsPage[]): IButton {
	if (btn === null) {
		return null;
	}
	const mappedbtn: IButton = {
		id: btn.sys.id,
		ref: null,
		type: btn.type,
	};
	if (btn.typename === "InternalLink" || btn.typename === "ExternalLink") {
		mappedbtn.ref = mapLinkMultiItem(btn as ICmsInternalLink | ICmsExternalLink, pages);
	}
	if (btn.typename === "Modal") {
		mappedbtn.ref = mapModal(btn as ICmsModal);
	}

	return mappedbtn;
}

export function mapArticle(article: ICmsSimpleArticlePage, pages: ICmsPage[]): IArticle {
	const obj = {
		headline: article.headline,
		tagline: null,
		image: mapMediaItem(article.image),
		link: getReferenceLink(article.sys.id, pages),
	};

	if (article.publishDate) {
		const date = new Date(article.publishDate);
		obj.tagline = formatDate(date);
	}

	return obj;
}

function padTo2Digits(num: number) {
	return num.toString().padStart(2, "0");
}

export function formatDate(date: Date): string {
	return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(".");
}

function mapLinkMultiItem(btn: ICmsInternalLink | ICmsExternalLink, pages): ILinkMultiItem {
	if (btn.typename === "InternalLink") {
		return mapInternalLink(btn as ICmsInternalLink, pages);
	}
	if (btn.typename === "ExternalLink") {
		return mapExternalLink(btn as ICmsExternalLink);
	}

	return null;
}

function mapModal(btn: ICmsModal): ILinkModal {
	return {
		jotformId: btn.jotformId,
		text: btn.text,
	};
}
