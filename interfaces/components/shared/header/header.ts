import { IMenuItem } from "./menu";
import { ITopbarItem } from "./topbar";

export interface IHeader {
	topbarItems: ITopbarItem[];
	menu: IMenuItem[];
}
