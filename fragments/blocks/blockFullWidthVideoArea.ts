//nodename is blockFullWidthVideoArea hard to change now.
import gql from "graphql-tag";

export const blockFullWidthVideoArea = gql`
	fragment blockFullWidthVideoArea on BlockFullWidthVideoArea {
		sys {
			id
		}
		typename: __typename
		nodeName
		image {
			url
			description
		}
		youtubeId
		distance
	}
`;
