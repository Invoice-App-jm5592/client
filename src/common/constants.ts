export default {
  routes: {
    home: {
      path: "/",
      name: "home",
    },
    invoicesList: {
      path: "/invoices",
      name: "invoices-list",
    },
    invoiceDetails: {
      path: "/invoices/:id",
      name: "invoice-details",
    },
    notFound: {
      path: "/:pathMatch(.*)*",
      name: "not-found",
    }
  }
}