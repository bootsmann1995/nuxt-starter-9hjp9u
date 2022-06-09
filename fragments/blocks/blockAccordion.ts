import gql from "graphql-tag";

export const blockAccordion = gql`
	fragment blockAccordion on BlockAccordion {
		sys {
			id
		}
		typename: __typename
		nodeName
		headline
		accordionItemsCollection(limit: 30) {
			items {
				sys {
					id
				}
				headline
				text {
					json
				}
			}
		}
	}
`;
