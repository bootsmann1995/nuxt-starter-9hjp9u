import { RuntimeConfig } from "@nuxt/schema";
import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";
import { GraphQLResponse } from "graphql-request/dist/types";
import { IGraphQLVariables } from "../interfaces/graphQL";
export class CMSResource {
	readonly client: GraphQLClient;
	readonly defaultVariables: IGraphQLVariables;

	constructor(config: RuntimeConfig | Record<string, string>) {
		const previewBool = config.SERVER_RENDER !== "true";
		this.defaultVariables = { preview: previewBool, locale: config.LOCALE };

		let endpoint = config.GRAPHQL_ENDPOINT ?? "";
		endpoint = endpoint
			.replace("{space}", config.CONTENTFUL_SPACE)
			.replace("{environment}", config.CONTENTFUL_ENVIRONMENT);

		this.client = new GraphQLClient(endpoint ?? "", {
			headers: {
				authorization: `Bearer ${config.GRAPHQL_TOKEN}`,
			},
		});
	}

	// get data funciton with query paramater
	public getDataAsync = async <T>(query: DocumentNode, variables: IGraphQLVariables = {}) => {
		const mergedVariables = Object.assign({}, this.defaultVariables, variables);
		try {
			return this.handleResponse<T>(await this.client.request(query, mergedVariables));
		} catch (error: any) {
			// console.error(this.getErrorResponse<T>(error));
			return this.getErrorResponse<T>(error);
		}
	};

	// create response function to handle errors
	private handleResponse = async <T>(response: any): Promise<GraphQLResponse<T>> => {
		const data = await response;
		const { errors, status } = response;
		return {
			data,
			errors,
			status,
		};
	};

	// catch error
	private getErrorResponse = <T>(error: any): GraphQLResponse<T> => {
		const { errors, status, data } = error.response;
		console.log(errors);
		return {
			data: data,
			status: status,
			errors: errors,
		};
	};
}
