import gql from "graphql-tag";

export const blockNewCars = gql`
	fragment blockNewCars on BlockNewCars {
		nodeName
		typename: __typename
		carsCollection(limit: 10) {
			items {
				sys {
					id
				}
				nodeName
				pimId
				shortDescription
				highlightedTag
			}
		}
	}
`;
