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

### Phase B: Data & Database (The Magic Library)
We have successfully extracted the raw data from the site export and established a structured database.
1. **Extraction:** Parsed the Canva JSON to retrieve 29 unique locations across 7 categories.
2. **Database:** Created a SQLite database `red_as_death.db`.
3. **Schema:** Implemented a `haunts` table using SQL:
   ```sql
   CREATE TABLE haunts (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     category TEXT NOT NULL,
     description TEXT
   );
   ```

### Phase C: Frontend Scaffolding
1. **Export Designs:** Use the Stitch output (HTML/CSS components) as a reference for styling.
2. **Setup Theme Provider:** Implement a global theme using the hex codes and font families defined above.
3. **Asset Migration:** Upload custom images into the app's `assets` directory.

### Phase D: Navigation & Logic
Implement a **Stack** or **Tab** navigation system that queries the SQLite database to populate the lists dynamically.

---

## 3. The "Magic Toy Box" Summary (ELI3)

Imagine we're building a special **Magic Toy Box** for all our friends who like dark colors and cool stories! Here is how we make it:

1.  **Pick the best blocks:** First, we need to pick the right Lego blocks (Framework) that work on every kind of phone.
2.  **Paint it spooky:** We take our favorite red and black paint and make the toy box look just like our drawings (Design System). No round corners—everything stays sharp and cool!
3.  **Add the stickers:** We take all the pretty pictures we made and stick them on the walls (Assets).
4.  **The Magic Library:** We built a special library inside the toy box! Inside the library is a big book (Database) that remembers every single place—like the *Voodoo Lounge* and the *Vampire Café*. We used a special magic language called **SQL** to tell the book exactly where to put each name so we never lose them.
5.  **Make the secret doors:** We add big buttons that act like secret doors (Navigation). When you push one, the toy box asks the Magic Library where to go, and then *ZAP!* you're in a new room!
6.  **The Magic List:** If we find a new spooky place, we just tell the Magic Library, and it writes it down in its big book instantly!

And then, *POOF!* Our Magic Toy Box is ready for everyone to play with on their phones!
