# Source Audit — What the Demo Must Respect

## 1. Existing Shield Max ERP ZIP

The existing ERP source was inspected for visual and product architecture cues.

### Current frontend stack and shell

The ERP contains:
- React + TypeScript + Vite frontend
- Tailwind CSS
- Lucide icons
- Shadcn-style reusable UI components
- Inter font
- English / Arabic localization with RTL support
- Responsive 240px sidebar layout
- 60px top header
- White sidebar and cards
- `#F8FAFC` page canvas
- Primary UI action orange around `#F97316`
- 8px base radius
- restrained shadows and slate borders

### Existing Shield Max brand theme

The ERP code uses:
- UI primary orange: `#F97316`
- document/brand accent: `#F2A93B`
- black / dark charcoal for strong document headers
- white and light slate surfaces
- dark mode in the slate/navy family around `#0F172A`

The demo must use these Shield Max colors. **Do not reuse the pink/rose/cream palette from the storefront reference ZIP.**

### Existing ERP modules present in the frontend

The current ERP routes include:
- Dashboard
- Users
- Settings
- Categories
- Brands
- Units
- Products
- Customers
- Suppliers
- Purchases
- Sales
- Payments
- Delivery Orders
- Quotations
- Finance Dashboard
- Accounts Master
- Account Ledger
- Transfers
- Expenses
- Salary
- Finance Reports
- Finance Audit Logs
- Document viewer / print engine

The demo should not invent a completely unrelated ERP vocabulary. It should make the website/admin additions feel like a natural extension of this system.

### Existing business rules worth preserving

- KWD monetary values use **3 decimal places**.
- English and Arabic are first-class interface languages.
- Product data already belongs naturally inside the ERP.
- Quotations, sales, delivery orders, payments and finance are already core concepts.
- Public website price visibility must be separated from internal ERP pricing.

---

## 2. Storefront UI/UX Reference ZIP

The supplied UI/UX reference contains high-fidelity desktop/mobile examples for:
- home page
- catalogue / shop page
- product detail page
- no-price quote-oriented shopping bag
- bilingual Kuwait-oriented navigation

Use it as a **layout and experience reference**, not as a brand reference.

### What to borrow

- premium, high-density desktop header
- strong utility bar
- category-rich navigation
- editorial hero hierarchy
- left filter rail + product grid
- detailed product cards
- strong stock / delivery metadata
- premium product detail two-column layout
- quote-oriented basket structure
- desktop + mobile parity
- clear bilingual information hierarchy
- dense footer and trust blocks
- restrained, professional micro-interactions

### What NOT to borrow

- beauty/cosmetics content
- serif luxury-beauty personality
- pink/rose accent colors
- gift atelier language
- cosmetics-specific filters
- exact logos, wording or visual identity
- exact component copying

### Shield Max adaptation

Translate the reference into an industrial B2B safety experience:
- cosmetics swatches → certifications, sizes, units, standards
- beauty concerns → application / hazard / industry filters
- luxury concierge → procurement support / safety specialist
- shopping bag → Quote List / RFQ Basket
- quote via WhatsApp only → structured RFQ submission plus optional WhatsApp
- beauty badges → CE / EN / ANSI / stock / delivery / brand badges
- premium editorial photography → PPE / industrial / worksite visuals

---

## 3. Current public Shield Max site

The live site currently presents Shield Max as a certified PPE supplier in Kuwait and includes categories such as:
- Accessories
- Customise Sign Boards
- Eye & Face Protection
- Fall Protection
- Foot Protection
- Hand Protection

Representative product names include:
- SAFETY GLOVES Red Wing 95248
- SAFETY GLOVES Red Wing 95249
- SAFETY GLOVES Red Wing 95251
- Safety Jogger - PROIMPACT
- Fire Safety Gloves
- Honeywell North 7700 Series Half Mask
- Honeywell BW MicroClip
- Safety Vest Premium
- SR 350/360 Regulators
- Safety Jogger Tactic

Use realistic safety-industry mock data based on this kind of catalogue. Avoid generic lorem ipsum.

The demo should remove public price filtering and all checkout/subtotal language because public pricing will be quotation-driven.
