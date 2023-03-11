export type InvoiceStatus = "DRAFT" | "PENDING" | "PAID";

export type Invoice = {
  id: string;
  invoice_number: string;
  status: InvoiceStatus;
  bill_from: {
    name: string;
    email: string;
    address: string;
    phone: string;
    city: string;
    code: string;
    country: string;
  }
  bill_to: {
    name: string;
    email: string;
    address: string;
    city: string;
    code: string;
    country: string;
  };
  issue_date: string;
  payment_terms: string;
  description: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
};
