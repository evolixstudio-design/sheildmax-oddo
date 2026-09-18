# MASTER ANTIGRAVITY PROMPT — SHIELD MAX UNIFIED BUSINESS PLATFORM DEMO

You are a senior product designer and senior frontend engineer.

Your task is to build a **high-fidelity frontend-only sales demo** named:

# SHIELD MAX UNIFIED BUSINESS PLATFORM

This is a client-facing demo for Shield Max Safety Kuwait.

The demo must make the client understand, without needing a technical explanation, that one Shield Max platform can control:

**PUBLIC WEBSITE + WEBSITE ADMIN + PRODUCT CATALOGUE + RFQ ENQUIRIES + CRM + QUOTATIONS + SALES + INVENTORY + PURCHASES + DELIVERIES + INVOICES + PAYMENTS + FINANCE + REPORTS**

The experience should feel comparable in breadth to the “everything in one place” idea people associate with Odoo, but it must be an **original Shield Max interface**. Do not copy Odoo branding, colors or exact component patterns.

---

# 0. READ THE PROJECT DOCUMENTS FIRST

Before writing code, read all files in this build pack in this order:

1. `PROJECT_IDENTITY.json`
2. `SOURCE_AUDIT.md`
3. `brain.md`
4. `PRD.md`
5. `DESIGN_SYSTEM.md`
6. `INFORMATION_ARCHITECTURE.md`
7. `MOCK_DATA_SPEC.md`
8. `DEMO_EXPERIENCE.md`
9. `workflow.md`
10. `QA_CHECKLIST.md`

Also inspect the supplied visual references.

The supplied storefront UI/UX ZIP is a visual/layout reference only. It contains polished desktop/mobile examples of:
- home
- catalogue
- product detail
- no-price quote bag

Borrow:
- information density
- layout strength
- header quality
- filter rail
- product grid discipline
- product detail composition
- no-price quote experience
- bilingual Kuwait-oriented polish

DO NOT borrow:
- its beauty/cosmetics identity
- pink/rose colors
- serif beauty personality
- beauty copy
- exact brand components

The existing Shield Max ERP ZIP is the source of truth for Shield Max's software visual identity and module vocabulary.

---

# 1. SAFETY / PROJECT BOUNDARY

Create a NEW standalone project:

`shieldmax-unified-demo`

DO NOT MODIFY THE EXISTING SHIELD MAX ERP.

This is frontend demo only.

DO NOT:
- create a backend
- create a database
- connect to the existing ERP API
- connect to Shopify
- connect to any production database
- use production credentials
- create migrations
- use paid APIs
- require external services for the pitch flow

Use local mock data and frontend state only.

You may use localStorage to persist demo state across refreshes.

Include a demo-only `Reset Demo` command.

---

# 2. STACK

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Zustand OR React Context for shared demo state

Use existing libraries only when helpful.

Do not over-engineer.

No giant one-file application.

Suggested structure:

```text
src/
  app/
  components/
    common/
    storefront/
    staff/
  design-system/
  layouts/
  pages/
    storefront/
    control-center/
    website-admin/
    erp/
  demo/
    data/
    store/
    flows/
  types/
  utils/
```

---

# 3. SHIELD MAX VISUAL SYSTEM — MANDATORY

The entire demo must look like the current Shield Max software family.

Use these exact core tokens:

```text
Primary Orange: #F97316
Brand Amber:    #F2A93B
Deep Slate:     #0F172A
Ink:            #111827
Canvas:         #F8FAFC
Surface:        #FFFFFF
Border:         #E2E8F0
Muted Surface:  #F1F5F9
```

Font:
`Inter`

Base radius:
`8px`

Visual principles:
- enterprise
- industrial
- premium
- trustworthy
- Kuwait B2B procurement
- clean
- compact
- high-information
- restrained shadows
- crisp borders

Do not use:
- purple SaaS gradients
- random blue branding
- pink/rose reference colors
- glassmorphism everywhere
- oversized rounded “toy” cards
- cartoon illustrations
- massive empty dashboard cards
- generic Shopify styling

The Shield Max logo in `references/shieldmax-logo.png` should be used.

---

# 4. THE PRODUCT IDEA

This demo has THREE connected surfaces, but the staff experiences them as ONE platform.

## Surface A — Public Storefront

Public customer browsing Shield Max PPE.

## Surface B — Website Admin

