# PRD — Shield Max Unified Business Platform Demo

## 1. Problem

Shield Max currently has a public commerce presence and a separate ERP experience. The client wants the convenience of an Odoo-like “everything in one place” system.

At the same time, Shield Max product prices fluctuate. A normal ecommerce checkout with fixed public pricing is not appropriate.

The demo must show how a custom Shield Max platform can replace the storefront and connect directly with ERP workflows.

## 2. Goal

Build a frontend-only demonstration of a unified platform with three connected surfaces:

1. **Public Storefront**
2. **Website / Commerce Administration**
3. **ERP / Business Operations**

The demo is designed to win client approval for the full build.

## 3. Core promise shown to client

**Manage once. Use everywhere.**

- Create/manage product once.
- Decide whether it appears online.
- Website displays live product content and stock status.
- Customer submits an RFQ without seeing price.
- RFQ lands in the staff Control Center.
- Staff converts RFQ into a quotation.
- Current price exists only inside the business workflow.
- Quotation continues into sale, delivery, invoice and payment.

## 4. Personas

### Public procurement visitor
Needs to:
- find PPE quickly
- filter by brand/category/application/standard
- understand stock/delivery status
- collect multiple products
- submit quantity requirements
- request a formal quotation

### Owner / Admin
Needs to:
- see everything from one place
- control website content
- manage products
- see quote enquiries
- understand business KPIs
- move between website and ERP without feeling like separate software

### Sales user
Needs to:
- receive web RFQs
- review customer requirement
- enter current pricing
- create quotation
- confirm sales

### Warehouse / operations user
Needs to:
- see stock
- see linked delivery orders
- understand fulfilment status

## 5. Public storefront scope

### Required pages
- Home
- Product Catalogue
- Category Listing
- Product Detail
- Quote List
- RFQ Request Form
- RFQ Success
- Brands
- About
- Contact

### Public pricing rule
Never show public KWD pricing in the default demo.

Use:
- Price on Request
- Request Today’s Price
- Add to Quote
- Request Quotation

Never use:
- Checkout
- Subtotal
- Cart Total
- Sale Price
- Compare-at Price
- Price Filter
- Price Sorting

### Catalogue filters
- Category
- Brand
- Availability
- Certification / Standard
- Industry / Application

### Example statuses
- In Stock
- Limited Stock
- Available on Request
- 2–4 Day Delivery
- Project Quantity Available

## 6. Unified Control Center

### Landing screen
An original app launcher with Shield Max logo and a concise line:

> Your website and business operations. One platform.

### Apps
- Website
- RFQ Inbox
- CRM
- Quotations
- Sales
- Products
- Inventory
- Purchases
- Delivery
- Invoices
- Payments
- Finance
- Reports
- Settings

Each app card shows meaningful micro-status:
- Website: Live
- RFQ Inbox: 3 New
- Quotations: 8 Open
- Inventory: 12 Low Stock
- Delivery: 5 Pending
- Payments: 7 Outstanding

## 7. Website Admin

### Website Dashboard
Show:
- Website live status
- Products published
- Products hidden
- new RFQs
- top viewed products
- quote conversion
- recent website activity

### Website Studio
A simple section manager for homepage:
- Hero
- Categories
- Featured Products
- Project Supply
- Brands
- Standards
- Why Shield Max
- Contact CTA

Allow:
- visibility toggles
- reorder controls
- edit copy in drawer
- Live Preview button

### Shared Product Management
Product list includes:
- image
- name
- SKU
- brand
- category
- stock
- website status
- featured
- last updated

Product detail has tabs:
- General
- Inventory
- Sales
- Purchase
- Website
- Activity

Website tab contains:
- Publish on Website
- Website title
- slug
- descriptions
- images
- category
- delivery text
- certification badges
- featured
- SEO fields
- public price status: `Hidden — Quotation Only`
- View on Website

### Other Website Admin pages
- Categories
- Brands
- Media
- Navigation
- Pages
- SEO
- Website Settings

## 8. RFQ Inbox

Table:
- RFQ number
- date/time
- source
- company
- contact
- product count
- total quantity
- required date
- assigned user
- status

Statuses:
- New
- Reviewing
- Quotation Created
- Won
- Closed

RFQ detail:
- company/contact information
- delivery location
- requirement notes
- products / qty / unit
- timeline
- related customer if matched
- Create Quotation button

## 9. Quotation workflow

When converting RFQ:
- prefill customer
- prefill products/quantities
- allow internal price entry
- KWD 3 decimals
- discount
- tax
- validity
- terms
- notes
- status

Demo actions:
- Save Draft
- Mark Sent
- Confirm Sale

When confirmed:
- quotation becomes Confirmed
- sale appears
- inventory mock state can reserve/deduct
- delivery order appears
- invoice can appear as Draft / Pending

## 10. ERP representation

The demo must visually preserve the current Shield Max ERP language and cover representative views for:
- Dashboard
- Products
- Customers
- Suppliers
- Purchases
- Quotations
- Sales
- Delivery Orders
- Payments
- Finance
- Reports
- Settings

Not every module needs production depth. Pitch-critical screens must be complete.

## 11. Global search

Control Center should include one global search/command surface.

Examples:
- search “95248” → Product
- search “RFQ-2026-0148” → RFQ
- search customer → CRM result

This reinforces “one system”.

## 12. Notifications

Examples:
- New website RFQ received
- Quotation confirmed
- Low stock detected
- Delivery due today

The website RFQ created during the demo must generate a visible unread notification/badge.

## 13. Bilingual UX

Provide EN / عربي toggle.

At minimum:
- shell/nav direction mirrors correctly
- public header can switch direction
- key buttons have Arabic labels available
- do not require translation of every long mock description for the demo

## 14. Non-goals for demo

Do not implement:
- backend
- real auth
- database
- payment gateway
- email delivery
- WhatsApp API
- real PDF generation
- real stock mutation server logic
- production role enforcement
- migrations
- live deployment integrations

## 15. Acceptance criteria

The client demo is ready only if:

1. Storefront looks premium and Shield Max-specific.
2. Public prices are hidden everywhere.
3. Quote List works.
4. RFQ submission works.
5. Submitted RFQ appears in Control Center.
6. RFQ converts to quotation.
7. Internal price is visible in quotation only.
8. Website Admin can alter a product and Live Preview reflects the change.
9. App launcher makes all major business areas feel part of one system.
10. Existing Shield Max ERP colors and visual language are clearly recognizable.
