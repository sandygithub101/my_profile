import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, DisplayHeading } from "@/components/PageLayout";
import { ContactSection } from "./index";
import { ArrowUpRight } from "lucide-react";

import neroneworld from "@/assets/neroneworld.png";
import soulchat from "@/assets/soulchat.png";
import tipstoe from "@/assets/tipandtoe.png";

import socio from "@/assets/sociocharge.png";
import lablive from "@/assets/lablive0.png";
import ezyMoney from "@/assets/ezydeal.png";
import onlineGalaxy from "@/assets/onlineGalaxy.png";
import powerlogix from "@/assets/powerlogix.png";


export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sandeep kumar" },
      { name: "description", content: "A selection of recent web and template projects." },
      { property: "og:title", content: "Projects — Sandeep kumar" },
      { property: "og:description", content: "Recent web and template projects." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: socio, title: "Sociocharge", sub: "https://www.sociocharge.com/" },
  { img: lablive, title: "LabLive", sub: "https://lab.live/" },
  { img: ezyMoney, title: "ezyMoney", sub: "https://www.ezymoneydeals.com/" },
  { img: neroneworld, title: "Neroneworld", sub: "https://neroneworld.com/ge/" },
  { img: soulchat, title: "Soulchat", sub: "http://www.soulchat.io/" },
  { img: tipstoe, title: "TipsandToe", sub: "https://www.tipsandtoes.com/" },
  { img: onlineGalaxy, title: "OnlineGalaxy", sub: "https://online.physicsgalaxy.com/" },
  { img: powerlogix, title: "powerlogix", sub: "https://powerlogixtech.com/" },
];

function ProjectsPage() {
  return (
    <PageLayout>
      <DisplayHeading line1="Recent" line2="Projects" />
      <div className="mt-10 space-y-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.sub}
            target="blank"
            className="group flex items-center gap-6 bg-card rounded-2xl p-4 border border-border hover:border-brand-orange/50 transition"
          >
            <div className="w-32 h-24 md:w-44 md:h-28 flex-shrink-0 rounded-xl overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.sub}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-brand-orange group-hover:rotate-45 transition" />
          </a>
        ))}
      </div>
      <ContactSection />
    </PageLayout>
  );
}