Staff controls what the storefront displays.

## Surface C — ERP / Business Operations

Staff handles RFQs, quotations, sales, stock, purchasing, delivery, invoices, payments and finance.

The product catalogue is conceptually SHARED.

There must not be “Store Product” and “ERP Product” as unrelated demo objects.

One product contains:
- internal ERP fields
- website presentation fields

---

# 5. CORE CONNECTED DEMO BEHAVIOR

This is the most important requirement.

The demo must visibly support these two end-to-end connections:

## FLOW A — WEBSITE → ERP

1. Visitor browses storefront.
2. Visitor adds products to Quote List.
3. Visitor changes quantities and units.
4. Visitor submits an RFQ.
5. Demo generates RFQ reference.
6. New RFQ appears immediately in staff RFQ Inbox.
7. Staff notification badge increments.
8. Staff opens RFQ.
9. Staff clicks `Create Quotation`.
10. Quotation is prefilled with customer/products/quantities.
11. Staff sees/enters internal KWD pricing.
12. Staff confirms quotation.
13. Demo creates linked sale / delivery / draft invoice states.

## FLOW B — ADMIN → WEBSITE

1. Staff opens Website app.
2. Staff opens shared product.
3. Staff changes website-facing field such as:
   - Featured
   - delivery text
   - description
   - publish status
4. Staff clicks `Save & Preview`.
5. Public storefront reflects the change immediately.

If these flows are not connected in state, the demo is not complete.

---

# 6. PUBLIC PRICING RULE — ABSOLUTE

Shield Max prices fluctuate.

PUBLIC WEBSITE MUST NOT SHOW PRODUCT PRICES.

Default public state:

`PRICE ON REQUEST`

Use language:
- Price on Request
- Request Today's Price
- Add to Quote
- Request Quotation
- Commercial Pricing Prepared on Request

Never show publicly:
- KWD amount
- sale price
- compare-at price
- subtotal
- cart total
- checkout
- price filter
- sort by price

Internal ERP may show KWD prices.

Internal KWD values MUST use 3 decimals:

`18.250 KWD`
`1,842.750 KWD`

---

# 7. PUBLIC STOREFRONT — BUILD THIS BEAUTIFULLY

Routes:

```text
/
 /products
 /category/:slug
 /brand/:slug
 /product/:slug
 /quote-list
 /request-quote
 /quote-success/:rfqNo
 /brands
 /industries
 /about
 /contact
```

## Storefront header

Top utility strip:
- Certified PPE Supplier in Kuwait
- Kuwait delivery
- Call / WhatsApp
- EN / عربي

Main nav:
- Shield Max logo
- Products
- Categories
- Brands
- Industries
- About
- Contact
- strong search field
- Quote List icon + count

Use a dark Shield Max header with orange accent.

No cart icon.

Use a Quote List / clipboard icon.

## Homepage

Create a premium industrial homepage.

Hero content:

Eyebrow:
`SHIELD MAX SAFETY • KUWAIT`

Headline:
`Professional Safety & Protection Equipment`

Supporting copy:
`Certified PPE, industrial safety equipment and project supply for contractors, facilities, oil & gas and procurement teams across Kuwait.`

CTA:
`BROWSE PRODUCTS`
`REQUEST A QUOTE`

Hero visual:
- industrial/worksite safety imagery
- hard hats / PPE / gloves / masks
- strong dark photography
- subtle orange accent
- no generic ecommerce collage

Then sections:

1. Trusted strip
   - Nationwide Kuwait Delivery
   - Certified Products
   - Project & Bulk Supply
   - Procurement Support

2. Shop by Category

3. Featured Safety Products

4. Project Supply
   - Construction
   - Oil & Gas
   - Warehousing
   - Facilities
   - Road Safety

5. Trusted Brands

6. International Standards
   - EN 388
   - EN 166
   - ANSI Z87.1
   - CE

7. Why Shield Max

8. Request a Formal Quotation CTA

Replace “Deals & Offers” with procurement-oriented sections. Do not imply fixed promotional prices.

## Catalogue page

Use the structural quality of the supplied catalogue reference.

Desktop:
- left filter rail
- right results toolbar
- 4-column product grid on wide screens
- compact professional cards

Filters:
- Category
- Brand
- Availability
- Certification
- Industry / Application

Active filters as pills.

