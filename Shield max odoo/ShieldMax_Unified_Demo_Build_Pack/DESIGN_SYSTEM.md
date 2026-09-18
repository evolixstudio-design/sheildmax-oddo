# Shield Max Demo Design System

## Design objective

The demo should feel like an established Kuwait B2B industrial platform — not a startup template, not a Shopify theme and not a cosmetics site.

The storefront reference ZIP is valuable for its premium density and responsive structure. Translate that structure into Shield Max's existing software language.

---

## 1. Core colors

### Brand / interaction
- **Primary Orange:** `#F97316`
  - primary CTA
  - active navigation indicator
  - focus rings
  - selected filters
  - notification accents
  - app tile highlights

- **Brand Amber:** `#F2A93B`
  - restrained brand highlight
  - hero eyebrow
  - certification ornament
  - logo-adjacent emphasis
  - never compete with primary orange on every control

### Neutral
- **Deep Slate:** `#0F172A`
- **Ink:** `#111827`
- **Text Secondary:** `#64748B`
- **Canvas:** `#F8FAFC`
- **Surface:** `#FFFFFF`
- **Border:** `#E2E8F0`
- **Muted Surface:** `#F1F5F9`

### Status colors
Use status colors only for status:
- success green
- warning amber
- error red
- info blue

Do not introduce decorative unrelated colors.

---

## 2. Typography

### Staff system
Use **Inter** exactly as the existing ERP.

Recommended:
- App title: 24–30 / 700
- Page title: 22–26 / 700
- Section title: 16–18 / 600
- Body: 14–16 / 400
- Table: 13–14 / 400/500
- Label: 12–13 / 500
- Micro status: 11–12 / 600

### Storefront
Still use Inter to keep the unified brand language.

To gain premium character use:
- large controlled scale
- strong weight contrast
- uppercase micro labels
- tracking
- whitespace
- photography

Do **not** add Bodoni/beauty serif fonts from the reference.

---

## 3. Shape language

Existing ERP base radius is 8px.

Use:
- buttons: 6–8px
- inputs: 6–8px
- cards: 8–12px
- chips: 999px only for badges/filter pills
- app launcher tiles: 12px maximum

Avoid:
- giant 24–32px SaaS bubbles
- excessive glassmorphism
- floating blobs
- neon gradients

---

## 4. Staff shell

Keep close to existing Shield Max ERP:

- 240px desktop sidebar when inside a module
- white sidebar
- 60px header
- `#F8FAFC` page background
- white cards
- thin slate borders
- orange active nav strip
- compact controls
- minimal shadows

### App Launcher exception

The Control Center home should be more visual than the existing sidebar.

Recommended:
- dark `#0F172A` top band
- Shield Max logo
- greeting + global search
- white/very light canvas below
- 4–5 app cards per row desktop
- compact icon block in orange/slate
- each app card shows one operational number/status
- cards are not oversized

Clicking an app enters the familiar sidebar shell.

---

## 5. Storefront direction

Use the supplied storefront UI/UX ZIP as structural inspiration.

### Header
- thin utility strip
- dark Shield Max main nav
- logo left
- category/product search
- navigation
- Quote List with badge
- language switcher
- staff login unobtrusive

### Homepage
Use a powerful industrial hero:
- dark worksite image / PPE image
- orange eyebrow
- large white headline
- two CTAs
- optional trusted standards ribbon

Then alternate:
- light category section
- dark featured/project supply section
- light brands/standards
- dark CTA

### Catalogue
- desktop left filter rail
- 4-column product grid around 1440–1600px
- 3 columns at smaller desktop
- mobile filter drawer
- compact product metadata
- image-first cards
- no prices

### Product Card hierarchy
1. image
2. badge(s)
3. brand
4. product name
5. SKU
6. certification / application microcopy
7. stock/delivery
8. `PRICE ON REQUEST`
9. `ADD TO QUOTE`

### Product Detail
Desktop:
- 58–62% media area
- 38–42% sticky details area
- image gallery
- product/brand/SKU
- stock
- standards
- Price on Request panel
- quantity + unit
- Add to Quote
- Ask on WhatsApp
- accordions for specifications/certifications/delivery

### Quote List
Take the strong 2-column structure from the supplied no-price bag reference:
- left: selected products
- right: sticky RFQ summary
- no subtotal
- show `Commercial Pricing: Prepared on Request`
- prominent orange `CONTINUE TO RFQ`

---

## 6. Website Admin

The Website app should feel like an ERP app, not a separate CMS brand.

Recommended home:
- live status
- `Open Live Store`
- `Edit Homepage`
- `Products`
- `RFQ Inbox`
- KPIs

Website Studio:
- left: section list
- center: scaled live homepage canvas
- right: selected section settings
- top: Desktop / Tablet / Mobile preview + Save Draft + Publish Demo

This is a visual demo only. Use local state.

---

## 7. Micro-interactions

Use tasteful 150–220ms transitions.

Good:
- card hover 2px lift
- border/accent changes
- button press
- sidebar active animation
- live preview update toast
- RFQ notification pulse once
- count badge transition
- skeleton under 500ms if necessary

Avoid:
- constant motion
- parallax everywhere
- heavy 3D
- long loaders
- flashy gradients

---

## 8. Photography / product imagery

Prefer real Shield Max product images and industrial safety imagery owned by the client when available.

If assets are copied from the current client site for the demo:
- store them locally
- do not hotlink at runtime
- optimize dimensions
- use neutral backgrounds

No cosmetics imagery.

---

## 9. Responsive targets

- 1440/1600 desktop presentation is priority.
- Storefront must be excellent at 390px mobile.
- Website Admin can simplify at mobile.
- ERP should remain usable at tablet/mobile.
- No horizontal overflow anywhere.

---

## 10. Visual quality bar

The client should be able to mistake the demo for a nearly finished product.

Every visible state in the main pitch path must contain believable:
- names
- dates
- quantities
- statuses
- product images
- customer/company data
- KWD pricing internally
- activity timeline
