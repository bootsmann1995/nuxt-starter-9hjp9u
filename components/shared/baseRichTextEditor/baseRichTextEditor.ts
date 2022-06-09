import { Document } from "@contentful/rich-text-types";
import { IButton } from "~~/interfaces/global";
import CustomLink from "../customLink/customLink.vue";
import LinkComponent from "../LinkComponent/LinkComponent.vue";
import NuxtRichText from "./richText";
export default defineNuxtComponent({
	components: {
		CustomLink,
		NuxtRichText,
		LinkComponent,
	},
	props: {
		data: {
			type: Object as () => Document,
		},
	},
	setup() {
		function renderNodes() {
			return {
				["embedded-entry-block"]: (node, key, h, next) => {
					return renderEmbeded(node, key, h, next);
				},
				["entry-hyperlink"]: (node, key, h, next) => {
					return renderHyperLink(node, key, h, next);
				},
			};
		}

		function renderEmbeded(node, key, h, next) {
			const id = node.data?.target?.sys?.id;
			// Skal hente IButton link data. <-- ANDERS RASMUSSEN
			console.log("renderEmbeded");
			const data: IButton | null = null;
			if (node.data?.target?.sys?.type === "Link") {
				return h(LinkComponent, { key, linkId: id, node, text: next(node.content, key, h, next), data });
			}
		}

		function renderHyperLink(node, key, h, next) {
			const id = node.data?.target?.sys?.id;
			if (node.data?.target?.sys?.type === "Link") {
				return h(CustomLink, { key, linkId: id, node, text: next(node.content, key, h, next) });
			}
			return h("nuxt-link", { key }, next(node.content, key, h, next));
		}
		return { renderNodes };
	},
});
