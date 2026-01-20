# Big Bear Baptist Church Website

This repository contains the static website for Big Bear Baptist Church. Pages are written in vanilla HTML and styled with TailwindCSS via the CDN along with a small custom stylesheet in `assets/css/main.css` and JavaScript helpers in `assets/js/main.js`.

## Structure

- Core pages live in the project root (`index.html`, `mission.html`, `beliefs.html`, `sermons.html`, `serve.html`, `connect.html`, `visit.html`, `leadership.html`, `about.html`, and `food-ministry.html`).
- Shared navigation, footer, and utility scripts are kept consistent across the site.
- Images, styles, and scripts are located in the `assets/` directory.

## Local Preview

Because the site is static, you can open any HTML file directly in a browser. For a closer production match, serve the directory with a simple HTTP server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000` in your browser.

## Editing Tips

- Update service times, address, and contact details from the source of truth before publishing changes.
- When adding new pages, copy an existing file to keep the navigation, footer, and script includes consistent.
- Use the privacy-friendly YouTube `nocookie` embeds and the existing playlists/channel links when embedding videos.
