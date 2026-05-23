import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, DisplayHeading } from "@/components/PageLayout";
import { ContactSection } from "./index";
import { Code, Palette, Smartphone, Search, Rocket, Wrench } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sandeep kumar" },
      { name: "description", content: "Web design, development and product engineering services." },
      { property: "og:title", content: "Services — Sandeep kumar" },
      { property: "og:description", content: "Web design, development and product engineering services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
  Icon: Palette,
  title: "AI Agent Integration",
  desc: "Building intelligent AI agents, chatbot systems, workflow automation, and smart business solutions powered by modern AI technologies.",
},
  { Icon: Code, title: "Web Development", desc: "Production-grade Php, laravel, React, Next.js, and TypeScript builds — fast and reliable." },
  { Icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect experiences across every device and screen size." },
  { Icon: Search, title: "SEO Optimization", desc: "Technical SEO, performance, and structured data baked in from day one." },
  { Icon: Rocket, title: "Launch & Growth", desc: "From MVP to scale — analytics, A/B testing, and iteration." },
  { Icon: Wrench, title: "Maintenance", desc: "Ongoing support, updates, and continuous improvement." },
];

function ServicesPage() {
  return (
    <PageLayout>
      <DisplayHeading line1="What I" line2="Do Best" />
      <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
        End-to-end product work for founders, agencies and teams that care about the details.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-2xl p-6 border border-border hover:border-brand-orange/50 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <ContactSection />
    </PageLayout>
  );
}
