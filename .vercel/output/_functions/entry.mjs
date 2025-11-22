import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dr7_3Q03.mjs';
import { manifest } from './manifest_sOjhrTGF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/ai-board-game-rules.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/contact/sent.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/privacy/ai-board-game-rules.astro.mjs');
const _page6 = () => import('./pages/privacy/see-my-eyes.astro.mjs');
const _page7 = () => import('./pages/privacy/video-cursor-tracker.astro.mjs');
const _page8 = () => import('./pages/privacy.astro.mjs');
const _page9 = () => import('./pages/see-my-eyes.astro.mjs');
const _page10 = () => import('./pages/video-cursor-tracker.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/ai-board-game-rules.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/contact/sent.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/privacy/ai-board-game-rules.astro", _page5],
    ["src/pages/privacy/see-my-eyes.astro", _page6],
    ["src/pages/privacy/video-cursor-tracker.astro", _page7],
    ["src/pages/privacy.astro", _page8],
    ["src/pages/see-my-eyes.astro", _page9],
    ["src/pages/video-cursor-tracker.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "79a8ed47-4aa5-4218-a744-9ae34e15d8a5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
