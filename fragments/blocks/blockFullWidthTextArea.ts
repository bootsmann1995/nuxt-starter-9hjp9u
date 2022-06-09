import gql from "graphql-tag";

export const blockFullWidthTextArea = gql`
	fragment blockFullWidthTextArea on BlockFullWidthTextArea {
		sys {
			id
		}
		typename: __typename
		nodeName
		text {
			json
		}
	}
`;
