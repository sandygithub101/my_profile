import { T as jsxRuntimeExports } from "./worker-entry-uQObiXDs.js";
import { c as createLucideIcon, P as PageLayout, D as DisplayHeading, W as Wrench, C as ContactSection } from "./router-xT9Oz-iS.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const Code = createLucideIcon("code", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const services = [{
  Icon: Palette,
  title: "AI Agent Integration",
  desc: "Building intelligent AI agents, chatbot systems, workflow automation, and smart business solutions powered by modern AI technologies."
}, {
  Icon: Code,
  title: "Web Development",
  desc: "Production-grade Php, laravel, React, Next.js, and TypeScript builds — fast and reliable."
}, {
  Icon: Smartphone,
  title: "Responsive Design",
  desc: "Pixel-perfect experiences across every device and screen size."
}, {
  Icon: Search,
  title: "SEO Optimization",
  desc: "Technical SEO, performance, and structured data baked in from day one."
}, {
  Icon: Rocket,
  title: "Launch & Growth",
  desc: "From MVP to scale — analytics, A/B testing, and iteration."
}, {
  Icon: Wrench,
  title: "Maintenance",
  desc: "Ongoing support, updates, and continuous improvement."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "What I", line2: "Do Best" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-muted-foreground leading-relaxed", children: "End-to-end product work for founders, agencies and teams that care about the details." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4", children: services.map(({
      Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 border border-border hover:border-brand-orange/50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
    ] }, title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
}
export {
  ServicesPage as component
};
