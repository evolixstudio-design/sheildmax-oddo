export type Unit = "PCS" | "PAIR" | "BOX" | "DOZEN" | "SET";

export type Product = {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  unit: Unit;
  stockQty: number;
  internalPriceKwd: number;
  websitePublished: boolean;
  featured: boolean;
  websiteTitle: string;
  slug: string;
  shortDescription: string;
  description: string;
  images: string[];
  certifications: string[];
  applications: string[];
  availability: "IN_STOCK" | "LIMITED" | "ON_REQUEST";
  deliveryText: string;
  quotationMode: "AUTO" | "MANUAL";
  seoTitle: string;
  seoDescription: string;
};

export type Customer = {
  id: string;
  code: string;
  company: string;
  contact: string;
  phone: string;
  email: string;
  area: string;
  outstanding: number;
};

export type QuoteItem = {
  productId: string;
  qty: number;
  unit: Unit;
};

export type QuotationStatus = "DRAFT" | "SENT" | "ACCEPTED" | "REJECTED";

export type QuotationLine = {
  productId: string;
  qty: number;
  unit: Unit;
  quotedUnitPrice: number; // Snapshot of internal price
};

export type Quotation = {
  id: string;
  quotationNo: string;
  date: string;
  validUntil: string;
  source: "Website Auto" | "Manual" | "RFQ";
  customerInfo: {
    company: string;
    contact: string;
    phone: string;
    email: string;
    area: string;
    project: string;
  };
  lines: QuotationLine[];
  subtotal: number;
  status: QuotationStatus;
};

export type RFQStatus = "New" | "Reviewing" | "Quotation Created" | "Closed";

export type RFQ = {
  id: string;
  rfqNo: string;
  date: string;
  source: "Website" | "Manual";
  customerInfo: {
    company: string;
    contact: string;
    phone: string;
    email: string;
    area: string;
    project: string;
  };
  lines: QuoteItem[];
  status: RFQStatus;
};

export type SaleStatus = "Draft" | "Confirmed" | "Delivered" | "Invoiced";

export type Sale = {
  id: string;
  saleNo: string;
  quotationId: string;
  date: string;
  customerName: string;
  amount: number;
  status: SaleStatus;
};

export type DeliveryStatus = "Preparing" | "Ready" | "Out for Delivery" | "Delivered";

export type Delivery = {
  id: string;
  deliveryNo: string;
  saleId: string;
  date: string;
  customerName: string;
  area: string;
  status: DeliveryStatus;
};

export type InvoiceStatus = "Draft" | "Sent" | "Paid" | "Partial";

export type Invoice = {
  id: string;
  invoiceNo: string;
  saleId: string;
  date: string;
  customerName: string;
  amount: number;
  balance: number;
  status: InvoiceStatus;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
};