Sort:
- Featured
- Newest
- Most Requested
- Name A–Z
- Name Z–A

No price controls.

## Product card

Show:
- product image
- small status/certification badge
- brand
- product name
- SKU
- compact certification/app metadata
- availability
- delivery
- `PRICE ON REQUEST`
- orange `ADD TO QUOTE`
- secondary `VIEW DETAILS`

Use real/realistic Shield Max safety product names.

## Product detail

Desktop layout:
- large image gallery left
- sticky product details right

Right:
- brand
- product name
- Arabic name if available
- SKU
- stock / delivery
- standard badges
- `PRICE ON REQUEST`

Info panel:
`Pricing is prepared according to quantity, availability and current market conditions.`

Controls:
- quantity
- unit: PCS / PAIR / BOX / DOZEN / SET
- `ADD TO QUOTE`
- `ASK ON WHATSAPP`

Accordions/tabs:
- Description
- Specifications
- Certifications
- Applications
- Downloads
- Delivery

Related products below.

## Quote List

Do NOT call it cart.

Page heading:
`YOUR QUOTE LIST`

Use a strong 2-column desktop layout.

Left:
selected products with:
- image
- SKU
- brand
- qty
- unit
- remove

Right sticky summary:
- Products selected
- Total quantity
- Delivery region
- `Commercial Pricing: Prepared on Request`
- `CONTINUE TO RFQ`

No subtotal.

No total price.

## RFQ form

Fields:
- Company Name
- Contact Person
- Mobile / WhatsApp
- Email
- Delivery Area
- Required Date
- Project / Site
- LPO / Reference
- Notes

Show selected products beside form.

Include one-click demo autofill.

Submit:
`SEND QUOTATION REQUEST`

On submit:
- 300–600ms polished simulated processing
- create RFQ object
- push internal notification
- clear quote list
- navigate success page

Success page:
- large success mark
- `Quotation Request Received`
- RFQ number
- expected response copy
- buttons:
  - Continue Browsing
  - View Request Summary
  - `Open Staff Control Center` (demo-only shortcut)

---

# 8. STAFF ENTRY — THE WOW SCREEN

Route:
`/control`

Do NOT immediately show a boring ERP sidebar.

First show a premium **Shield Max Control Center app launcher**.

Top dark band:
- Shield Max logo
- `Control Center`
- greeting
- global search
- notifications
- EN / عربي
- user avatar

Hero line:

`Your website and business operations. One platform.`

Below:
app grid.

App cards:
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

Each card:
- Lucide icon
- app name
- 1-line purpose
- relevant status

Examples:
- Website — Live
- RFQ Inbox — 3 New
- Quotations — 8 Open
- Inventory — 12 Low Stock
- Delivery — 5 Pending
- Payments — 7 Outstanding

Website and RFQ Inbox should have slightly higher visual prominence.

Below app grid:
- Recent Activity
- Business Snapshot
- Today's Action Center

Keep it compact and credible.

---

# 9. STAFF MODULE SHELL

When an app is opened, transition into the familiar Shield Max ERP shell.

Use:
- 240px white sidebar
- 60px top header
- `#F8FAFC` background
- orange active nav rail
- compact white cards
- thin borders
- Inter
- breadcrumb
- notification icon
- app switcher icon in top-left so user can return to launcher

This should visibly relate to the existing Shield Max ERP.

---

# 10. WEBSITE APP — THIS IS NEW AND IMPORTANT

Routes:

```text
/control/website
/control/website/studio
/control/website/products
/control/website/products/:id
/control/website/categories
/control/website/brands
/control/website/media
/control/website/navigation
/control/website/pages
/control/website/seo
/control/website/settings
```

## Website Dashboard

Header:
`Website`

Status:
`LIVE`

Primary buttons:
- `OPEN LIVE STOREFRONT`
- `EDIT HOMEPAGE`

KPIs:
- Published Products
- Hidden Products
- RFQs This Week
- Quote Conversion
- Product Views

Recent:
- RFQs
- website changes
- most viewed products

## Website Studio

Make this visually impressive.

Three-panel experience:

LEFT:
Homepage sections:
- Hero
- Categories
- Featured Products
- Project Supply
- Brands
- Standards
- Why Shield Max
- Quote CTA

Allow drag-like reorder via up/down controls.

CENTER:
live scaled preview of homepage.

