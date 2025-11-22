## Blind Pixels Studio Landing Page

This repo contains the Astro-based landing page for **Blind Pixels Studio**. It showcases accessibility-focused apps (like **See My Eyes**, **AI Board Game Rules**, and **Video Cursor Tracker**), along with donation and contact flows.

The apps shown on the homepage are driven by a JSON config file so you can add or update apps without touching layout code.

---

## Tech Stack

- [Astro 5](https://astro.build/) (`output: "server"`)
- [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)
- Tailwind 4 (via `@tailwindcss/vite`)
- Deployed on Vercel using [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/)
- Contact form email delivery via [Resend](https://resend.com/)

---

## Adding a New App to the Homepage

The app grid on the homepage is powered by `src/data/apps.json`. Each entry in that file becomes a card in the "Apps" section.

### 1. App config schema

Each app object in `src/data/apps.json` looks like this:

```jsonc
{
	"id": "see-my-eyes",              // URL-safe identifier, also used for anchors
	"title": "See My Eyes",           // Display name shown on the card
	"description": "Short summary...", // One- or two-sentence description
	"platform": "iOS",                // Label badge (e.g. "Web", "iOS", "Windows", "macOS")
	"comingSoon": false,               // true = show "Coming Soon" badge
	"primary": {
		"href": "/see-my-eyes",        // Primary action link (internal or external)
		"label": "Learn more"           // Primary button label
	},
	"secondary": {
		"href": "/privacy/see-my-eyes", // Secondary link (usually a privacy policy)
		"label": "Privacy Policy"        // Secondary link label
	}
}
```

How each field is used on the homepage (`src/pages/index.astro`):

- `title` — main heading on the card.
- `description` — body text under the title.
- `platform` — shown as a small badge (e.g. **Web**, **iOS**, **Windows**).
- `comingSoon: true` — renders a **"Coming Soon"** badge next to the platform. The buttons are still clickable; this is only a visual flag.
- `primary.href` + `primary.label` — main call-to-action button on the card. Opens in a new tab.
- `secondary.href` + `secondary.label` — secondary text link (usually pointing to an app-specific privacy page).

### 2. Add a new app entry

1. Open `src/data/apps.json`.
2. Add a new object to the array, following the existing format. For example:

```jsonc
{
	"id": "my-new-app",
	"title": "My New App",
	"description": "A short description of what this app does and who it's for.",
	"platform": "Web",
	"comingSoon": true,
	"primary": {
		"href": "/my-new-app",          // or an external URL like "https://example.com"
		"label": "Learn more"
	},
	"secondary": {
		"href": "/privacy/my-new-app",
		"label": "Privacy Policy"
	}
}
```

3. Ensure the JSON array remains valid:
	 - Commas between objects
	 - Matching braces and brackets

After you save the file and restart the dev server (if needed), the new app card will appear automatically on the homepage.

### 3. (Optional) Create an app detail page

If your `primary.href` points to an internal route (e.g. `/see-my-eyes`), create a corresponding Astro page:

1. Add a new file under `src/pages`, for example:
	 - `src/pages/my-new-app.astro`
2. Use one of the existing app pages as a template, such as:
	 - `src/pages/see-my-eyes.astro`
	 - `src/pages/video-cursor-tracker.astro`

Keep styles and layout consistent with the existing detail pages for a cohesive experience.

### 4. (Optional) Create an app-specific privacy policy page

If your `secondary.href` points to a path like `/privacy/my-new-app`, create:

1. A new file under `src/pages/privacy`:
	 - `src/pages/privacy/my-new-app.astro`
2. Use an existing app privacy page as a starting point:
	 - `src/pages/privacy/see-my-eyes.astro`
	 - `src/pages/privacy/ai-board-game-rules.astro`
	 - `src/pages/privacy/video-cursor-tracker.astro`

Update:

- The app name in the heading and metadata.
- The "Last updated" date if needed.
- The content to accurately describe what data your app collects (if any), how it’s used, and user rights.

If your app collects **no** data and runs fully locally, keep the wording similar to **See My Eyes** or **Video Cursor Tracker**. If it calls external APIs or stores user data, mirror the more detailed structure from **AI Board Game Rules**.

### 5. Testing your changes locally

From the project root:

```bash
npm install    # only needed once
npm run dev    # start Astro dev server
```

Then open the printed localhost URL (typically `http://localhost:4321`) and:

- Confirm the new app appears in the app grid.
- Click the primary button to verify the detail page or external link.
- Click the secondary link to verify the privacy page (if configured).

For a production-style check:

```bash
npm run build
npm run preview
```

This builds the site and serves the production output locally.

---

## Environment Variables (Contact Form)

The contact form uses [Resend](https://resend.com/) to send emails. Configure these in your `.env` file (not committed to git):

```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_FROM_EMAIL=no-reply@feedback.blindpixelsstudio.com
```

On Vercel, set the same variables under **Project → Settings → Environment Variables**.

---

## Deployment Notes (Vercel)

The project is configured for Vercel using the official Astro adapter:

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	output: 'server',
	adapter: vercel(),
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
```

Vercel project settings:

- Framework preset: **Astro**
- Build command: default (`npm run build`)
- Output directory override: **disabled** (Vercel auto-detects `.vercel/output`)

Pushing to the `main` branch will trigger a new deployment.

---

## Summary

To add or update apps on the homepage, you generally only need to:

1. Edit `src/data/apps.json` and add/update an app object.
2. Optionally create:
	 - A detail page under `src/pages/<id>.astro`.
	 - A privacy policy under `src/pages/privacy/<id>.astro`.
3. Run the dev server locally to verify.
4. Commit and push your changes to deploy.

This keeps the marketing layout stable while letting you iterate quickly on the app catalog and copy.
