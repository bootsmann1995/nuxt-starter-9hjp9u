import gql from "graphql-tag";

export const modal = gql`
	fragment modal on Modal {
		sys {
			id
		}
		typename: __typename
		text
		jotformId
		type
	}
`;
