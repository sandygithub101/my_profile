import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, DisplayHeading } from "@/components/PageLayout";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, LayoutTemplate } from "lucide-react";
import cardOrange from "@/assets/card-orange.jpg";
import cardLime from "@/assets/card-lime.jpg";
import socio from "@/assets/sociocharge.png";
import lablive from "@/assets/lablive0.png";
import ezyMoney from "@/assets/ezydeal.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandeep kumar — Fullstack Engineer Portfolio" },
      {
        name: "description",
        content:
          "Software engineer crafting intuitive products and beautifully engineered web experiences.",
      },
      { property: "og:title", content: "Sandeep kumar — Fullstack Engineer" },
      {
        property: "og:description",
        content: "Portfolio of a Fullstack engineer specializing in web product design and development.",
      },
    ],
  }),
  component: HomePage,
});

const experiences = [
  {
    company: "Launch Vyapar",
    desc: "Led the development team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    period: "March 2026 - Present Remote",
  },
  {
    company: "AppSquadz Pvt Ltd ",
    desc: "Developed and implemented development strategies for new product lines, collaborated closely with engineers and product managers.",
    period: "Feb 2024 – Apr 2025",
  },
  {
    company: "Tzi Solutions Pvt Ltd",
    desc: "Designed and developed user interfaces for E-commerce platforms, focusing on enhancing usability and visual appeal.",
    period: "Jul 2021 – Dec 2023",
  },
  {
    company: "Wisdominfosoft Pvt Ltd",
    desc: "I was trainee here. Enhanced and maintained frontend features with a focus on UI consistency and system stability.",
    period: " Jul 2020 – Apr 2021",
  },
];

const thoughts = [
  {
    title: "Starting and Growing a Career in Web Development",
    desc: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    read: "6-min read",
  },
  {
    title: "Create a Landing Page That Performs Great",
    desc: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Mar 15, 2023",
    read: "10-min read",
  },
  {
    title: "How Can Developers Prepare for the Future?",
    desc: "Developers must adapt to new tools, methodologies and a constantly shifting landscape to stay relevant.",
    date: "Feb 28, 2025",
    read: "12-min read",
  },
];

function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section>
        <DisplayHeading line1="Fullstack" line2="Engineer" />
        <p className="mt-6 text-muted-foreground max-w-md text-base leading-relaxed">
          Passionate about creating intuitive and engaging user experiences. Specialize in
          transforming ideas into beautifully crafted products.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
          {[
            { n: "+4", t1: "Years of", t2: "Experience" },
            { n: "+20", t1: "Projects", t2: "Completed" },
            { n: "+0", t1: "Worldwide", t2: "Clients" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-4xl md:text-5xl font-bold tracking-tight">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground leading-snug">
                {s.t1}
                <br />
                {s.t2}
              </div>
            </div>
          ))}
        </div>

        {/* Two accent cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
          <AccentCard
            label="Dynamic Animation, Motion Design"
            bg={cardOrange}
            icon={<Layers className="w-6 h-6" />}
          />
          <AccentCard
            label="Laravel, Wordpress, ReactJS, Mern Stack"
            bg={cardLime}
            icon={<LayoutTemplate className="w-6 h-6" />}
            dark
          />
        </div>
      </section>

      {/* Recent projects */}
      <section className="mt-28">
        <DisplayHeading line1="Recent" line2="Projects" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ProjectCard img={socio} title="sociocharge" sub="https://www.sociocharge.com/" />
          <ProjectCard img={lablive} title="LabLive" sub="https://lab.live/" />
          <ProjectCard img={ezyMoney} title="EzyMoneyDeals" sub="https://www.ezymoneydeals.com/" />
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mt-8 text-sm text-muted-foreground hover:text-foreground transition"
        >
          See all projects <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Experience */}
      <section className="mt-28">
        <DisplayHeading line1="4 Years of" line2="Experience" />
        <div className="mt-10 space-y-4">
          {experiences.map((e) => (
            <div
              key={e.company}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-brand-orange/50 transition group"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">{e.company}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {e.desc}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-brand-orange">
                    {e.period}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-brand-orange group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Thoughts */}
      <section className="mt-28">
        <DisplayHeading line1="Development" line2="Thoughts" />
        <div className="mt-10 space-y-4">
          {thoughts.map((t) => (
            <div
              key={t.title}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-brand-orange/50 transition"
            >
              <h3 className="text-xl font-bold">{t.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              <div className="mt-4 flex gap-4 text-xs uppercase tracking-wider text-muted-foreground">
                <span>{t.date}</span>
                <span>•</span>
                <span>{t.read}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </PageLayout>
  );
}

function AccentCard({
  label,
  bg,
  icon,
  dark,
}: {
  label: string;
  bg: string;
  icon: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="relative rounded-3xl p-6 h-44 flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: dark ? "#0a0a0a" : "#0a0a0a",
      }}
    >
      <div className="w-11 h-11 rounded-xl bg-black/10 backdrop-blur-sm flex items-center justify-center">
        {icon}
      </div>
      <div className="flex items-end justify-between">
        <p className="font-bold uppercase text-sm leading-tight max-w-[180px]">{label}</p>
        <button
          aria-label="Open"
          className="w-10 h-10 rounded-xl border-2 border-black/30 flex items-center justify-center hover:bg-black/10 transition"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ img, title, sub }: { img: string; title: string; sub: string }) {
  return (
    <a
      href={sub}
      target="blank"
      className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-brand-orange/50 transition"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{sub}</p>
      </div>
    </a>
  );
}

export function ContactSection() {
  return (
    <section className="mt-28">
      <DisplayHeading line1="Let's Work" line2="Together" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 bg-card rounded-3xl p-6 md:p-10 border border-border space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Name" placeholder="Your name" />
          <Field label="Email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Budget
          </label>
          <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange">
            <option>Select…</option>
            <option>{"<"}$1.5k</option>
            <option>$3k - $5k</option>
            <option>$5k - $10k</option>
            <option>{">"}$10k</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Tell me about your project…"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition shadow-[var(--shadow-glow)]"
        >
          Submit <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange"
      />
    </div>
  );
}
