import { Ref } from "nuxt/dist/app/compat/vue-demi";
import { IFooter } from "~~/interfaces/components/shared/footer/footer";
import FooterAccordion from "./FooterAccordion/FooterAccordion.vue";
import FooterContactButton from "./FooterContactButton/FooterContactButton.vue";
import FooterLinkCollection from "./FooterLinkCollection/FooterLinkCollection.vue";

export default defineNuxtComponent({
	components: {
		FooterLinkCollection,
		FooterContactButton,
		FooterAccordion,
	},

	props: {
		footer: {
			type: Object as () => IFooter,
			default: null,
		},
	},
	setup() {
		useHead({
			script: [
				{
					type: "text/javascript",
					src: "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js",
					async: true,
				},
			],
		});

		const showModal: Ref<boolean> = ref(false);

		const openModal = () => {
			showModal.value = !showModal.value;
		};

		return {
			showModal,
			openModal,
			FooterLinkCollection,
			FooterContactButton,
			FooterAccordion,
		};
	},
});
