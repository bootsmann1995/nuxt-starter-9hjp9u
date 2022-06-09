import gql from "graphql-tag";

export const block5050 = gql`
	fragment block5050 on Block5050 {
		sys {
			id
		}
		typename: __typename
		nodeName
		tagline
		headline
		text {
			json
		}
		cta {
			...internalLink
			...externalLink
			...modal
		}
		image {
			url
			description
		}
		youtubeId
		leftOrRight
		design
	}
`;
