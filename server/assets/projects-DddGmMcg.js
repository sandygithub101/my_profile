import { T as jsxRuntimeExports } from "./worker-entry-uQObiXDs.js";
import { c as createLucideIcon, P as PageLayout, D as DisplayHeading, C as ContactSection } from "./router-xT9Oz-iS.js";
import { s as socio, l as lablive, e as ezyMoney } from "./ezydeal-ByiDK7qP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const neroneworld = "/assets/neroneworld-CiCXfrFz.png";
const soulchat = "/assets/soulchat-C949b_Ek.png";
const tipstoe = "/assets/tipandtoe-UVK2Octq.png";
const onlineGalaxy = "/assets/onlineGalaxy-N7h3wlXi.png";
const powerlogix = "/assets/powerlogix-C-FevwSy.png";
const projects = [{
  img: socio,
  title: "Sociocharge",
  sub: "https://www.sociocharge.com/"
}, {
  img: lablive,
  title: "LabLive",
  sub: "https://lab.live/"
}, {
  img: ezyMoney,
  title: "ezyMoney",
  sub: "https://www.ezymoneydeals.com/"
}, {
  img: neroneworld,
  title: "Neroneworld",
  sub: "https://neroneworld.com/ge/"
}, {
  img: soulchat,
  title: "Soulchat",
  sub: "http://www.soulchat.io/"
}, {
  img: tipstoe,
  title: "TipsandToe",
  sub: "https://www.tipsandtoes.com/"
}, {
  img: onlineGalaxy,
  title: "OnlineGalaxy",
  sub: "https://online.physicsgalaxy.com/"
}, {
  img: powerlogix,
  title: "powerlogix",
  sub: "https://powerlogixtech.com/"
}];
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "Recent", line2: "Projects" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.sub, target: "blank", className: "group flex items-center gap-6 bg-card rounded-2xl p-4 border border-border hover:border-brand-orange/50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-24 md:w-44 md:h-28 flex-shrink-0 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 800, height: 600, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: p.sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-5 h-5 text-brand-orange group-hover:rotate-45 transition" })
    ] }, p.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
}
export {
  ProjectsPage as component
};
