import gql from "graphql-tag";

export const simpleArticlePage = gql`
	fragment simpleArticlePage on ArticlePage {
		sys {
			id
			firstPublishedAt
		}
		contentfulMetadata {
			tags {
				id
				name
			}
		}
		typename: __typename
		nodeName
		publishDate
		headline
		image {
			url
			description
		}
	}
`;

export const articlePageTags = gql`
	fragment articlePageTags on ArticlePage {
		contentfulMetadata {
			tags {
				id
				name
			}
		}
	}
`;

export const getNewestArticles = gql`
	query ($preview: Boolean, $locale: String, $limit: Int) {
		articlePageCollection(
			preview: $preview
			locale: $locale
			limit: $limit
			order: publishDate_DESC
			where: { publishDate_exists: true }
		) {
			items {
				...simpleArticlePage
			}
		}
	}
	${simpleArticlePage}
`;

export const getFilterArticlePages = gql`
	query ($preview: Boolean, $locale: String, $limit: Int, $skip: Int, $tags: [String]) {
		articlePageCollection(
			preview: $preview
			locale: $locale
			limit: $limit
			skip: $skip
			order: publishDate_DESC
			where: { publishDate_exists: true, contentfulMetadata: { tags: { id_contains_all: $tags } } }
		) {
			total
			items {
				...simpleArticlePage
			}
		}
	}
	${simpleArticlePage}
`;

export const getArticles = gql`
	query ($preview: Boolean, $locale: String, $limit: Int, $skip: Int) {
		articlePageCollection(preview: $preview, locale: $locale, limit: $limit, skip: $skip, order: publishDate_DESC) {
			total
			items {
				...simpleArticlePage
			}
		}
	}
	${simpleArticlePage}
`;

export const getArticleTags = gql`
	query ($preview: Boolean, $locale: String, $limit: Int, $skip: Int) {
		articlePageCollection(
			preview: $preview
			locale: $locale
			limit: $limit
			skip: $skip
			order: publishDate_DESC
			where: { publishDate_exists: true, contentfulMetadata: { tags_exists: true } }
		) {
			items {
				contentfulMetadata {
					tags {
						id
						name
					}
				}
			}
		}
	}
`;

export const getRelatedArticlesBytags = gql`
	query ($preview: Boolean, $locale: String, $limit: Int, $skip: Int, $tags: [String], $slug: String) {
		articlePageCollection(
			preview: $preview
			locale: $locale
			limit: $limit
			skip: $skip
			order: publishDate_DESC
			where: {
				publishDate_exists: true
				slug_not: $slug
				contentfulMetadata: { tags: { id_contains_all: $tags } }
			}
		) {
			items {
				...simpleArticlePage
			}
		}
	}
	${simpleArticlePage}
`;
