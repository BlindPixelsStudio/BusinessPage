import { e as createComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_D4ioLTkn.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Contact \u2013 Blind Pixels Studio";
  return renderTemplate`<html lang="en" data-astro-cid-uw5kdbxl> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${pageTitle}</title><meta name="description" content="Get in touch with Blind Pixels Studio about accessibility-focused apps and tools.">${renderHead()}</head> <body class="page" data-astro-cid-uw5kdbxl> <main class="layout" aria-labelledby="contact-heading" data-astro-cid-uw5kdbxl> <a class="contact__back" href="/" data-astro-cid-uw5kdbxl>← Back to Blind Pixels Studio</a> <header class="contact__header" data-astro-cid-uw5kdbxl> <h1 id="contact-heading" data-astro-cid-uw5kdbxl>Contact</h1> <p data-astro-cid-uw5kdbxl>
Have a question, idea, or accessibility request? Send a message using the
          form below.
</p> </header> <form class="contact__form" method="post" action="/api/contact" data-astro-cid-uw5kdbxl> <div class="field" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl>Name</label> <input id="name" name="name" type="text" autocomplete="name" required data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Email</label> <input id="email" name="email" type="email" inputmode="email" autocomplete="email" required data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="subject" data-astro-cid-uw5kdbxl>Subject</label> <input id="subject" name="subject" type="text" autocomplete="off" required data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" rows="6" required data-astro-cid-uw5kdbxl></textarea> </div> <button class="contact__submit" type="submit" data-astro-cid-uw5kdbxl>Send message</button> <p class="contact__note" data-astro-cid-uw5kdbxl>
We use email via Resend to deliver your message. Please avoid including
          sensitive personal information.
</p> </form> </main>  </body></html>`;
}, "D:/Repos/BlindPixelsStudioHomePage/src/pages/contact.astro", void 0);

const $$file = "D:/Repos/BlindPixelsStudioHomePage/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
