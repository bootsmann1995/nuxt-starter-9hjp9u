import { helpers } from "@contentful/rich-text-types";
import { h } from "vue";

const defaultInline = (type, node, key, h) => {
	return h(
		"span",
		{
			key,
			style: {
				margin: "0px 5px",
				padding: "0 .25rem 0 .75rem",
				border: "1px solid #d3dce0",
				fontFamily: "monospace",
			},
		},
		`inline: ${type}, sys.id: ${node.data.target.sys.id}`
	);
};

const defaultMarkRenderers = {
	["bold"]: (children, key, h) => h("strong", { key }, children),
	["italic"]: (children, key, h) => h("em", { key }, children),
	["underline"]: (children, key, h) => h("u", { key }, children),
	["code"]: (children, key, h) => h("code", { key }, children),
};

const defaultNodeRenderers = {
	["paragraph"]: (node, key, h, next) => h("p", { key }, next(node.content, key, h, next)),
	["heading-1"]: (node, key, h, next) => h("h1", { key }, next(node.content, key, h, next)),
	["heading-2"]: (node, key, h, next) => h("h2", { key }, next(node.content, key, h, next)),
	["heading-3"]: (node, key, h, next) => h("h3", { key }, next(node.content, key, h, next)),
	["heading-4"]: (node, key, h, next) => h("h4", { key }, next(node.content, key, h, next)),
	["heading-5"]: (node, key, h, next) => h("h5", { key }, next(node.content, key, h, next)),
	["heading-6"]: (node, key, h, next) => h("h6", { key }, next(node.content, key, h, next)),
	["embedded-entry-block"]: (node, key, h, next) => h("div", { key }, next(node.content, key, h, next)),
	["unordered-list"]: (node, key, h, next) => h("ul", { key }, next(node.content, key, h, next)),
	["ordered-list"]: (node, key, h, next) => h("ol", { key }, next(node.content, key, h, next)),
	["list-item"]: (node, key, h, next) => h("li", { key }, next(node.content, key, h, next)),
	["blockquote"]: (node, key, h, next) => h("blockquote", { key }, next(node.content, key, h, next)),
	["table"]: (node, key, h, next) => h("table", { key }, next(node.content, key, h, next)),
	["table-row"]: (node, key, h, next) => h("tr", { key }, next(node.content, key, h, next)),
	["table-cell"]: (node, key, h, next) => h("td", { key }, next(node.content, key, h, next)),
	["table-header-cell"]: (node, key, h, next) => h("th", { key }, next(node.content, key, h, next)),
	["hr"]: (_node, key, h) => h("hr", { key }, {}),
	["asset-hyperlink"]: (node, key, h) => defaultInline("asset-hyperlink", node, key, h),
	["entry-hyperlink"]: (node, key, h) => defaultInline("entry-hyperlink", node, key, h),
	["embedded-entry-inline"]: (node, key, h) => defaultInline("embedded-entry-inline", node, key, h),
	["hyperlink"]: (node, key, h, next) => {
		return h(
			"a",
			{
				key,
				attrs: {
					href: node.data.uri,
				},
			},
			next(node.content, key, h, next)
		);
	},
	text: ({ marks, value }, key, h, markRenderer) => {
		if (!marks.length) {
			return value;
		}

		const marksReversed = [...marks].reverse();
		return marksReversed.reduce(
			(aggregate, mark, i) => markRenderer[mark.type]([aggregate], `${key}-${i}`, h),
			value
		);
	},
};

const renderNodeList = (nodes, key, renderer) => {
	if (nodes != null) {
		return nodes.map((node, i) => renderNode(node, `${key}-${i}`, renderer));
	}
};

const renderNode = (node, key, renderer) => {
	const nodeRenderer = renderer.node;
	const createElement = renderer.createElement;

	if (helpers.isText(node)) {
		// We're at final tip of node branch, can render text.
		const markerRender = renderer.mark;
		return nodeRenderer.text(node, key, createElement, markerRender);
	} else {
		const nextNode = (nodes) => renderNodeList(nodes, key, renderer);
		if (!nodeRenderer) {
			return createElement("div", `${key} ;lost nodeRenderer`);
		}
		if (!node.nodeType || !nodeRenderer[node.nodeType]) {
			// TODO: Figure what to return when passed an unrecognized node.
			return "(Unrecognized node type) " + (node.nodeType || "empty");
		}
		return nodeRenderer[node.nodeType](node, key, createElement, nextNode);
	}
};

export default defineNuxtComponent({
	functional: true,

	props: {
		nodeRenderers: {
			default: defaultNodeRenderers,
		},
		document: {
			default: { content: [] },
		},
		markRenderers: {
			default: defaultMarkRenderers,
		},
	},
	render(props) {
		const renderer = {
			node: {
				...defaultNodeRenderers,
				...props.nodeRenderers,
			},
			mark: {
				...defaultMarkRenderers,
				...props.markRenderers,
			},
			createElement: h,
		};

		return renderNodeList(props.document.content, "RichText-", renderer);
	},
});
