import { IMediaImage } from "~~/interfaces/global";
import { IContentBox } from "../../shared/contentBox/contentBox";
import { IVideoPlayer } from "../../shared/videoPlayer/videoPlayer";

export interface ITwoColumnBlock {
	reverse: boolean;
	image: IMediaImage | null;
	video: IVideoPlayer | null;
	contentBlock: IContentBox;
	design: "simple" | "extended";
	typename: string;
}
