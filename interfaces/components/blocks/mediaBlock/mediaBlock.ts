import { IMediaImage } from "~~/interfaces/global";
import { IVideoPlayer } from "../../shared/videoPlayer/videoPlayer";

export interface IMediaBlock {
	video?: IVideoPlayer;
	image?: IMediaImage;
	typename: string;
}