RIGHT:
selected section settings:
- visibility
- heading
- subheading
- CTA
- image choice
- product/category selection

Top:
- Desktop
- Tablet
- Mobile
- Save Draft
- `PUBLISH DEMO`
- Open Live Store

This is frontend simulation only.

## Shared Website Product table

Columns:
- image
- product
- SKU
- brand
- category
- ERP stock
- website status
- featured
- updated
- action

Filter:
- Published
- Hidden
- Featured
- Low Stock

## Shared Product detail

Tabs:

`GENERAL | INVENTORY | PURCHASE | SALES | WEBSITE | ACTIVITY`

The key WEBSITE tab:

- Publish on Website toggle
- Website title
- slug
- short description
- full description
- product images
- website category
- featured toggle
- delivery message
- certifications
- applications
- SEO title
- SEO description

Public Pricing block:
`Public pricing: HIDDEN`
`Sales are handled by quotation.`

Buttons:
- Save Changes
- Save & Preview
- View Live Product

When changing this product, update the public storefront state.

---

# 11. RFQ INBOX

Route:
`/control/rfqs`

Page must clearly show website-originating demand.

Top KPI:
- New
- Reviewing
- Converted
- Won

Table:
- RFQ No
- Date
- Source
- Company
- Contact
- Products
- Qty
- Required Date
- Assigned To
- Status
- Action

Source badges:
- Website
- WhatsApp
- Manual

The RFQ created from the storefront must be first and visually marked `NEW`.

## RFQ detail

Header:
`RFQ-2026-xxxx`
Source: Website

Customer card:
- company
- person
- phone
- email
- delivery
- project

Product table:
- image
- product
- SKU
- qty
- unit
- stock availability

No public pricing copied.

Requirement Notes card.

Timeline:
- Website Request Received
- Awaiting Review
- Sales Review Started
- Quotation Created

Primary:
`CREATE QUOTATION`

Secondary:
- Assign
- Contact Customer
- Mark Reviewing

---

# 12. QUOTATION CREATION

When clicking Create Quotation:

Route:
`/control/quotations/new?rfq=...`

Prefill:
- customer
- date
- validity
- products
- quantities
- units
- source RFQ

Now and only now show commercial pricing.

Columns:
- Product
- SKU
- Qty
- Unit
- Unit Price KWD
- Discount
- Tax
- Amount

Use 3 decimals.

Example:
`6.750 KWD`

Show:
- Subtotal
- Discount
- Tax
- Grand Total

Actions:
- Save Draft
- Mark Sent
- `CONFIRM SALE`

On Confirm Sale show a polished confirmation sheet:

`Sale confirmed`

Created:
- Sales Order SO-2026-xxxx
- Stock Reservation
- Delivery Order DO-2026-xxxx
- Draft Invoice INV-2026-xxxx

Buttons:
- Open Sale
- Open Delivery
- Open Invoice

These are demo linked records.

---

# 13. ERP REPRESENTATIVE SCREENS

Create polished, believable list/detail screens for:

## Dashboard
- Sales
- inventory
- receivables
- quotations
- action center

## CRM / Customers
- customers list
- company detail
- outstanding amount
- recent quotations/sales

## Products
- master product list
- categories
- brands
- units

## Inventory
- stock overview
- low stock
- movement table

## Purchases
- purchase orders
- supplier
- status

## Sales
- sale orders/invoices
- customer
- amount
- status

## Delivery
- delivery orders
- due date
- status

## Invoices
- invoice list
- totals
- payment state

## Payments
- payment list
- allocation

## Finance
- dashboard
- accounts
- expense snapshot
- ledger-style table

## Reports
- report cards
- sales trend
- inventory snapshot
- receivables aging

## Settings
- company
- branding
- language
- users
- document settings
- website settings

Do not waste time building production CRUD depth everywhere. Make the visible state polished and interactive enough for the client to believe the architecture.

---

# 14. GLOBAL SEARCH

Top control search should search demo entities.

Placeholder:
`Search products, RFQs, customers, quotations...`

Typing:
`95248`
shows:
- Product — SAFETY GLOVES Red Wing 95248

Typing:
`RFQ`
shows RFQs.

Typing customer name shows CRM result.

Click result routes correctly.

This strongly communicates “one system”.

---

# 15. NOTIFICATIONS

Notification tray should support:
- New Website RFQ
- Low stock
- Delivery due
- Quotation confirmed

