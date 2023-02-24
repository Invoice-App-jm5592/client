import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { Invoice, InvoiceStatus } from '../types';
import invoices from "../fixtures";

export type InvoicesState = {
  activeStatusFilters: InvoiceStatus[];
  list: Invoice[];
};

export const invoicesState = {
  state: (): InvoicesState => ({
    activeStatusFilters: [],
    list: invoices
  }),
  mutations: { ...mutations },
  actions: { ...actions },
  getters: { ...getters }
};