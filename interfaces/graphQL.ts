export interface IGraphQLVariables {
	id?: string;
	locale?: string;
	limit?: number;
	preview?: boolean;
	slug?: string;
	order?: string[];
	tags?: string | string[];
	universe?: string;
	skip?: number;
	take?: number;
	highlightedArticles?: boolean;
}

export interface IGraphQLCollection<T> {
	total?: number;
	items: T[];
}
