import { precacheAndRoute } from "workbox-precaching";

// Array of files to precache
precacheAndRoute(self.__WB_MANIFEST || []);

// Example: Excluding specific files
workbox.routing.registerRoute(
  /\/fallback-font\.woff2/,
  new workbox.strategies.NetworkOnly(),
);

if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, t) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let c = {};
    const r = (e) => a(e, n),
      o = { module: { uri: n }, exports: c, require: r };
    s[n] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
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
          url: "/_next/data/mt1ghjZ2fwq6ePIosy87e/fallback.json",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/1339-c31a77d709398ce7.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/1457-a3ce364362dc5a0a.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/1633-6f1638dc30f1af6e.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/1892-9af8469fc649e88c.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/1945-05410bc63ae896f2.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/2663-6c7062677fba18a1.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/3519-b8afefaad2cec906.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/3723546d-dce1508011775486.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/3981-9cb2d0b5f2ab8b4c.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/3da0feb0-8024849c50b57b41.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/43-d262e7773653d6ef.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/44c83eb9-565213508dc467a1.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/46a1adcb-a57c432343b5b01d.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/4714-f59eee083b45a2b8.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/4888-ea3f6c5329ec7823.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/5128-57d68d6f6ad85105.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/6205-cd1875cf6882e7ae.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/6597-c0ea00ae194e4509.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/6870-2c141d41c6adce16.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/6915-4081f767fe95f717.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/6930-4b7ef580c14b1488.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/7068-14cdd6e782441522.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/718b246b-dc89e08392010379.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/7419.6ddcd9b91b6eb717.js",
          revision: "6ddcd9b91b6eb717",
        },
        {
          url: "/_next/static/chunks/7552c3ed.a355031aa02f2e5d.js",
          revision: "a355031aa02f2e5d",
        },
        {
          url: "/_next/static/chunks/75cf7c50-1d9263f74a06c10b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/8133.d8e2de3e2fd5c2ab.js",
          revision: "d8e2de3e2fd5c2ab",
        },
        {
          url: "/_next/static/chunks/8241-c84520cf29449eb3.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/86b30693-791a16fe984265d4.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/8744-36ea8b3d0ba32799.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/9237-5e42f70d3532eb15.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/9615-88b1f6f15996998c.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/9904-88bd0e317074947b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/a0a64faf-b9ab9c5bee8ef2a0.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(auth)/forgotpassword/page-31f191ef9f03fb2a.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/admin/page-8565a057e33a8e20.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/page-125ebcc6418e5e1e.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(auth)/signup/page-e7668bc73c83d497.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/forumdiskusi/page-13032c7142631088.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/%5Bsubcategory%5D/%5Bid%5D/page-ddce788a0555ff14.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/%5Bsubcategory%5D/page-17688b49e3211214.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/page-5d81baa0911f8c33.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/kehamilan/video/%5Bid%5D/page-245d65e5c1d6f9be.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/layout-84d08b08988aa454.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/page-786d95992b325c10.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/perkembangan-anak/%5Bsubcategory%5D/%5Bid%5D/page-7011adaa1739e749.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/perkembangan-anak/%5Bsubcategory%5D/page-144765ff842d2ee8.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/perkembangan-anak/page-ae646098eaf1bb2c.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/perkembangan-anak/video/%5Bid%5D/page-7396b5d46d182581.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/persiapan-ortu/%5Bsubcategory%5D/%5Bid%5D/page-99c46f33bd34a99b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/persiapan-ortu/%5Bsubcategory%5D/page-1838caa1a2659c10.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/persiapan-ortu/page-be9e4fd3703b354f.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/persiapan-ortu/video/%5Bid%5D/page-16aa26976aff1cde.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/(root)/tanyaahli/page-c4a709ebc8e09a8b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-495a18eb551226e1.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/admin/(root)/articles/page-9ffc23346359e2e8.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/admin/(root)/layout-ccbb262fd67afc5d.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/admin/(root)/page-7ecd6453e2705663.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/admin/(root)/user/page-b60ae2e04120243b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/app/layout-b153284a9f2f2671.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/be1e8963-0d061c5e0f453721.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/cd2a80b2-d1da6d56d59806b3.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/da31e3a9-c2c95d4fd30d5d2b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/e1bbbf97-4c3586059216c699.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/ec8e5006-455f6a488e64ca06.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/framework-20afca218c33ed8b.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/main-6907ba1d918f7715.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/main-app-adb7b9198c665cad.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/pages/_app-3d6d6363778eae58.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/pages/_error-220dc714ed39dab3.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-9a6b1ff9b57a3dc1.js",
          revision: "mt1ghjZ2fwq6ePIosy87e",
        },
        {
          url: "/_next/static/css/0116bd2cd5dcdf04.css",
          revision: "0116bd2cd5dcdf04",
        },
        {
          url: "/_next/static/css/62d300edc8ac2420.css",
          revision: "62d300edc8ac2420",
        },
        {
          url: "/_next/static/css/a1a58517bed519a8.css",
          revision: "a1a58517bed519a8",
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
          url: "/_next/static/mt1ghjZ2fwq6ePIosy87e/_buildManifest.js",
          revision: "24cd0077ea4f06e41ee3c532fe7b8b94",
        },
        {
          url: "/_next/static/mt1ghjZ2fwq6ePIosy87e/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/fallback-ce627215c0e4a9af.js",
          revision: "1bf3295e9c2d87fa9173d430f5d5ed9e",
        },
        { url: "/fallback-font.woff2", revision: "mt1ghjZ2fwq6ePIosy87e" },
        { url: "/fallback.mp3", revision: "mt1ghjZ2fwq6ePIosy87e" },
        { url: "/fallback.mp4", revision: "mt1ghjZ2fwq6ePIosy87e" },
        { url: "/fallback.webp", revision: "mt1ghjZ2fwq6ePIosy87e" },
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
          url: "/images/ayb.webp",
          revision: "b4ddbd537f8aeabc0c54a78ea4459114",
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
          url: "/images/ibudwi.webp",
          revision: "078dcfb8dd1ee33048e997f3a1ed4bf7",
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
        {
          url: "/images/videosub.webp",
          revision: "4431f06b69f073905b025128dcccde40",
        },
        { url: "/manifest.json", revision: "e5903aa1159cf832a7220777b9fff81e" },
        {
          url: "/svg/Aybubot.svg",
          revision: "81cb7e564270f3ef6afec3c53ed97f9e",
        },
        { url: "/svg/Play.svg", revision: "dea5c5b99b9dfa04d8920393ada0a779" },
        { url: "/svg/ig.svg", revision: "9635b8b29967ff5501f6a31e39d6b0b3" },
        { url: "/svg/logo.svg", revision: "d41d8cd98f00b204e9800998ecf8427e" },
        {
          url: "/svg/logoFooter.svg",
          revision: "48cee777f2be682c3657ba0574a2e26e",
        },
        { url: "/svg/pfp.svg", revision: "b10208c6ad52304f55c93d9049b8b8f9" },
        { url: "/svg/wa.svg", revision: "81d17cd619d70863a1b5745105efe45c" },
        { url: "/~offline", revision: "mt1ghjZ2fwq6ePIosy87e" },
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
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
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
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
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
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
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
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
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
