import axios from "axios";

export default abstract class AbstractResource {
	constructor(protected baseUrl: string, protected headers?: Record<string, string>) {}

	protected async getAsync<TModel>(path: string): Promise<TModel | null> {
		try {
			const response = await axios.get<TModel>(`${this.baseUrl}${path}`, { headers: this.headers });
			return response.data;
		} catch (error) {
			console.debug(`HTTP GET ${this.baseUrl}${path} => ${error}`);
			return null;
		}
	}

	protected async postAsync<TModel>(path: string, data: unknown) {
		try {
			const response = await axios.post<TModel>(`${this.baseUrl}${path}`, data, { headers: this.headers });
			return response.data;
		} catch (error) {
			console.debug(`HTTP POST ${this.baseUrl}${path} => ${error}`);
		}
	}

	protected async putAsync<TModel>(path: string) {
		try {
			const response = await axios.put<TModel>(`${this.baseUrl}${path}`, { headers: this.headers });
			return response.data;
		} catch (error) {
			console.debug(`HTTP PUT ${this.baseUrl}${path} => ${error}`);
		}
	}

	protected async deleteAsync(path: string) {
		try {
			await axios.delete<void>(`${this.baseUrl}${path}`, { headers: this.headers });
			return;
		} catch (error) {
			console.debug(`HTTP DELETE ${this.baseUrl}${path} => ${error}`);
		}
	}
}
