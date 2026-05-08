import { T as jsxRuntimeExports } from "./worker-entry-uQObiXDs.js";
import { P as PageLayout, D as DisplayHeading, C as ContactSection } from "./router-xT9Oz-iS.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const posts = [{
  title: "Starting and Growing a Career in Design and Web Develop",
  desc: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
  date: "Apr 8, 2022",
  read: "6min read"
}, {
  title: "Create a Landing Page That Performs Great",
  desc: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
  date: "Mar 15, 2022",
  read: "6min read"
}, {
  title: "How Can Designers Prepare for the Future?",
  desc: "Designers must adapt to new tools, methodologies, and a constantly shifting landscape to stay relevant.",
  date: "Feb 28, 2022",
  read: "6min read"
}, {
  title: "Building a Navigation Component with Variables",
  desc: "Reusable, themeable navigation patterns built on top of CSS variables and design tokens.",
  date: "Feb 10, 2022",
  read: "5min read"
}];
function BlogPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "Design", line2: "Thoughts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "block bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-brand-orange/50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed", children: p.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-4 text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.read })
      ] })
    ] }, p.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
}
export {
  BlogPage as component
};
