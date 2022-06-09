import gql from "graphql-tag";
import { type Ref } from "vue";
import * as mapper from "~/utils/mapper";
import { internalLink } from "~~/fragments/Globals/link";
import { ICmsInternalLink, ICmsPage } from "~~/interfaces/cms/globals";
import { IHeader } from "~~/interfaces/components/shared/header/header";
import { ILinkSection, IMenuCta, IMenuItem } from "~~/interfaces/components/shared/header/menu";
import { ITopbarItem } from "~~/interfaces/components/shared/header/topbar";
import { ILinkItem } from "~~/interfaces/global";
import { GetAllPages } from "~~/resources/contentfulHelper";
import { ICmsHeader, ICmsHeaderCollection, ICmsMenuItem } from "../interfaces/cms/header";
import { CMSResource } from "../resources/contentfulClient";

export const useGetHeader = () => {
	const data: Ref<IHeader | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsHeaderCollection>(query);
		if (newData !== null && newData.data.headerCollection !== null) {
			data.value = mapHeader(newData.data.headerCollection.items[0]);
		}
	}

	useAsyncData("getHeader", () => setData());

	return data;

	function mapHeader(cmsHeader: ICmsHeader): IHeader {
		const mappedObject = {
			topbarItems: mapTopBar(cmsHeader),
			menu: mapMenu(cmsHeader.menuCollection?.items),
		} as IHeader;

		return mappedObject;
	}

	function mapTopBar(topBar: ICmsHeader): ITopbarItem[] {
		const topbarItems: ITopbarItem[] = [];
		if (topBar.uspOneText) {
			topbarItems.push({
				id: "1",
				icon: "home",
				text: topBar.uspOneText,
			});
		}
		if (topBar.uspTwoText) {
			topbarItems.push({
				id: "2",
				icon: "tool",
				text: topBar.uspTwoText,
			});
		}
		if (topBar.uspThreeText) {
			topbarItems.push({
				id: "3",
				icon: "trustpilot2",
				text: topBar.uspThreeText,
			});
		}
		if (topBar.uspFourText) {
			topbarItems.push({
				id: "4",
				icon: "return",
				text: topBar.uspFourText,
			});
		}
		return topbarItems;
	}

	function mapMenu(menu: (ICmsMenuItem | ICmsInternalLink)[]): IMenuItem[] {
		const mappedMenu: IMenuItem[] = [];
		menu.forEach((menuItem) => {
			if (menuItem.typename === "InternalLink") {
				const link = mapper.mapLink(menuItem as ICmsInternalLink, pages);
				mappedMenu.push({
					cta: null,
					linkSections: null,
					download: link.download,
					id: link.id,
					target: link.target,
					text: link.text,
					url: link.url,
				});
			}
			if (menuItem.typename === "MenuItem") {
				const typedMenuItem = menuItem as ICmsMenuItem;
				mappedMenu.push({
					cta: mapCta(typedMenuItem),
					linkSections: mapLinkSection(typedMenuItem),
					download: null,
					id: menuItem.sys.id,
					target: null,
					text: typedMenuItem.nodeName,
					url: null,
				});
			}
		});
		return mappedMenu;
	}

	function mapCta(cta: ICmsMenuItem): IMenuCta {
		const link = mapper.mapLink(cta.ctaLink, pages);
		if (link !== null) {
			return {
				image: mapper.mapMediaItem(cta.ctaImage),
				text: link.text,
				url: link.url,
			};
		}

		return null;
	}

	function mapLinkSection(linkSection: ICmsMenuItem): ILinkSection[] {
		const leftLinkSection = {
			text: linkSection.leftColumnHeadline,
			links: linkSection.leftColumnLinksCollection
				? linkSection.leftColumnLinksCollection.items.map<ILinkItem>((link) => mapper.mapLink(link, pages))
				: null,
		} as ILinkSection;

		const rightLinkSection = {
			text: linkSection.rightColumnHeadline,
			links: linkSection.rightColumnLinksCollection
				? linkSection.rightColumnLinksCollection.items.map<ILinkItem>((link) => mapper.mapLink(link, pages))
				: null,
		} as ILinkSection;

		return [leftLinkSection, rightLinkSection];
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String) {
		headerCollection(locale: $locale, preview: $preview, limit: 1) {
			items {
				sys {
					id
				}
				typename: __typename
				uspOneText
				uspTwoText
				uspThreeText
				uspFourText
				menuCollection(limit: 6) {
					items {
						... on MenuItem {
							sys {
								id
							}
							typename: __typename
							nodeName
							leftColumnHeadline
							leftColumnLinksCollection(limit: 7) {
								items {
									...internalLink
								}
							}
							rightColumnHeadline
							rightColumnLinksCollection(limit: 7) {
								items {
									...internalLink
								}
							}
							ctaImage {
								title
								description
								contentType
								size
							}
							ctaLink {
								...internalLink
							}
						}
						...internalLink
					}
				}
			}
		}
	}
	${internalLink}
`;
