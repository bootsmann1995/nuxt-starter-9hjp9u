import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { singleIndex as singleIndexMapping } from 'instantsearch.js/es/lib/stateMappings';

export default defineNuxtComponent({
  async setup() {
    const searchClient = useAlgolia();
    const routing = {
      router: historyRouter(),
      stateMapping: singleIndexMapping('dev-used-vehicles'),
    };

    return { searchClient, routing };
  },
});
