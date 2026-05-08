import { T as jsxRuntimeExports } from "./worker-entry-uQObiXDs.js";
import { c as createLucideIcon, D as DisplayHeading, A as ArrowRight, P as PageLayout, L as Link } from "./router-xT9Oz-iS.js";
import { s as socio, l as lablive, e as ezyMoney } from "./ezydeal-ByiDK7qP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$1);
const __iconNode = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
];
const LayoutTemplate = createLucideIcon("layout-template", __iconNode);
const cardOrange = "/assets/card-orange-eG83sCuT.jpg";
const cardLime = "/assets/card-lime-BFryowJI.jpg";
const experiences = [{
  company: "Launch Vyapar",
  desc: "Led the development team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
  period: "March 2026 - Present Remote"
}, {
  company: "AppSquadz Pvt Ltd ",
  desc: "Developed and implemented development strategies for new product lines, collaborated closely with engineers and product managers.",
  period: "Feb 2024 – Apr 2025"
}, {
  company: "Tzi Solutions Pvt Ltd",
  desc: "Designed and developed user interfaces for E-commerce platforms, focusing on enhancing usability and visual appeal.",
  period: "Jul 2021 – Dec 2023"
}, {
  company: "Wisdominfosoft Pvt Ltd",
  desc: "I was trainee here. Enhanced and maintained frontend features with a focus on UI consistency and system stability.",
  period: " Jul 2020 – Apr 2021"
}];
const thoughts = [{
  title: "Starting and Growing a Career in Web Development",
  desc: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
  date: "Apr 8, 2022",
  read: "6-min read"
}, {
  title: "Create a Landing Page That Performs Great",
  desc: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
  date: "Mar 15, 2023",
  read: "10-min read"
}, {
  title: "How Can Developers Prepare for the Future?",
  desc: "Developers must adapt to new tools, methodologies and a constantly shifting landscape to stay relevant.",
  date: "Feb 28, 2025",
  read: "12-min read"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "Fullstack", line2: "Engineer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-md text-base leading-relaxed", children: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-xl", children: [{
        n: "+4",
        t1: "Years of",
        t2: "Experience"
      }, {
        n: "+20",
        t1: "Projects",
        t2: "Completed"
      }, {
        n: "+0",
        t1: "Worldwide",
        t2: "Clients"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs uppercase tracking-wider text-muted-foreground leading-snug", children: [
          s.t1,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          s.t2
        ] })
      ] }, s.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccentCard, { label: "Dynamic Animation, Motion Design", bg: cardOrange, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccentCard, { label: "Laravel, Wordpress, ReactJS, Mern Stack", bg: cardLime, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutTemplate, { className: "w-6 h-6" }), dark: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "Recent", line2: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { img: socio, title: "sociocharge", sub: "https://www.sociocharge.com/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { img: lablive, title: "LabLive", sub: "https://lab.live/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { img: ezyMoney, title: "EzyMoneyDeals", sub: "https://www.ezymoneydeals.com/" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 mt-8 text-sm text-muted-foreground hover:text-foreground transition", children: [
        "See all projects ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "4 Years of", line2: "Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: experiences.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-brand-orange/50 transition group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: e.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed max-w-2xl", children: e.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs uppercase tracking-wider text-brand-orange", children: e.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 text-muted-foreground group-hover:text-brand-orange group-hover:translate-x-1 transition" })
      ] }) }, e.company)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "Development", line2: "Thoughts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: thoughts.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-brand-orange/50 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed", children: t.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-4 text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.read })
        ] })
      ] }, t.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
}
function AccentCard({
  label,
  bg,
  icon,
  dark
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl p-6 h-44 flex flex-col justify-between overflow-hidden", style: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: dark ? "#0a0a0a" : "#0a0a0a"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-black/10 backdrop-blur-sm flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold uppercase text-sm leading-tight max-w-[180px]", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Open", className: "w-10 h-10 rounded-xl border-2 border-black/30 flex items-center justify-center hover:bg-black/10 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" }) })
    ] })
  ] });
}
function ProjectCard({
  img,
  title,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: sub, target: "blank", className: "group block bg-card rounded-2xl overflow-hidden border border-border hover:border-brand-orange/50 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: title, loading: "lazy", width: 800, height: 600, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: sub })
    ] })
  ] });
}
function ContactSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayHeading, { line1: "Let's Work", line2: "Together" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-10 bg-card rounded-3xl p-6 md:p-10 border border-border space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", placeholder: "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", placeholder: "you@example.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Budget" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { children: [
            "<",
            "$1.5k"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "$3k - $5k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "$5k - $10k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { children: [
            ">",
            "$10k"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, placeholder: "Tell me about your project…", className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition shadow-[var(--shadow-glow)]", children: [
        "Submit ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] })
  ] });
}
function Field({
  label,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange" })
  ] });
}
export {
  ContactSection,
  HomePage as component
};
