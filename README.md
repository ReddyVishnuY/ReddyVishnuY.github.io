# Vishnu – Personal Portfolio

This is a lightweight, single‑page portfolio built with **plain HTML5, CSS3, and vanilla JavaScript**. It showcases your background, experience, and skills, and is ready for deployment on GitHub Pages, Netlify, or any static host.

## File Structure

```
├── index.html          # Main HTML page
├── css/style.css      # All styles (variables, layout, responsive rules)
├── js/main.js         # Future interactivity (smooth scroll, accordion)
├── assets/
│   ├── cv.pdf         # Placeholder CV (replace with your own)
│   └── images/        # Add profile or project images here
└── README.md          # This file
```

## How to Deploy

### 1. GitHub Pages
1. Create a new repository on GitHub (e.g., `vishnu-portfolio`).
2. Commit the files to the repository.
3. In Settings → Pages, set the source to the `main` branch and root folder.
4. GitHub will provide a URL like `https://<username>.github.io/vishnu-portfolio/`.

### 2. Netlify
1. Drag‑and‑drop the project folder into the Netlify dashboard.
2. Netlify automatically builds and deploys the static site.

## Customization Tips
- Replace placeholder links (`[ADD LINKEDIN URL]`, `[ADD GITHUB URL]`, etc.) with your actual URLs.
- Update the `assets/cv.pdf` with your PDF resume.
- Add images to `assets/images/` and reference them in the markup.
- For a dark‑theme accent, tweak `--color-accent` in `css/style.css`.

## Accessibility & Responsiveness
- The layout uses a mobile‑first approach and CSS flexbox.
- Semantic elements (`<nav>`, `<section>`, `<footer>`) improve screen‑reader navigation.
- Color contrast meets WCAG AA (dark background with light text). Adjust if needed.
- Keyboard navigation works out of the box; all links/buttons are focusable.

Feel free to fork or clone this repository and expand the portfolio with projects, certifications, or a blog section.

---
Happy coding!