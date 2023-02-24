import { Invoice } from "./types"

const invoices: Invoice[] = [
  {
    id: "1",
    "invoice_number": "AK10023",
    status: "Pending",
    "bill_from": {
      name: "Jean-Marc Möckel",
      email: "jonny@gmail.com",
      address: "19 Union Terrace",
      phone: "0122- 23423452",
      city: "London",
      code: "E1 3EZ",
      country: "United Kingdom"
    },
    "bill_to": {
      name: "Jonny Clayton",
      email: "jonny@example.com",
      address: "84 Church Way",
      city: "London",
      code: "BD1 9PB",
      country: "United Kingdom"
    },
    "issue_date": "21 Aug 2021",
    "payment_terms": "Next 30 Days",
    description: "Graphic Design for Mobile App",
    items: [
      {
        name: "App Icon Design",
        quantity: 1,
        price: 156,
        total: 156
      },
    ],
    total: 112312312
  },
  {
    id: "2",
    "invoice_number": "AK10067",
    status: "Paid",
    "bill_from": {
      name: "Jean-Marc Möckel",
      email: "jonny@gmail.com",
      address: "19 Union Terrace",
      phone: "0122- 23423452",
      city: "London",
      code: "E1 3EZ",
      country: "United Kingdom"
    },
    "bill_to": {
      name: "Ibrahim Taha Al-Mussad",
      email: "jonny@example.com",
      address: "84 Church Way",
      city: "London",
      code: "BD1 9PB",
      country: "United Kingdom"
    },
    "issue_date": "02 Dec 2022",
    "payment_terms": "Next 30 Days",
    description: "Graphic Design for Mobile App",
    items: [
      {
        name: "App Icon Design",
        quantity: 1,
        price: 156,
        total: 156
      },
      {
        name: "App Screen Design",
        quantity: 9,
        price: 840,
        total: 7560,
      }
    ],
    total: 7760 
  },
  {
    id: "3",
    "invoice_number": "AK10055",
    status: "Draft",
    "bill_from": {
      name: "Jean-Marc Möckel",
      email: "jonny@gmail.com",
      address: "19 Union Terrace",
      phone: "0122- 23423452",
      city: "London",
      code: "E1 3EZ",
      country: "United Kingdom"
    },
    "bill_to": {
      name: "Dr. M",
      email: "jonny@example.com",
      address: "84 Church Way",
      city: "London",
      code: "BD1 9PB",
      country: "United Kingdom"
    },
    "issue_date": "21 Aug 2021",
    "payment_terms": "Next 30 Days",
    description: "Graphic Design for Mobile App",
    items: [
      {
        name: "App Icon Design",
        quantity: 1,
        price: 156,
        total: 156
      },
      {
        name: "App Screen Design",
        quantity: 9,
        price: 840,
        total: 7560,
      }
    ],
    total: 7760 
  },
];

export default invoices;