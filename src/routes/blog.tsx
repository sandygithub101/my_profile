import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, DisplayHeading } from "@/components/PageLayout";
import { ContactSection } from "./index";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Design Thoughts — Sandeep kumar" },
      { name: "description", content: "Notes on design, web development and the craft of building products." },
      { property: "og:title", content: "Design Thoughts — Sandeep kumar" },
      { property: "og:description", content: "Notes on design, web development and the craft of building products." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Starting and Growing a Career in Design and Web Develop",
    desc: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    read: "6min read",
  },
  {
    title: "Create a Landing Page That Performs Great",
    desc: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Mar 15, 2022",
    read: "6min read",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    desc: "Designers must adapt to new tools, methodologies, and a constantly shifting landscape to stay relevant.",
    date: "Feb 28, 2022",
    read: "6min read",
  },
  {
    title: "Building a Navigation Component with Variables",
    desc: "Reusable, themeable navigation patterns built on top of CSS variables and design tokens.",
    date: "Feb 10, 2022",
    read: "5min read",
  },
];

function BlogPage() {
  return (
    <PageLayout>
      <DisplayHeading line1="Design" line2="Thoughts" />
      <div className="mt-10 space-y-4">
        {posts.map((p) => (
          <a
            key={p.title}
            href="#"
            className="block bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-brand-orange/50 transition"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex gap-4 text-xs uppercase tracking-wider text-muted-foreground">
              <span>{p.date}</span>
              <span>•</span>
              <span>{p.read}</span>
            </div>
          </a>
        ))}
      </div>
      <ContactSection />
    </PageLayout>
  );
}
