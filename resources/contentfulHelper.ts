import gql from "graphql-tag";
import { ICmsAllPageCollection } from "~~/interfaces/cms/allPageCollections";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { CMSResource } from "./contentfulClient";

export async function GetAllPages(cms: CMSResource): Promise<ICmsPage[]> {
	const pages: ICmsPage[] = [];
	const data = await cms.getDataAsync<ICmsAllPageCollection>(query);

	for (const key in data.data) {
		if (data.data != null && Object.prototype.hasOwnProperty.call(data.data, key)) {
			const collection: IGraphQLCollection<ICmsPage> = data.data[key];
			if (
				collection != null &&
				Object.prototype.hasOwnProperty.call(collection, "items") &&
				Array.isArray(collection.items)
			) {
				collection.items
					.filter((item) => item != null && item.nodeName != null)
					.forEach((page) => {
						pages.push(page);
					});
			}
		}
	}

	pages.forEach((page) => {
		switch (page.typename) {
			case "FrontPage": {
				page.path = "/";
				break;
			}
			case "ArticlePage": {
				page.path = "/" + getSlugByType(pages, "ArticleListPage") + page.slug + "/";
				break;
			}
			case "BrandUniversePage": {
				page.path = "/" + getSlugById(pages, page.parent.sys.id) + page.slug + "/";
				break;
			}
			case "DepartmentDetailPage": {
				page.path = "/" + getSlugByType(pages, "DepartmentListViewPage") + page.slug + "/";
				break;
			}
			case "LeasingModelDetailPage": {
				page.path =
					"/" +
					getSlugById(pages, page.parent.parent.sys.id) +
					getSlugById(pages, page.parent.sys.id) +
					page.slug +
					"/";
				break;
			}
			case "ModelDetailPage": {
				page.path =
					"/" +
					getSlugById(pages, page.parent.parent.sys.id) +
					getSlugById(pages, page.parent.sys.id) +
					page.slug +
					"/";
				break;
			}
			default: {
				page.path = "/" + page.slug + "/";
				break;
			}
		}
	});
	return pages;
}

function getSlugByType(pages: ICmsPage[], type: string) {
	return pages.find((p) => p.typename === type).slug + "/";
}

export function getFullPathByType(pages: ICmsPage[], type: string) {
	return pages.find((p) => p.typename === type).path;
}

function getSlugById(pages: ICmsPage[], id: string) {
	return pages.find((p) => p.sys.id === id).slug + "/";
}

const query = gql`
	query ($preview: Boolean, $locale: String, $skip: Int) {
		frontPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
			}
		}
		articlePageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1000) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		articleListPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		brandListViewPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 10) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		brandUniversePageCollection(
			locale: $locale
			preview: $preview
			skip: $skip
			limit: 1000
			where: { parent_exists: true }
		) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
				parent {
					typename: __typename
					nodeName
					sys {
						id
					}
					slug
				}
			}
		}
		contentPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1000) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		departmentListViewPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		departmentDetailPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 400) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		leasingCarListViewPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
		leasingModelDetailPageCollection(
			locale: $locale
			preview: $preview
			skip: $skip
			limit: 1000
			where: { parent_exists: true, parent: { parent_exists: true } }
		) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
				parent {
					typename: __typename
					nodeName
					sys {
						id
					}
					parent {
						typename: __typename
						nodeName
						sys {
							id
						}
					}
				}
			}
		}
		modelDetailPageCollection(
			locale: $locale
			preview: $preview
			skip: $skip
			limit: 1000
			where: { parent_exists: true, parent: { parent_exists: true } }
		) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
				parent {
					typename: __typename
					nodeName
					sys {
						id
					}
					parent {
						typename: __typename
						nodeName
						sys {
							id
						}
					}
				}
			}
		}
		usedCarFilterPageCollection(locale: $locale, preview: $preview, skip: $skip, limit: 1) {
			items {
				typename: __typename
				nodeName
				sys {
					id
				}
				slug
			}
		}
	}
`;
