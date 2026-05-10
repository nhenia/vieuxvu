# Vieux Vu - Deployment & Maintenance To-Do List

This document outlines the steps required to successfully deploy and maintain the **Vieux Vu | Red as Death** website.

## 1. Deployment (Hosting)
The site is a static export and can be hosted on any static hosting provider.
- [ ] **Choose a Provider:**
    - **GitHub Pages:** Create a repository, push this code, and enable Pages in settings.
    - **Vercel / Netlify:** Connect your repository for automatic "push-to-deploy" functionality.
- [ ] **SSL/HTTPS:** Ensure your provider handles SSL (most do automatically) to keep the site secure.

## 2. Asset Management
- [ ] **Missing Assets:** Some font and image files were missing from the initial export. These have been silenced (replaced with empty strings) to prevent deployment hangs.
- [ ] **Re-Exporting (Optional):** If you notice missing icons or specific custom fonts, consider re-exporting from Canva and ensuring the `_assets/` folder is fully populated.
- [ ] **Image Optimization:** Run images through a tool like TinyPNG if the site feels slow to load.

## 3. Design System (Red as Death)
The theme is enforced via a `<style>` block in the `<head>` of `index.html`.
- [ ] **Theme Customization:** To change colors, update the CSS variables in the consolidated `<style>` block:
    - `--death-black`: `#000000`
    - `--death-red`: `#8B0000`
- [ ] **Typography:** The site currently uses Google Fonts (Newsreader and Inter). To change fonts, update the `<link>` in the head and the CSS variables.

## 4. Maintenance & Proofreading
- [ ] **Regular Content Updates:** Since the site content is stored in a minified JSON blob inside `index.html`, direct edits can be tricky.
- [ ] **Proofreading:** Automated fixes have been applied for:
    - "Frenchman" -> "Frenchmen"
    - "Hertical" -> "Heretical"
    - "vieux vu" -> "Vieux Vu"
- [ ] **Verify Content:** Regularly check the live site to ensure no "lorem ipsum" or placeholder text remains.

## 5. Known Issues
- **Canva JSON Dependency:** The rendering relies on a large Canva bootstrap script. Do not modify the `<script>` tags at the bottom of the body unless you are familiar with Canva's export structure.
