import gql from "graphql-tag";

export const blockPromotion = gql`
	fragment blockPromotion on BlockPromotion {
		sys {
			id
		}
		typename: __typename
		nodeName
		image {
			url
			description
		}
		mainHeadline
		headline
		subHeadline
		primaryLink {
			...internalLink
			...externalLink
			...modal
		}
		secondaryLink {
			...internalLink
			...externalLink
			...modal
		}
		leftOrRight
	}
`;