After storefront RFQ submission, notification must appear immediately.

Example:
`New website RFQ`
`Kuwait Integrated Contracting W.L.L. requested 3 products / 105 units.`

---

# 16. DEMO DATA

Create 36–48 realistic Shield Max PPE products.

Use categories:
- Hand Protection
- Eye & Face Protection
- Head Protection
- Respiratory Protection
- Hearing Protection
- Foot Protection
- Protective Clothing
- Fall Protection
- Traffic & Road Safety
- Welding / Gas Equipment
- Sign Boards
- Accessories

Use representative names from `MOCK_DATA_SPEC.md`.

Use client-owned/available product imagery if accessible.

If using imagery from the current Shield Max site:
- copy it into local demo assets
- do not hotlink at runtime

Create:
- 12 customers
- 8 RFQs
- 8 quotations
- 8 sales
- 8 deliveries
- 8 invoices
- 8 payments
- inventory alerts
- dashboard metrics

No lorem ipsum.

---

# 17. BILINGUAL SUPPORT

Include `EN | عربي`.

At minimum:
- navigation switches
- layout direction mirrors
- key button translations exist
- shell remains visually stable in RTL

Do not block the build on translating every long description.

---

# 18. RESPONSIVE DESIGN

Storefront:
- first-class desktop and mobile

Test:
- 1600
- 1440
- 1024
- 768
- 390

Mobile:
- compact header
- menu drawer
- filter drawer
- 2-column or 1-column product layout as appropriate
- sticky Quote List action where useful
- no clipped content

Staff:
- desktop-first
- sidebar becomes drawer below desktop
- tables can collapse into cards
- app launcher adapts to fewer columns

No horizontal overflow.

---

# 19. DEMO-ONLY PRESENTER TOOLS

Add a discreet demo menu, not prominent.

Actions:
- Reset Demo
- Storefront
- Control Center
- New RFQ
- Website Product
- Quotation
- Toggle language

This is for reliable client presentation.

---

# 20. POLISH REQUIREMENTS

Must include:
- empty states
- loading states shorter than 600ms
- toasts
- confirmation dialogs
- hover states
- keyboard focus
- accessible labels
- status badges
- realistic timestamps
- breadcrumb
- search
- filters
- mobile states

Avoid:
- infinite spinners
- fake buttons that do nothing in core flow
- excessive animation
- inconsistent page spacing
- generic placeholder avatars everywhere

---

# 21. PRIMARY DEMO SCRIPT MUST WORK EXACTLY

Verify this sequence before handoff:

```text
1. Open public homepage
2. Open catalogue
3. Add 3 products to Quote List
4. Open Quote List
5. Submit RFQ using demo autofill
6. See RFQ success
7. Open Control Center
8. See new notification + RFQ Inbox badge
9. Open the newly created RFQ
10. Click Create Quotation
11. See customer/products prefilled
12. Enter/accept internal KWD pricing
13. Confirm Sale
14. See linked Sale / Delivery / Invoice
15. Return to launcher
16. Open Website
17. Open a Product → Website tab
18. Change Featured or Delivery text
19. Save & Preview
20. Confirm storefront changed
21. Return to launcher
```

If any one of these steps is broken, fix it before declaring complete.

---

# 22. FINAL VISUAL CHECK

The final demo should look like one coherent product family:

PUBLIC STOREFRONT:
premium industrial Shield Max, influenced structurally by the supplied storefront reference.

CONTROL CENTER:
original Odoo-like app-launcher idea in Shield Max identity.

ERP / ADMIN:
clearly derived from the existing Shield Max ERP:
- Inter
- white surfaces
- light slate canvas
- orange interaction color
- compact enterprise density
- thin borders
- 8px radius

The client should feel:

> “My website is not separate anymore. My product, enquiry, quotation, stock and finance workflow all live here.”

---

# 23. HANDOFF REQUIREMENTS

Before completion run:

```bash
npm install
npm run dev
npm run build
```

Confirm:
- no TypeScript errors
- no console errors
- no missing routes
- no infinite loaders
- no horizontal overflow
- no public prices
- no live API dependencies

Create project README with:
- what the demo is
- how to run
- frontend-only disclaimer
- mock-data disclaimer
- demo login if used
- primary 5-minute pitch flow
- reset-demo instructions

Do not call this production-ready.

Deliver a polished client demo.
