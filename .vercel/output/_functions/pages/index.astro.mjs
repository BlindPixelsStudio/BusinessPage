import { e as createComponent, k as renderHead, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_D4ioLTkn.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const apps = [
	{
		id: "see-my-eyes",
		title: "See My Eyes",
		description: "An accessibility app that helps people with low vision follow cursors in screen-shares and videos.",
		platform: "iOS",
		comingSoon: false,
		primary: {
			href: "/see-my-eyes",
			label: "Learn more"
		},
		secondary: {
			href: "/privacy/see-my-eyes",
			label: "Privacy Policy"
		}
	},
	{
		id: "ai-board-game-rules",
		title: "AI Board Game Rules",
		description: "A web app that answers board game rule questions in plain language.",
		platform: "Web",
		comingSoon: false,
		primary: {
			href: "https://www.boardgamerules.ai",
			label: "Open app"
		},
		secondary: {
			href: "/privacy/ai-board-game-rules",
			label: "Privacy Policy"
		}
	},
	{
		id: "video-cursor-tracker",
		title: "Video Cursor Tracker",
		description: "A desktop tool that highlights the cursor in videos so it's easier to see during tutorials, meetings, and recordings.",
		platform: "Windows",
		comingSoon: false,
		primary: {
			href: "/video-cursor-tracker",
			label: "Learn more"
		},
		secondary: {
			href: "/privacy/video-cursor-tracker",
			label: "Privacy Policy"
		}
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Blind Pixels Studio crafts accessibility-focused apps and tools."><title>Blind Pixels Studio</title>${renderHead()}</head> <body class="page" data-astro-cid-j7pv25f6> <a class="skip-link" href="#main-content" data-astro-cid-j7pv25f6>Skip to main content</a> <main id="main-content" class="layout" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> <div class="hero__banner" data-astro-cid-j7pv25f6> <img src="/Assets/banner_clean.png" alt="Pixel art of a developer working at a desk with dual monitors." data-astro-cid-j7pv25f6> </div> <div class="hero__text" data-astro-cid-j7pv25f6> <p class="hero__eyebrow" data-astro-cid-j7pv25f6>Accessibility-first apps &amp; tools</p> <h1 class="hero__title" data-astro-cid-j7pv25f6>Blind Pixels Studio</h1> <p class="hero__subtitle" data-astro-cid-j7pv25f6>
We craft indie software that makes cursors, interfaces, and rules easier to see and understand for everyone.
</p> <div class="hero__actions" data-astro-cid-j7pv25f6> <a class="support-button" href="https://buymeacoffee.com/blindpixels" rel="noopener" target="_blank" data-astro-cid-j7pv25f6> <span class="support-button__icon" aria-hidden="true" data-astro-cid-j7pv25f6> <img src="/Assets/coffeeCup.png" alt="" width="22" height="22" data-astro-cid-j7pv25f6> </span> <span class="support-button__label" data-astro-cid-j7pv25f6>Buy me a coffee</span> </a> </div> </div> </header> <section class="about" aria-labelledby="about-heading" data-astro-cid-j7pv25f6> <h2 id="about-heading" data-astro-cid-j7pv25f6>About the studio</h2> <p data-astro-cid-j7pv25f6>
Blind Pixels Studio is an indie shop focused on accessibility-first software.
					We build small, opinionated tools that make digital spaces easier to see,
					teach, and share—starting with cursors, interfaces, and game rules.
</p> </section> <section class="apps" aria-labelledby="apps-heading" data-astro-cid-j7pv25f6> <h2 id="apps-heading" data-astro-cid-j7pv25f6>Apps &amp; Tools</h2> <div class="apps__grid" data-astro-cid-j7pv25f6> ${apps.map((app) => renderTemplate`<article class="app-card"${addAttribute(app.id, "id")} data-astro-cid-j7pv25f6> <div class="app-card__header" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${app.title}</h3> <span class="app-card__platform" data-astro-cid-j7pv25f6>${app.platform}</span> ${app.comingSoon && renderTemplate`<span class="app-card__badge" data-astro-cid-j7pv25f6>Coming Soon</span>`} </div> <p data-astro-cid-j7pv25f6>${app.description}</p> <div class="app-card__actions" data-astro-cid-j7pv25f6> <a class="app-card__primary"${addAttribute(app.primary.href, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-j7pv25f6> ${app.primary.label} </a> <a class="app-card__secondary"${addAttribute(app.secondary.href, "href")} data-astro-cid-j7pv25f6>${app.secondary.label}</a> </div> </article>`)} </div> </section> </main> <footer class="footer" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>&copy; ${currentYear} Blind Pixels Studio. All rights reserved.</p> <div class="footer__links" aria-label="Secondary navigation" data-astro-cid-j7pv25f6> <a href="/contact" data-astro-cid-j7pv25f6>Contact</a> <a href="/privacy" data-astro-cid-j7pv25f6>Privacy</a> </div> </footer>  </body></html>`;
}, "D:/Repos/BlindPixelsStudioHomePage/src/pages/index.astro", void 0);

const $$file = "D:/Repos/BlindPixelsStudioHomePage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
