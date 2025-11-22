import { e as createComponent, k as renderHead, r as renderTemplate } from '../../chunks/astro/server_D4ioLTkn.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Sent = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Message sent \u2013 Blind Pixels Studio";
  return renderTemplate`<html lang="en" data-astro-cid-wubmkfoi> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${pageTitle}</title><meta name="description" content="Confirmation screen letting you know your message was sent to Blind Pixels Studio.">${renderHead()}</head> <body class="page" data-astro-cid-wubmkfoi> <main class="layout" aria-labelledby="sent-heading" data-astro-cid-wubmkfoi> <a class="sent__back" href="/" data-astro-cid-wubmkfoi>← Back to Blind Pixels Studio</a> <section class="sent__card" data-astro-cid-wubmkfoi> <h1 id="sent-heading" data-astro-cid-wubmkfoi>Message sent</h1> <p data-astro-cid-wubmkfoi>
Thanks for reaching out to Blind Pixels Studio. If your message needs a reply,
          we'll get back to you as soon as we can.
</p> <p class="sent__secondary" data-astro-cid-wubmkfoi>
You can safely close this tab or go back to exploring the apps and tools.
</p> <a class="sent__primary" href="/" data-astro-cid-wubmkfoi>Return to homepage</a> </section> </main>  </body></html>`;
}, "D:/Repos/BlindPixelsStudioHomePage/src/pages/contact/sent.astro", void 0);

const $$file = "D:/Repos/BlindPixelsStudioHomePage/src/pages/contact/sent.astro";
const $$url = "/contact/sent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
