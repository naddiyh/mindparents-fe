if ("Notification" in window) {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.warn("Notification permission denied.");
    }
  });
}

if (!self.define) {
  let e,
    a = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let t = {};
    const r = (e) => s(e, c),
      d = { module: { uri: c }, exports: t, require: r };
    a[c] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-3c9d0171"], function (e) {
  "use strict";
  importScripts("/fallback-ce627215c0e4a9af.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/data/29CUXqdW56ohNa7e6h4zD/fallback.json",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/29CUXqdW56ohNa7e6h4zD/_buildManifest.js",
          revision: "1cd3864422a2757198ac1e8a3bd0a232",
        },
        {
          url: "/_next/static/29CUXqdW56ohNa7e6h4zD/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/154-3c6798700c10cb5c.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/175-dab4a47f47b54fdb.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/209-a3cc9d4e40bbe1e4.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/36-779d0975dc7443de.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/367-69a0516018a31e35.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/3723546d-ba02a56cbbbc83b1.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/3da0feb0-962d50b9655a4f36.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/44c83eb9-75963985272d219f.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/659-ec700cde48a51aee.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/74-9ef2d18f54feec8f.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/86b30693-2d09be544eadb6b5.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/9ecace7b-d741846ad1f49c05.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/a0a64faf-0f55eff483595ce8.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/page-8406a482782b15e6.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(auth)/signup/page-707b06325aacb2b8.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/%5BkehamilanId%5D/%5Btrisemester1%5D/page-1f7fd28a5da323b7.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/%5BkehamilanId%5D/page-038a04aa3d4b5fe6.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/page-e8ccb5d1c61f202a.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/layout-4e137853b645b7ff.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/page-9bfc951e7a382455.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/parents/%5BparentsId%5D/page-dcaf4522dbbb73f1.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/(root)/parents/page-d2b097a89c650fc5.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-66b4c88e836f3f73.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/app/layout-6cf449c1b90d06e3.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/be1e8963-e2930c56a2083db3.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/cd2a80b2-81a624cb0704cfc2.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/e1bbbf97-ad7ad8eb3d307454.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/ec8e5006-f8e82f156ab68173.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/framework-6e06c675866dc992.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/main-350f8cbe24a9c89b.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/main-app-d4313631c2c452c2.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/pages/_app-e73f35c67d1cf267.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/pages/_error-2a61e5e824e3b941.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-81c83def05b4d956.js",
          revision: "29CUXqdW56ohNa7e6h4zD",
        },
        {
          url: "/_next/static/css/00003a5f30eafb8b.css",
          revision: "00003a5f30eafb8b",
        },
        {
          url: "/_next/static/css/5a56e3c1761e58ad.css",
          revision: "5a56e3c1761e58ad",
        },
        {
          url: "/_next/static/css/640c58db01520ef5.css",
          revision: "640c58db01520ef5",
        },
        {
          url: "/_next/static/media/062522b8b7c3ad6a-s.woff2",
          revision: "0f347a32b2168180dbc514e104ab207c",
        },
        {
          url: "/_next/static/media/11a2f41a9e013c06-s.woff2",
          revision: "afda66d2f49298931fb5c79e7e8623a2",
        },
        {
          url: "/_next/static/media/19e37deead9b3ec2-s.woff2",
          revision: "8f919c25620e7f246b5abcfa979922bf",
        },
        {
          url: "/_next/static/media/3d9ea938b6afa941-s.p.woff2",
          revision: "ee1b2a154fb9ea98a28413a839adedfb",
        },
        {
          url: "/_next/static/media/3e718d76ea8a5392-s.woff2",
          revision: "7899858287bebb8d88dc22452d6b3e6b",
        },
        {
          url: "/_next/static/media/46392699924ae7e5-s.woff2",
          revision: "467f697ccbe92aebc38f6c1a433f6948",
        },
        {
          url: "/_next/static/media/6a9e2fea82179364-s.p.woff2",
          revision: "87696ee100a2a715aa91a96cb21d99f2",
        },
        {
          url: "/_next/static/media/6fed4e5749a3ea15-s.woff2",
          revision: "bd04001574d461203c7264ac27d8c504",
        },
        {
          url: "/_next/static/media/83651bee47cf14da-s.woff2",
          revision: "d2bb91b14d5895c91741b933a76be9c0",
        },
        {
          url: "/_next/static/media/8f247ec7ca696ac1-s.woff2",
          revision: "9e7015457333e69b94ada2e9c0ec8cfa",
        },
        {
          url: "/_next/static/media/9beef36ab83de3f0-s.woff2",
          revision: "82c2dc97217d32c57a029754fda91e4e",
        },
        {
          url: "/_next/static/media/b1c91e4dcd3546f4-s.woff2",
          revision: "f38024fc85b125ded7a2c215a4ecd51d",
        },
        {
          url: "/_next/static/media/c494168ed948a81c-s.woff2",
          revision: "199bbe496ddbbbd37a3cf3405a1fc7a9",
        },
        {
          url: "/_next/static/media/c993c863e9e66f9f-s.woff2",
          revision: "46f0e0da85ce4a9a14e8651ceb3c39d0",
        },
        {
          url: "/_next/static/media/ca13452f97433645-s.p.woff2",
          revision: "7f0facb9755b186a10e5a9d423b7d258",
        },
        {
          url: "/_next/static/media/d1981b673755850e-s.woff2",
          revision: "4cfe138563cf51f288353aef6c046c70",
        },
        {
          url: "/_next/static/media/db7e82b359cdbdae-s.woff2",
          revision: "c1d29c6fa6b17b2b899afb3ba513219f",
        },
        {
          url: "/_next/static/media/dd4ab5b525bd804a-s.woff2",
          revision: "b505d29c0021c60e4a004de0b5fea45f",
        },
        {
          url: "/_next/static/media/e6f5886ae1242622-s.woff2",
          revision: "e64d3f79602912c46c2b4d7f26dcadb8",
        },
        {
          url: "/_next/static/media/faac4ac11aa3d97b-s.p.woff2",
          revision: "9cb88d5b1ed3ff5796eefc9e62af1b8e",
        },
        {
          url: "/fallback-ce627215c0e4a9af.js",
          revision: "d9d23ca70a8d7051f3980b2ed27c91d9",
        },
        { url: "/fallback-font.woff2", revision: "29CUXqdW56ohNa7e6h4zD" },
        { url: "/fallback.mp3", revision: "29CUXqdW56ohNa7e6h4zD" },
        { url: "/fallback.mp4", revision: "29CUXqdW56ohNa7e6h4zD" },
        { url: "/fallback.webp", revision: "29CUXqdW56ohNa7e6h4zD" },
        { url: "/icons/mp.svg", revision: "a154f0dbcf46547cce01787eba20e8e8" },
        {
          url: "/images/Article.webp",
          revision: "bc5367cb4b084f2951a2c58ea2eccab4",
        },
        {
          url: "/images/Robot 2.webp",
          revision: "49b528c3ff339011c9ba657d13636728",
        },
        {
          url: "/images/anakAnak.webp",
          revision: "f11282202917579d6837312e34e9a8e3",
        },
        {
          url: "/images/aybu.webp",
          revision: "52ab26dfe6a92a1a98107d8f17ecedd0",
        },
        {
          url: "/images/belajar.webp",
          revision: "6d0af166fd40311411f7286dabb20d2c",
        },
        {
          url: "/images/bermain.webp",
          revision: "eb2eaf79bb1aea3a84c671b0ac527c28",
        },
        {
          url: "/images/cheerfam.webp",
          revision: "bfe32bd2cbacd634e1fa6d4a8f413288",
        },
        {
          url: "/images/food.webp",
          revision: "7fe04672aff0d66b88e05760575bb75f",
        },
        {
          url: "/images/fotoLogin.webp",
          revision: "5eeeb472fd7cc8700232a849dd341400",
        },
        {
          url: "/images/happyfam.webp",
          revision: "832a051ddc1bf66e939517f662098dbf",
        },
        {
          url: "/images/ibuHamil.webp",
          revision: "bb663fcb53f1f4f35bb57077fdb52969",
        },
        {
          url: "/images/olahraga.webp",
          revision: "0bfa5110c936ceb9a4b637f70b01d38a",
        },
        {
          url: "/images/perOrtu.webp",
          revision: "c0a2fc0cdcb2d0f653f25f6650ff4cae",
        },
        {
          url: "/images/sweetfam.webp",
          revision: "5f1e4f1d03dbb16627cd037cfceb9d7a",
        },
        {
          url: "/images/tanyaAhli.webp",
          revision: "1d7837202e3083240280735032538e39",
        },
        {
          url: "/images/trapesium.webp",
          revision: "38b2b3444c6e444baae244325e1cc0c5",
        },
        { url: "/manifest.json", revision: "e5903aa1159cf832a7220777b9fff81e" },
        {
          url: "/svg/Aybubot.svg",
          revision: "81cb7e564270f3ef6afec3c53ed97f9e",
        },
        { url: "/svg/logo.svg", revision: "d41d8cd98f00b204e9800998ecf8427e" },
        { url: "/~offline", revision: "29CUXqdW56ohNa7e6h4zD" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith("/api/auth/callback") || !a.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        s &&
        !a.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: s }) =>
        "1" === e.headers.get("RSC") && s && !a.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    );
});
