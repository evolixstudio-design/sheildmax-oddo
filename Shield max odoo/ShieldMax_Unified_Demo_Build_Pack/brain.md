# Brain — Non-Negotiable Product Decisions

## Product thesis

Shield Max should feel like **one business operating system**, not a website stitched to a separate ERP.

The staff member should have one Control Center and one catalogue. The public website is simply another controlled surface of the same product data.

## Master data decision

**ERP Product is the single product concept.**

A product can contain both operational and website fields:

### Operational fields
- Product ID
- SKU
- Barcode
- Name EN
- Name AR
- Brand
- Category
- Unit
- Purchase cost
- Internal selling/reference price
- Tax
- Current stock
- reorder level
- supplier
- status

### Website fields
- Publish on Website
- Website title
- slug
- short description
- long description
- images
- website category
- featured
- new arrival
- delivery message
- certification badges
- SEO title
- SEO description
- display order
- public price visibility

For this demo the public price visibility is locked to:

> **Price on Request**

Internal staff may see and enter prices during quotation/sales workflows.

## No duplicate product management

Do not create a second independent Store Product table in the conceptual demo. The Website app edits website-facing fields of the same shared mock product object.

## RFQ model

The public storefront does not have a normal checkout.

Customer journey:

`Browse → Add to Quote → Quote List → Requirement Form → Submit RFQ`

Internal journey:

`New Website RFQ → Review → Convert to Quotation → Enter Current Price → Send/Confirm → Sale → Delivery → Invoice → Payment`

## One-place UX

The staff-facing product must have an app launcher similar in concept to Odoo, but with original Shield Max styling.

Core apps:

- Website
- RFQ Inbox
- CRM / Customers
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

## Visual identity

Use Shield Max software identity only:
- Orange `#F97316`
- Brand amber `#F2A93B`
- Deep slate `#0F172A`
- Ink `#111827`
- White
- Light canvas `#F8FAFC`
- Border `#E2E8F0`
- Inter

Storefront can use dark Shield Max surfaces for drama, but never introduce unrelated pink, green, purple or luxury-cosmetics palettes.

## Demo architecture

This build is frontend-only.

Use shared client state to simulate:
- website publish toggle
- featured toggle
- stock state
- Quote List
- RFQ creation
- RFQ unread notification
- quotation conversion
- sale confirmation
- linked delivery and invoice status

LocalStorage persistence is allowed for demo convenience. Include a visible developer/demo-only **Reset Demo** control.

No backend. No database. No real auth. No paid API. No Shopify.

## Safety from current production

Build the demo in a NEW folder/project.

Do not:
- edit existing ERP production code
- change any database
- run migrations
- connect to live APIs
- reuse production credentials
- upload data to external services

This demo should be safe to delete.
