import { NitroConfig } from "nitropack";
import { defineNuxtConfig } from "nuxt";
import { CMSResource } from "./resources/contentfulClient";
import { GetAllPages } from "./resources/contentfulHelper";
import { VehicleClient } from "./resources/vehicleClient";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	privateRuntimeConfig: {},
	publicRuntimeConfig: {
		ROBOTS: "false",
		BASE_URL: "http://localhost:3000",
		GRAPHQL_ENDPOINT: "https://graphql.contentful.com/content/v1/spaces/{space}/environments/{environment}",
		CONTENTFUL_SPACE: "9ji0mnletnv4",
		CONTENTFUL_ENVIRONMENT: "develop",
		GRAPHQL_TOKEN: "NB0adgq2O87ErHCPRod8JZpZAkehm3Ka1_THE91iIPg",
		SERVER_RENDER: true,
		ALGOLIA_APP: "YRQASBGOZJ",
		ALGOLIA_INDEX: "dev-used-vehicles",
		ALGOLIA_INDEX_LEASING: "leasing-vehicles",
		ALGOLIA_API_KEY: "180916230093ac35978f8623b0a21291",
		API_MANAGEMENT_ENDPOINT: "https://apim-av-ecommerce-dev.azure-api.net/",
		API_MANAGEMENT_SUBSCRIPTION_KEY: "4903a83f8b1e4ee886d0ab61f2e6c687",
	},
	pageTransition: {
		name: "page",
		mode: "out-in",
	},
	css: ["@/assets/styles/site.scss"],
	app: {
		head: {
			htmlAttrs: {
				lang: "da",
			},
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
			link: [
				{
					rel: "stylesheet",
					href: "https://use.typekit.net/akr6ddr.css",
				},
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
			],
		},
	},
	algolia: {
		apiKey: "YRQASBGOZJ",
		applicationId: "180916230093ac35978f8623b0a21291",
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
	modules: ["@vueuse/nuxt", "@nuxtjs/algolia"],
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
	nitro: {
		prerender: {
			crawlLinks: false,
			routes: [],
		},
	},
});
