import { InvoicesState } from './state';

export default {
  statusFilters: (state: InvoicesState) => {
    return state.activeStatusFilters;
  }
};