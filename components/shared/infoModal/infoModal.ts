import { useConfirmDialog } from "@vueuse/core";
export default defineNuxtComponent({
	props: {
		data: {
			type: Object as () => { headline: string; text: string; btnText: string },
		},
	},
	setup() {
		const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog();

		return { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel };
	},
});
