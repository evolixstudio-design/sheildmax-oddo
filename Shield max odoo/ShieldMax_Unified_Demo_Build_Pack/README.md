# Shield Max Unified Business Platform — Demo Build Pack

This pack is the starting point for an Antigravity build of a **frontend-only, high-fidelity client demo** for Shield Max Safety Kuwait.

The demo must prove one idea visually:

> **One Shield Max platform controls the public storefront, website content, product catalogue, quote requests, customers, quotations, sales, inventory, purchases, deliveries, invoices, payments, finance and reporting.**

This is **not** a production migration and must not replace or modify the existing Shield Max ERP yet. Build the demo as a separate project using mock/local data.

## What the demo contains

1. **Public Storefront**
   - Premium Shield Max B2B safety catalogue.
   - No public prices.
   - Quote List / RFQ instead of checkout.
   - Uses the information architecture and visual density of the supplied storefront UI/UX reference, but **not its colors or beauty-brand styling**.

2. **Unified Control Center**
   - Odoo-inspired app launcher, but original Shield Max visual design.
   - One staff entry point for Website, RFQs, CRM, Quotations, Sales, Inventory, Purchasing, Delivery, Invoices, Finance, Reports and Settings.

3. **Website Admin / Commerce Control**
   - Products are shared with ERP.
   - Publish/unpublish, feature, categorize, manage images/content, SEO, page sections and navigation.
   - Storefront updates instantly in the demo when settings change.

4. **ERP Demo**
   - Mirrors the existing Shield Max ERP module language and design system.
   - New website RFQs appear in the ERP and can be converted to quotations.
   - Prices are internal only and use **KWD 3-decimal precision**.

## Start here

Read in this order:

1. `PROJECT_IDENTITY.json`
2. `SOURCE_AUDIT.md`
3. `brain.md`
4. `PRD.md`
5. `DESIGN_SYSTEM.md`
6. `INFORMATION_ARCHITECTURE.md`
7. `DEMO_EXPERIENCE.md`
8. `MOCK_DATA_SPEC.md`
9. `workflow.md`
10. `QA_CHECKLIST.md`
11. `MASTER_ANTIGRAVITY_PROMPT.md`

Then give Antigravity the entire folder and paste `MASTER_ANTIGRAVITY_PROMPT.md`.

## Demo principle

Do not impress the client with the number of screens alone. Impress them with **connected behavior**:

**Website product → Quote List → RFQ submission → new RFQ notification → staff review → quotation with current price → confirmed sale → inventory/delivery/invoice.**

A second connected moment should show:

**Website Admin → edit/publish product → Live Preview → same product changes on storefront.**

Those two flows are the core of the demo.
