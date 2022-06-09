import gql from "graphql-tag";
import { type Ref } from "vue";
import * as mapper from "~/utils/mapper";
import { externalLink, internalLink } from "~~/fragments/Globals/link";
import { ICmsFooter, ICmsFooterCollection } from "~~/interfaces/cms/footer";
import { ICmsPage } from "~~/interfaces/cms/globals";
import {
	IFooter,
	IFooterBanner,
	IFooterContact,
	IFooterContactLink,
	ITrustpilot,
} from "~~/interfaces/components/shared/footer/footer";
import { ILinkList } from "~~/interfaces/global";
import { CMSResource } from "~~/resources/contentfulClient";
import { GetAllPages } from "~~/resources/contentfulHelper";

export const useGetFooter = () => {
	const data: Ref<IFooter | null> = ref(null);
	const config = useRuntimeConfig();
	const cms = new CMSResource(config);
	let pages: ICmsPage[] = [];

	async function setData() {
		pages = await GetAllPages(cms);
		const newData = await cms.getDataAsync<ICmsFooterCollection>(query);
		if (newData !== null && newData.data.footerCollection !== null) {
			data.value = mapFooter(newData.data.footerCollection.items[0]);
		}
	}

	useAsyncData("getFooter", () => setData());

	return data;

	function mapFooter(footer: ICmsFooter): IFooter {
		const mappedObject = {
			blueBox: mapBlueBox(footer),
			sections: mapLinkList(footer),
			bottomBanner: mapBanner(footer),
			trustpilot: mapTrustPilot(),
		} as IFooter;

		return mappedObject;
	}

	function mapTrustPilot(): ITrustpilot {
		return {
			headline: "Det siger vores kunder om os",
			enableBanner: true,
			value: "Trustpilot banner",
		};
	}

	function mapBlueBox(footer: ICmsFooter): IFooterContact {
		const obj: IFooterContact = {
			headline: footer.blueBoxHeadline,
			subHeadline: footer.blueBoxSubHeadline,
			links: mapContactLinks(footer),
		};

		return obj;
	}

	function mapBanner(footer: ICmsFooter): IFooterBanner {
		return {
			disclaimer: footer.disclaimer,
			soMeLinks: footer.soMeLinksCollection.items.map((link) => mapper.mapLink(link, pages)),
		};
	}

	function mapContactLinks(footer: ICmsFooter): IFooterContactLink[] {
		const contactLinks: IFooterContactLink[] = [];
		if (footer.blueBoxInfo) {
			contactLinks.push({
				type: "info",
				text: footer.blueBoxInfoHeadline,
				value: footer.blueBoxInfo,
				headline: footer.blueBoxInfoHeadline,
			});
		}
		if (footer.blueBoxPhone) {
			contactLinks.push({
				type: "phone",
				text: footer.blueBoxPhoneHeadline,
				value: footer.blueBoxPhone,
				headline: footer.blueBoxPhoneHeadline,
			});
		}
		if (footer.blueBoxChat) {
			contactLinks.push({
				type: "chat",
				text: footer.blueBoxChatHeadline,
				value: footer.blueBoxChat,
				headline: footer.blueBoxChatHeadline,
			});
		}
		if (footer.blueBoxEmail) {
			contactLinks.push({
				type: "mail",
				text: footer.blueBoxEmailHeadline,
				value: footer.blueBoxEmail,
				headline: footer.blueBoxEmailHeadline,
			});
		}

		return contactLinks;
	}

	function mapLinkList(footer: ICmsFooter): ILinkList[] {
		const linkList: ILinkList[] = [];
		if (footer.centerLinksCollection && footer.centerLinksCollection.items.length > 0) {
			linkList.push(mapper.mapLinkList(footer.centerHeadline, footer.centerLinksCollection.items, pages));
		}

		if (footer.columnOneLinksCollection && footer.columnOneLinksCollection.items.length > 0) {
			linkList.push(mapper.mapLinkList(footer.columnOneHeadline, footer.columnOneLinksCollection.items, pages));
		}
		if (footer.columnTwoLinksCollection && footer.columnTwoLinksCollection.items.length > 0) {
			linkList.push(mapper.mapLinkList(footer.columnTwoHeadline, footer.columnTwoLinksCollection.items, pages));
		}
		if (footer.columnThreeLinksCollection && footer.columnThreeLinksCollection.items.length > 0) {
			linkList.push(
				mapper.mapLinkList(footer.columnThreeHeadline, footer.columnThreeLinksCollection.items, pages)
			);
		}
		if (footer.columnFourLinksCollection && footer.columnFourLinksCollection.items.length > 0) {
			linkList.push(mapper.mapLinkList(footer.columnFourHeadline, footer.columnFourLinksCollection.items, pages));
		}
		if (footer.columnFiveLinksCollection && footer.columnFiveLinksCollection.items.length > 0) {
			linkList.push(mapper.mapLinkList(footer.columnFiveHeadline, footer.columnFiveLinksCollection.items, pages));
		}
		return linkList;
	}
};

const query = gql`
	query ($preview: Boolean, $locale: String) {
		footerCollection(locale: $locale, preview: $preview, limit: 1) {
			items {
				sys {
					id
				}
				nodeName
				blueBoxHeadline
				blueBoxSubHeadline
				blueBoxInfoHeadline
				blueBoxInfo
				blueBoxPhoneHeadline
				blueBoxPhone
				blueBoxChatHeadline
				blueBoxChat
				blueBoxEmailHeadline
				blueBoxEmail
				centerHeadline
				centerLinksCollection(limit: 7) {
					items {
						...externalLink
						...internalLink
					}
				}
				columnOneHeadline
				columnOneLinksCollection(limit: 4) {
					items {
						...externalLink
						...internalLink
					}
				}
				columnTwoHeadline
				columnTwoLinksCollection(limit: 4) {
					items {
						...externalLink
						...internalLink
					}
				}
				columnThreeHeadline
				columnThreeLinksCollection(limit: 4) {
					items {
						...externalLink
						...internalLink
					}
				}
				columnFourHeadline
				columnFourLinksCollection(limit: 4) {
					items {
						...externalLink
						...internalLink
					}
				}
				columnFiveHeadline
				columnFiveLinksCollection(limit: 4) {
					items {
						...externalLink
						...internalLink
					}
				}
				jotform
				disclaimer
				soMeLinksCollection(limit: 4) {
					items {
						...externalLink
					}
				}
			}
		}
	}
	${externalLink}
	${internalLink}
`;
