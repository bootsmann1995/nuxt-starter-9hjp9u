import { ConfigurableWindow } from "@vueuse/core";
import { Ref } from "nuxt/dist/app/compat/capi";

declare module "@vueuse/core" {
	function useMediaQuery(query: string, options?: ConfigurableWindow): Ref<boolean>;
}

declare module "@vueuse/components";
