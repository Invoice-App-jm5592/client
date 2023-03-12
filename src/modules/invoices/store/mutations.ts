import { InvoiceStatus, Invoice } from '../types';
import { InvoicesState } from './state';

export default {
  toggleStatusFilter: (state: InvoicesState, newStatus: InvoiceStatus) => {
    if (state.activeStatusFilters.includes(newStatus)) {
      state.activeStatusFilters = state.activeStatusFilters.filter(status => status !== newStatus);
      return;
    }
    state.activeStatusFilters = state.activeStatusFilters.concat(newStatus);
  },
  addInvoicesToList: (state: InvoicesState, newList: Invoice[]) => {
    state.list = newList;
  },
  selectInvoice: (state: InvoicesState, newInvoice: Invoice) => {
    state.selectedInvoice = newInvoice;
  }
};