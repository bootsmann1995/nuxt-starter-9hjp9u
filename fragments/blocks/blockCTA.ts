import gql from "graphql-tag";

export const blockCta = gql`
	fragment blockCta on BlockCta {
		sys {
			id
		}
		typename: __typename
		nodeName
		headline
		subHeadline
		cta {
			...internalLink
			...externalLink
			...modal
		}
	}
`;
