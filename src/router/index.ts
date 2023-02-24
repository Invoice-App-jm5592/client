import { createRouter, createWebHistory } from "vue-router";

import InvoiceListView from "../views/Invoice/ListView.vue";
import InvoiceDetailsView from "../views/Invoice/DetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import constants from "@/common/constants";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: constants.routes.home.path,
      name: constants.routes.home.name,
      redirect: "/invoices",
    },
    {
      path: constants.routes.invoicesList.path,
      name: constants.routes.invoicesList.name,
      component: InvoiceListView,
    },
    {
      path: constants.routes.invoiceDetails.path,
      name: constants.routes.invoiceDetails.name,
      component: InvoiceDetailsView,
    },
    {
      path: constants.routes.notFound.path,
      name: constants.routes.notFound.name,
      component: NotFoundView,
    },
  ],
});

export default router;