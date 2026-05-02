# Red as Death: Mobile App Transition Strategy

To turn the "Red as Death" Canva website into a mobile app, I have initiated a design project using **Stitch**, which provides a structured way to bridge the gap between design and code.

## 1. Design & Theming (Completed)
I have created a mobile-focused design system and generated the following core screens:
- **Home Screen:** High-contrast gothic entry point.
- **The Exile List (86'ed List):** Categorized list of places to avoid.
- **Vampiric Libations (Bars):** Curated local haunts.
- **Cursed Cuisines (Restaurants):** Dining destinations.
- **The Midnight Market (Shops):** Gothic retail.
- **The Forbidden Grimoire (Magic/Occult):** Esoteric resources.
- **Velvet Shadows (Community):** Social hub for the alternative scene.
- **The Devil's Detail (Lagniappe):** Tips and secret info.

**Design System Tokens:**
- **Primary Color:** #8B0000 (Arterial Red)
- **Background:** #000000 (Pitch Black)
- **Typography:** Newsreader (Serif) for headlines, Inter (Sans-Serif) for labels.
- **Shapes:** Sharp edges (0px corner radius) to maintain an aggressive, alternative feel.

## 2. Straightforward Implementation Path

To move from these designs to a functional mobile app, follow these steps:

### Phase A: Framework Selection
Since the requirement is **platform-agnostic**, I recommend using a cross-platform framework:
- **React Native:** Ideal for a performant, "native-feel" app.
- **Flutter:** Excellent for highly custom, pixel-perfect designs like this gothic theme.

### Phase B: Frontend Scaffolding
1. **Export Designs:** Use the Stitch output (HTML/CSS components) as a reference for styling.
2. **Setup Theme Provider:** Implement a global theme (e.g., using Styled Components or Flutter Theme) using the hex codes and font families defined above.
3. **Asset Migration:** Upload your custom images (from Canva) into the app's `assets` directory.

### Phase C: Navigation
Implement a **Stack** or **Tab** navigation system.
- Use a **Bottom Navigation Bar** for quick switching between the Home and key categories.
- Use **Stack Navigation** for moving from category lists to individual detail pages.

### Phase D: Content Management
For an "info app," consider using a headless CMS (like Contentful or Strapi) or a simple JSON configuration to manage the lists of bars, restaurants, and shops. This allows you to update the "Exile List" or "Midnight Market" without redeploying the app.

---
*Designs are currently hosted in the Stitch Project ID: 9706101377096851256*
