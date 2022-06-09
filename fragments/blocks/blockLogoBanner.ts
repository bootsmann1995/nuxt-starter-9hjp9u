import gql from "graphql-tag";

export const blockLogoBanner = gql`
	fragment blockLogoBanner on BlockLogoBanner {
		sys {
			id
		}
		typename: __typename
		nodeName
		logoLinksCollection(limit: 50) {
			items {
				...imageLink
			}
		}
	}
`;
