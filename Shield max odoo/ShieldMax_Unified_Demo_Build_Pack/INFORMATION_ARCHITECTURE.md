# Information Architecture

## A. Public Storefront

```text
/
├── products
│   ├── category/:slug
│   ├── brand/:slug
│   └── product/:slug
├── quote-list
├── request-quote
├── quote-success/:rfqNo
├── brands
├── industries
├── about
└── contact
```

### Public main navigation
- Products
- Categories
- Brands
- Industries
- About
- Contact
- Quote List

---

## B. Unified Staff Platform

```text
/control
├── launcher
├── global-search
├── notifications
├── website
├── rfqs
├── crm
├── quotations
├── sales
├── products
├── inventory
├── purchases
├── delivery
├── invoices
├── payments
├── finance
├── reports
└── settings
```

The app launcher is the staff home.

---

## C. Website App

```text
/control/website
├── dashboard
├── studio
├── products
│   └── :id
├── categories
├── brands
├── media
├── navigation
├── pages
├── seo
├── rfqs
└── settings
```

Important: `website/products` is a website view over the shared product data, not a second product universe.

---

## D. ERP Apps

### CRM
- Customers
- Customer Detail
- Activity

### Quotations
- List
- Detail
- Create from RFQ

### Sales
- Sales List
- Sale Detail

### Products
- Product Master
- Product Detail
- Category
- Brand
- Unit

### Inventory
- Stock Overview
- Low Stock
- Movements

### Purchases
- Purchase List
- Purchase Detail
- Suppliers

### Delivery
- Delivery Orders
- Delivery Detail

### Invoices
- Invoice List
- Invoice Detail

### Payments
- Payment List
- Payment Detail / allocation

### Finance
- Dashboard
- Accounts Master
- Ledger
- Transfers
- Expenses

### Reports
- Sales
- Inventory
- Receivables
- Finance

### Settings
- Company
- Branding
- Language
- Users
- Website
- Numbering

---

# Connected object relationships

```text
PRODUCT
 ├─ operational data
 ├─ inventory state
 ├─ purchase references
 ├─ sales references
 └─ website presentation

WEBSITE VISITOR
   ↓
QUOTE LIST
   ↓
RFQ
   ↓
CUSTOMER / LEAD
   ↓
QUOTATION
   ↓
SALE
   ├─ INVENTORY
   ├─ DELIVERY
   └─ INVOICE
        ↓
      PAYMENT
```

---

# App launcher content

Recommended order:

1. Website
2. RFQ Inbox
3. CRM
4. Quotations
5. Sales
6. Products
7. Inventory
8. Purchases
9. Delivery
10. Invoices
11. Payments
12. Finance
13. Reports
14. Settings

Website and RFQ Inbox should be the two most visually prominent new apps because they prove the new value.
