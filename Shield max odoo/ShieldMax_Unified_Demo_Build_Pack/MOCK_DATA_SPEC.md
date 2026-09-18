# Mock Data Specification

Use realistic Shield Max Kuwait demo data. No lorem ipsum.

## 1. Products

Create 36–48 products across at least these categories:
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

Representative product names:
- SAFETY GLOVES Red Wing 95248
- SAFETY GLOVES Red Wing 95249
- SAFETY GLOVES Red Wing 95251
- SAFETY GLOVES Red Wing 95255
- SAFETY GLOVES Red Wing 95257
- Safety Jogger - PROIMPACT
- Cut-Resistant Safety Jogger Gloves PROCUT
- Fire Safety Gloves
- UVEX Unigrip PL 6628 Safety Glove
- Welding Gloves Ansell 48-216
- Honeywell North 7700 Series Half Mask
- Honeywell North 54001
- Honeywell North N75003L
- Honeywell Mach 1 Noise Blocking Earmuff
- Honeywell BW MicroClip
- Honeywell BW Max XT II
- Safety Jogger Tactic
- Safety Vest Premium
- Safety Jacket Four Pockets with Zip
- Red Wing Coverall FR 61102
- Red Wing Coverall 60140
- SR 350/360 Regulators
- SR 450 Series Cylinder Regulator
- Solar Speed Smiley Radar
- Traffic Light Controller
- Bus Stop Sign Board

### Product shape

```ts
type Product = {
  id: string
  sku: string
  barcode?: string
  name: string
  nameAr?: string
  brand: string
  category: string
  unit: "PCS" | "PAIR" | "BOX" | "DOZEN" | "SET"
  stockQty: number
  reorderLevel: number
  internalPriceKwd: number
  websitePublished: boolean
  featured: boolean
  websiteTitle: string
  slug: string
  shortDescription: string
  description: string
  images: string[]
  certifications: string[]
  applications: string[]
  availability: "IN_STOCK" | "LIMITED" | "ON_REQUEST"
  deliveryText: string
  publicPricing: "REQUEST_QUOTE"
  seoTitle: string
  seoDescription: string
}
```

## 2. Customers

Create 10–14 Kuwait business customers.

Examples:
- Al Sabah Contracting W.L.L.
- Gulf Industrial Services Co.
- Kuwait Facility Solutions
- Al Noor Engineering
- Horizon Oilfield Services
- Capital Warehouse Company
- Safeguard Projects W.L.L.

Fields:
- customer code
- company
- contact
- phone
- email
- area
- credit status
- outstanding
- last sale
- total purchases

## 3. RFQs

Create 8 existing RFQs and allow new ones from storefront.

Example:
- RFQ-2026-0148
- Website
- Al Sabah Contracting W.L.L.
- 4 products
- 180 total units
- Required: 20 Sep 2026
- Status: New

A newly submitted storefront RFQ must be inserted at the top and receive a notification badge.

## 4. Quotations

Create 7–10 quotations.

KWD values must show 3 decimals.

Example:
- QT-2026-0082
- Gulf Industrial Services
- 1,842.750 KWD
- Valid until 22 Sep
- Sent

## 5. Sales / deliveries / invoices

Create linked records so the client can drill into relationships.

Example chain:

```text
RFQ-2026-0139
→ QT-2026-0077
→ SO-2026-0051
→ DO-2026-0046
→ INV-2026-0060
→ Payment pending
```

## 6. Dashboard data

Control Center:
- Website: Live
- Published Products: 301
- New RFQs: 3
- Open Quotations: 8
- Pending Deliveries: 5
- Low Stock: 12
- Outstanding Receivables: 18,420.750 KWD

These are demo values only.

## 7. Demo customer for live submission

Use a prefilled optional demo customer:

- Company: Kuwait Integrated Contracting W.L.L.
- Contact: Ahmed Al-Mutairi
- Mobile: +965 5000 2187
- Email: procurement@example.test
- Delivery Area: Ahmadi
- Project: Workshop PPE Replenishment

The presenter should be able to submit in seconds.
