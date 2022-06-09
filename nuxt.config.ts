import { NitroConfig } from "nitropack";
import { defineNuxtConfig } from "nuxt";
import { CMSResource } from "./resources/contentfulClient";
import { GetAllPages } from "./resources/contentfulHelper";
import { VehicleClient } from "./resources/vehicleClient";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	privateRuntimeConfig: {},
	publicRuntimeConfig: {
		BASE_URL: process.env.BASE_URL,
		GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
		CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
		CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
		GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
		SERVER_RENDER: process.env.SERVER_RENDER,
		ALGOLIA_APP: process.env.ALGOLIA_APP,
		ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
		ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
		API_MANAGEMENT_ENDPOINT: process.env.API_MANAGEMENT_ENDPOINT,
		API_MANAGEMENT_SUBSCRIPTION_KEY: process.env.API_MANAGEMENT_SUBSCRIPTION_KEY,
	},
	pageTransition: {
		name: "page",
		mode: "out-in",
	},
	css: ["@/assets/styles/site.scss"],
	app: {
		// head: {
		// 	htmlAttrs: {
		// 		lang: "da",
		// 	},
		// 	meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
		// 	link: [
		// 		{
		// 			rel: "stylesheet",
		// 			href: "https://use.typekit.net/akr6ddr.css",
		// 		},
		// 		{
		// 			rel: "icon",
		// 			type: "image/x-icon",
		// 			href: "/favicon.ico",
		// 		},
		// 	],
		// },
	},
	algolia: {
		apiKey: process.env.ALGOLIA_API_KEY,
		applicationId: process.env.ALGOLIA_APP,
	},
	components: [
		{ path: "~/components/", extensions: ["vue"], global: true },
		{ path: "~/views/", extensions: ["vue"], global: false },
		{ path: "~/components/ui/", extensions: ["vue"], global: true },
		{ path: "~/components/blocks/", extensions: ["vue"], global: true },
		{ path: "~/components/shared/", extensions: ["vue"], global: true },
		{ path: "~/components/shared/theHeader", extensions: ["vue"], global: true },
	],
	router: {
		scrollBehavior: (to, from, savedPosition) => {
			if (savedPosition && to !== from) {
				return savedPosition;
			}
			if (to.hash) {
				return {
					el: to.hash,
				};
			}
			return { top: 0 };
		},
		trailingSlash: true,
	},
	modules: [
		"@vueuse/nuxt",
		"~/modules/sitemap",
		"@nuxtjs/algolia",
		"~/modules/robots",
		[
			"~/modules/staticWebApp",
			{
				headers: {
					"X-Frame-Options": "DENY",
				},
			},
		],
	],
	// plugins: ["~/plugins/vue-instantsearch", "~/plugins/interpolation"],
	build: {
		transpile: ["swiper", "@vime/vue", "@vime/core", "contentful-rich-text-vue-renderer"],
	},
	vite: {
		optimizeDeps: {
			entries: ["./assets/styles/vendors/_bootstrap-grid.scss", "vue-instantsearch", "instantsearch.js/es"],
		},
		build: {
			rollupOptions: {
				external: ["@stencil/core/internal/client"],
			},
		},
	},
	hooks: {
		"nitro:config": async (nitroConfig: NitroConfig) => {
			const cms = new CMSResource(nitroConfig.runtimeConfig);
			const vehicleApi = new VehicleClient(nitroConfig.runtimeConfig);
			const pages = await GetAllPages(cms);
			const vehicleSlugs = await vehicleApi.GetAllVehicleSlugsAsync();
			nitroConfig.prerender.routes = pages
				.map((page) => page.path)
				.concat(
					vehicleSlugs.map((slug) => `/brugte-biler/${slug.id}/${slug.brand}-${slug.model}/`.toLowerCase())
				)
				.concat("/404/");
		},
	},
	nitro: {
		prerender: {
			crawlLinks: false,
			routes: [],
		},
	},
});
