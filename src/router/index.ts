import { createRouter, createWebHistory } from "vue-router";

import InvoiceListView from "../views/Invoice/ListView.vue";
import InvoiceDetailsView from "../views/Invoice/DetailsView.vue";

import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/invoices",
    },
    {
      path: "/invoices",
      name: "invoices-list",
      component: InvoiceListView,
    },
    {
      path: "/invoices/:id",
      name: "invoice-details",
      component: InvoiceDetailsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;