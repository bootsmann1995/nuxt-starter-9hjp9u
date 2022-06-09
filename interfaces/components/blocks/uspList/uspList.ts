import { IMediaImage } from "~~/interfaces/global";
import { IVideoPlayer } from "../../shared/videoPlayer/videoPlayer";

export interface IUspList {
	headline: string;
	image?: IMediaImage;
	video?: IVideoPlayer;
	usps: string[];
	reverse?: boolean;
}
