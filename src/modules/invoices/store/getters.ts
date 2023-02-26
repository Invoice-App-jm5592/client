import { InvoicesState } from './state';

export default {
  statusFilters: (state: InvoicesState) => {
    return state.activeStatusFilters;
  },
  invoicesList: (state: InvoicesState) => {
    return state.list;
  },
  isInvoicesListEmpty: (state: InvoicesState) => {
    return state.list.length === 0;
  },
  totalInvoices: (state: InvoicesState) => {
    return state.list.length;
  },
};