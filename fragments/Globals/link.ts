import gql from "graphql-tag";

export const internalLink = gql`
	fragment internalLink on InternalLink {
		sys {
			id
		}
		typename: __typename
		text
		entry {
			... on FrontPage {
				sys {
					id
				}
				typename: __typename
				nodeName
			}
			... on ArticlePage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on ArticleListPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on BrandListViewPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on BrandUniversePage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on ContentPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on DepartmentListViewPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on DepartmentDetailPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on LeasingCarListViewPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on LeasingModelDetailPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on ModelDetailPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
			... on UsedCarFilterPage {
				sys {
					id
				}
				typename: __typename
				nodeName
				slug
			}
		}
		type
	}
`;

export const externalLink = gql`
	fragment externalLink on ExternalLink {
		sys {
			id
		}
		typename: __typename
		text
		url
		type
	}
`;

export const imageLink = gql`
	fragment imageLink on ImageLink {
		sys {
			id
		}
		typename: __typename
		text
		image {
			url
			description
		}
		link {
			...internalLink
			...externalLink
		}
	}
`;
