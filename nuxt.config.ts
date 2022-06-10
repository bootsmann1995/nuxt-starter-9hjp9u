import { defineNuxtConfig } from "nuxt";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	privateRuntimeConfig: {},
	// css: ["~/assets/styles/animation.scss"],
	pageTransition: {
		name: "page",
		mode: "out-in",
	},
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
	components: [{ path: "~/components/", extensions: ["vue"], global: true }],
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
	nitro: {
		prerender: {
			crawlLinks: false,
			routes: [],
		},
	},
});
