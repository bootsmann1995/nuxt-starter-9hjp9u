import { defineNuxtModule } from "@nuxt/kit";
import { ICmsPage } from "~~/interfaces/cms/globals";
import { CMSResource } from "../resources/contentfulClient";
import { GetAllPages } from "../resources/contentfulHelper";
export default defineNuxtModule({
	async setup(_options, nuxt) {
		const cms = new CMSResource(nuxt.options.runtimeConfig.public);

		nuxt.hook("nitro:config", async (NitroConfig) => {
			if (nuxt.options.runtimeConfig.public.NITRO_PRESET != null) {
				NitroConfig.preset = nuxt.options.runtimeConfig.public.NITRO_PRESET;
			}
			const pages: ICmsPage[] = await GetAllPages(cms);

			//console.log(NitroConfig, data);
			pages.forEach((page) => {
				NitroConfig.prerender.routes.push(`${page.path}`);
			});
		});
	},
});
