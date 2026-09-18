# QA Checklist — Client Demo Readiness

## Build
- [ ] `npm install` succeeds
- [ ] `npm run dev` succeeds
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] No missing asset errors
- [ ] No network dependency required for core demo

## Brand
- [ ] Shield Max logo correct
- [ ] Primary orange `#F97316`
- [ ] Brand amber `#F2A93B` used sparingly
- [ ] Deep slate / white / light slate palette
- [ ] Inter used
- [ ] No cosmetics palette remains
- [ ] No Odoo branding copied

## Storefront
- [ ] Home visually strong
- [ ] Catalogue filters work
- [ ] Mobile filter drawer works
- [ ] Product detail polished
- [ ] Public product price never appears
- [ ] No price filter
- [ ] No price sorting
- [ ] No subtotal
- [ ] No checkout wording
- [ ] Add to Quote works
- [ ] Quote count updates
- [ ] Quantity editing works
- [ ] RFQ form validation works
- [ ] RFQ success reference generated

## Connection
- [ ] New RFQ appears in internal RFQ Inbox
- [ ] RFQ notification badge increases
- [ ] New RFQ detail contains exactly the selected products
- [ ] Convert to Quotation prefills customer/products
- [ ] Internal prices show 3-decimal KWD
- [ ] Confirm Sale creates visible linked objects
- [ ] Product Website tab edits reflect on storefront
- [ ] Featured toggle affects homepage
- [ ] Publish toggle hides/shows product

## Control Center
- [ ] Launcher looks premium
- [ ] Website app present
- [ ] RFQ Inbox prominent
- [ ] ERP apps present
- [ ] App cards have believable statuses
- [ ] Global search finds product/RFQ/customer
- [ ] Notification tray works
- [ ] Language toggle works for shell

## ERP representation
- [ ] Quotations
- [ ] Sales
- [ ] Products
- [ ] Customers
- [ ] Suppliers
- [ ] Purchases
- [ ] Inventory
- [ ] Delivery
- [ ] Invoices
- [ ] Payments
- [ ] Finance
- [ ] Reports
- [ ] Settings

## Responsive
- [ ] 1600 desktop
- [ ] 1440 desktop
- [ ] 1024 tablet
- [ ] 768 tablet
- [ ] 390 mobile
- [ ] No horizontal overflow
- [ ] No clipped buttons
- [ ] Sticky elements do not cover content
- [ ] Mobile Quote List usable

## Demo reliability
- [ ] Reset Demo works
- [ ] Refresh does not destroy presentation unexpectedly
- [ ] No infinite spinner
- [ ] No dead primary CTA
- [ ] Every route in pitch flow loads instantly
- [ ] No accidental production links
