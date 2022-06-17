import InstantSearch from 'vue-instantsearch/vue3/es';

export default defineNuxtPlugin((nuxtApp) => {
  // const config = nuxtApp.options.runtimeConfig.public;
  nuxtApp.vueApp.use(InstantSearch);
});
