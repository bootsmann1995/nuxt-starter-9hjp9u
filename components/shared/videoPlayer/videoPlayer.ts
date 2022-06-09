import { IVideoPlayer } from "~~/interfaces/components/shared/videoPlayer/videoPlayer";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IVideoPlayer,
		},
	},
	setup() {
		const playerRef = ref<HTMLIFrameElement | null>(null);
		const showVideo = ref(false);

		const playVideo = () => {
			showVideo.value = true;
		};

		return {
			showVideo,
			playVideo,
			playerRef,
		};
	},
});
