import gql from "graphql-tag";

export const block5050Highlight = gql`
	fragment block5050Highlight on Block5050Highlight {
		sys {
			id
		}
		typename: __typename
		nodeName
		highlightedText
		text {
			json
		}
		cta {
			...internalLink
			...externalLink
			...modal
		}
	}
`;
