import gql from "graphql-tag";

export const blockUspList = gql`
	fragment blockUspList on BlockUspList {
		sys {
			id
		}
		typename: __typename
		nodeName
		headline
		uspList
		image {
			url
			description
		}
		youtubeId
	}
`;
