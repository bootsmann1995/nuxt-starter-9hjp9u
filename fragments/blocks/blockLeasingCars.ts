import gql from "graphql-tag";

export const blockLeasingCars = gql`
	fragment blockLeasingCars on BlockLeasingCars {
		sys {
			id
		}
		nodeName
		leasingCarsCollection(limit: 10) {
			items {
				sys {
					id
				}
				nodeName
				shortDescription
				hightligthedText
			}
		}
	}
`;
