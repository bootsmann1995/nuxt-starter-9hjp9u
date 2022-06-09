import { IVideoPlayer } from "~~/interfaces/components/shared/videoPlayer/videoPlayer";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IVideoPlayer,
		},
	},
	setup() {
		const inlinePlayerRef = ref<HTMLIFrameElement | null>(null);
		const showOverlay = ref(true);
		const currentTime = ref();

		const playVideo = () => {
			showOverlay.value = false;
			//@ts-ignore
			inlinePlayerRef.value.play();
		};

		const initialVideoState = () => {
			currentTime.value = 1;
			showOverlay.value = true;
		};

		return {
			showOverlay,
			currentTime,
			playVideo,
			inlinePlayerRef,
			initialVideoState,
		};
	},
});
