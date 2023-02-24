import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { InvoiceStatus } from '../types';

export type InvoicesState = {
  activeStatusFilters: InvoiceStatus[];
};

export const invoicesState = {
  state: (): InvoicesState => ({
    activeStatusFilters: []
  }),
  mutations: { ...mutations },
  actions: { ...actions },
  getters: { ...getters }
};