import gql from "graphql-tag";

export const blockPromoSlider = gql`
	fragment blockPromoSlider on BlockPromoSlider {
		sys {
			id
		}
		typename: __typename
		nodeName
		headline
		link {
			...internalLink
			...externalLink
		}
		promotionsCollection(limit: 20) {
			items {
				... on ArticlePage {
					sys {
						id
					}
					nodeName
					headline
					image {
						title
						description
						contentType
						url
					}
				}
				... on ContentPage {
					sys {
						id
					}
					nodeName
					headline
					image {
						title
						description
						contentType
						url
					}
				}
			}
		}
	}
`;
