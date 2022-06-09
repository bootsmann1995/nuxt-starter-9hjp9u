import { useConfirmDialog } from "@vueuse/core";
import { CustomEase } from "gsap/CustomEase";
import { IButton } from "~~/interfaces/global";

export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => IButton,
		},
		showButton: {
			type: Boolean,
			default: true,
		},
		confirm: {
			type: Object as () => { headline?: string; text?: string; btnText?: string },
			required: false,
		},
	},
	setup(props) {
		const id = ref(props.data?.ref?.jotformId || "0");

		const confirmObj = ref(
			props.confim || {
				headline: "Tak for din henvendelse",
				text: "Vi sender en mail med et svar, hurtigst muligt.",
				btnText: "Tilbage til siden",
			}
		);

		const checkmarkIcon = ref(null);
		const circleIcon = ref(null);
		const succeeded = ref(false);
		const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog();
		const router = useRouter();
		function openModal() {
			if (props.showButton) {
				router.push({ query: { "open-modal": id.value } });
			}
			succeeded.value = false;
			reveal();
		}

		function closeModal() {
			router.push({ query: {} });
			succeeded.value = false;
			cancel();
		}

		onMounted(() => {
			getIframeMessage();

			if (!props.showButton) {
				const routeId = router.currentRoute.value.query["open-modal"];

				if (routeId != null) {
					id.value = routeId;
					openModal();
				}
			}
		});

		function animateSuccess() {
			const ease = CustomEase.create("custom", "0.785, 0.135, 0.15, 0.86");
		}

		function handleIFrameMessage(e) {
			const isJotform = e.origin.indexOf("jotform") > -1 ? true : false;
			if (isJotform) {
				if (e.data.action === "submission-completed") {
					succeeded.value = true;
					animateSuccess();
					router.push({ query: {} });
				}
			}
		}

		function getIframeMessage() {
			const ifr = document.getElementById(id);
			if (ifr) {
				let src = (ifr as any).src;
				let iframeParams = [];
				if (window.location.href && window.location.href.indexOf("?") > -1) {
					iframeParams = iframeParams.concat(
						window.location.href.substr(window.location.href.indexOf("?") + 1).split("&")
					);
				}
				if (src && src.indexOf("?") > -1) {
					iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
					src = src.substr(0, src.indexOf("?"));
				}
				iframeParams.push("isIframeEmbed=1");
				(ifr as unknown as { src: string }).src = src + "?" + iframeParams.join("&");
			}
			(
				window as unknown as { isPermitted: (originUrl: string, whitelisted_domains: string[]) => boolean }
			).isPermitted = function (originUrl, whitelisted_domains) {
				const url = document.createElement("a");
				url.href = originUrl;
				const hostname = url.hostname;
				let result = false;
				if (typeof hostname !== "undefined") {
					whitelisted_domains.forEach(function (element) {
						if (hostname.slice(-1 * element.length - 1) === ".".concat(element) || hostname === element) {
							result = true;
						}
					});
					return result;
				}
			};
			if (window.addEventListener) {
				window.addEventListener("message", handleIFrameMessage, false);
			} else if ((window as unknown as { attachEvent: (event: Event) => unknown }).attachEvent) {
				(window as unknown as { attachEvent: (event: string, cb: (e: Event) => void) => unknown }).attachEvent(
					"submission-completed",
					handleIFrameMessage
				);
			}
		}

		return {
			isRevealed,
			reveal,
			confirm,
			cancel,
			onReveal,
			onConfirm,
			circleIcon,
			checkmarkIcon,
			onCancel,
			openModal,
			confirmObj,
			closeModal,
			id,
			succeeded,
		};
	},
});
