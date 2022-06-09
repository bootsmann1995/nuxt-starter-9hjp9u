import { defineNuxtModule } from "@nuxt/kit";
import fs from "fs";
import { resolve } from "path";

export default defineNuxtModule({
	setup(options, nuxt) {
		nuxt.hook("nitro:build:before", async () => {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const redirects = require("../redirects.json") as { from: string; to: string; status: number }[];

			console.log(options);
			const config: IStaticWebAppConfig = {
				globalHeaders: options.headers,
				routes: redirects.map((route): IRoute => {
					return { route: route.from, redirect: route.to, statusCode: route.status };
				}),
				responseOverrides: {
					"404": {
						rewrite: "404/index.html",
						statusCode: 404,
					},
				},
				trailingSlash: nuxt.options.router?.trailingSlash ? "auto" : "never",
				platform: {
					apiRuntime: "node:16",
				},
			};
			fs.writeFile(resolve(__dirname, "../public/staticwebapp.config.json"), JSON.stringify(config), (err) => {
				if (err) console.log(err);
			});
		});
	},
});

interface IRoute {
	route: string;
	redirect?: string;
	statusCode?: number;
	headers?: Record<string, string>;
	rewrite?: string;
}

interface IStaticWebAppConfig {
	globalHeaders: Record<string, string>;
	routes: IRoute[];
	responseOverrides: Record<string, IResponseOverride>;
	trailingSlash: string;
	platform: { apiRuntime: string };
}

interface IResponseOverride {
	rewrite: string;
	statusCode: number;
}
