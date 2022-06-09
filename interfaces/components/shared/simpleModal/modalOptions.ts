type Layout = "fullscreen" | "fullwidth" | "boxed";
type BackgroundColor = "black" | "default";

export interface IModalOptions {
	layout?: Layout;
	backgroundColor?: BackgroundColor;
}
