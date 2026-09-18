# Antigravity Workflow

## Phase 0 — Safety

1. Create a **new folder** named `shieldmax-unified-demo`.
2. Do not modify the existing Shield Max ERP project.
3. Do not connect to any API/database.
4. Copy only safe visual assets needed for the demo.
5. Keep all mock data inside the demo project.

## Phase 1 — Foundation

Create:
- React
- TypeScript
- Vite
- Tailwind
- React Router
- Lucide
- Zustand or Context

Establish design tokens first.

Build:
- StorefrontLayout
- StaffLayout
- AppLauncher
- demo store
- route structure

Do not start by creating dozens of pages independently.

## Phase 2 — Shared demo state

Create one `DemoStore` containing:
- products
- customers
- quoteList
- rfqs
- quotations
- sales
- deliveries
- invoices
- notifications
- websiteConfig

Core actions:
- addToQuote()
- removeFromQuote()
- updateQuoteQty()
- submitRFQ()
- markRFQRead()
- convertRFQToQuotation()
- updateQuotationPrice()
- confirmQuotation()
- updateWebsiteProduct()
- toggleProductPublished()
- toggleFeatured()
- resetDemo()

Persist to localStorage for presentation convenience.

## Phase 3 — Storefront

Build in this order:
1. Header / utility bars
2. Home
3. Catalogue
4. Product Card
5. Product Detail
6. Quote List
7. RFQ Form
8. RFQ Success
9. Mobile polish

Use the supplied storefront reference ZIP for density and layout quality, adapted to Shield Max.

## Phase 4 — Control Center

Build:
1. App launcher
2. global search
3. notification tray
4. recent activity
5. app cards with status

This should be the strongest staff screen.

## Phase 5 — Website Admin

Build:
1. Website Dashboard
2. Product web view
3. Product detail → Website tab
4. Website Studio / homepage section editor
5. Live Preview
6. RFQ Inbox

Connect changes to storefront state.

## Phase 6 — ERP pitch flow

Implement polished:
- RFQ detail
- quotation create/edit
- sale confirmation
- inventory linkage
- delivery link
- invoice link

Then add representative pages for:
- customers
- suppliers
- purchases
- payments
- finance
- reports
- settings

## Phase 7 — Connected behavior verification

Verify:
- Website publish toggle changes storefront.
- Featured toggle changes homepage.
- New storefront RFQ appears internally.
- Notification count increments.
- RFQ converts to quotation.
- Prices only appear after conversion.
- Confirming quotation creates linked records.

## Phase 8 — Visual QA

Compare against:
- Shield Max existing ERP visual language
- supplied storefront reference layouts

Check at:
- 1600px
- 1440px
- 1024px
- 768px
- 390px

## Phase 9 — Demo hardening

- make all pitch buttons deterministic
- seed consistent mock data
- add Reset Demo
- remove console warnings
- remove placeholder text
- ensure no live API calls
- ensure refresh restores demo state
- run production build

## Phase 10 — Handoff

Provide:
- README
- run commands
- demo credentials if login screen exists
- demo path
- 5-minute presentation flow
- list of mocked functionality
