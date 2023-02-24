import { createStore } from 'vuex';
import { InvoicesState, invoicesState } from '../modules/invoices/store/state';

export type State = {
  invoices: InvoicesState;
}

const store = createStore<State>({
  modules: {
    invoices: invoicesState
  },
});

export default store;