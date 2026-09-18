# AGENTS.md — Antigravity Operating Rules

You are building a sales demo, not production software.

## Primary objective

Create a polished, connected Shield Max frontend demo that makes a client immediately understand:

> “From one Shield Max platform I can control my website, catalogue, quote enquiries and the entire ERP.”

## Before coding

Read:
- `PROJECT_IDENTITY.json`
- `SOURCE_AUDIT.md`
- `brain.md`
- `PRD.md`
- `DESIGN_SYSTEM.md`
- `INFORMATION_ARCHITECTURE.md`
- `DEMO_EXPERIENCE.md`
- `MOCK_DATA_SPEC.md`
- `workflow.md`

Inspect the supplied reference assets.

## Hard constraints

- New standalone demo project only.
- Frontend only.
- No backend.
- No database.
- No Shopify.
- No paid API.
- No production API.
- No production credentials.
- Do not modify the existing Shield Max ERP source.
- Keep public product prices hidden.
- KWD prices may appear internally and must use 3 decimals.
- Use Shield Max visual tokens only.
- Support desktop and mobile storefront.
- Staff console is desktop-first but responsive.
- No dead primary buttons in the pitch flow.
- No infinite loading states.
- No console errors.
- No horizontal overflow.
- No lorem ipsum.
- Use realistic Shield Max safety/PPE mock data.
- Do not copy Odoo branding. Use only the app-launcher concept.
- Do not copy the cosmetics reference brand. Use only its structural UI/UX strengths.

## Implementation discipline

Create reusable components and a central demo store.

Do not put the entire app in `App.tsx`.

Suggested structure:

```text
src/
  app/
  components/
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

## Definition of success

A presenter must be able to demonstrate the complete core story in under 5 minutes without explaining missing functionality.

The interface itself should make the connection obvious.
