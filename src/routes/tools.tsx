import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, DisplayHeading } from "@/components/PageLayout";
import { ContactSection } from "./index";

import {
  Sparkles,
  Database,
  Braces,
  Code2,
  Brain,
  Workflow,
} from "lucide-react";

import {
  SiWordpress,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiFilezilla,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiBootstrap,
  SiGithubcopilot,
  SiClaude,
  SiGooglegemini,
  SiGit,
  SiFigma,
  SiReact,
} from "react-icons/si";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      {
        title: "Premium Tools — Sandeep Kumar",
      },
      {
        name: "description",
        content: "The premium tools I use to build great products.",
      },
      {
        property: "og:title",
        content: "Premium Tools — Sandeep Kumar",
      },
      {
        property: "og:description",
        content: "The premium tools I use to build great products.",
      },
    ],
  }),
  component: ToolsPage,
});

const tools = [
  {
    name: "PHP",
    role: "Core PHP",
    Icon: SiPhp,
    color: "text-indigo-500",
  },
  {
    name: "WordPress",
    role: "CMS Tool",
    Icon: SiWordpress,
    color: "text-blue-500",
  },
  {
    name: "Laravel",
    role: "PHP Framework",
    Icon: SiLaravel,
    color: "text-red-500",
  },
  {
    name: "JavaScript",
    role: "ES6",
    Icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "Next.js",
    role: "React Framework",
    Icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "React.js",
    role: "UI Library",
    Icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "MongoDB",
    role: "NoSQL Database",
    Icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    role: "Backend Framework",
    Icon: SiExpress,
    color: "text-gray-300",
  },
  {
    name: "Node.js",
    role: "Runtime Environment",
    Icon: SiNodedotjs,
    color: "text-green-600",
  },
  {
    name: "MySQL",
    role: "Database",
    Icon: SiMysql,
    color: "text-blue-500",
  },
  {
    name: "Firebase",
    role: "Realtime Database",
    Icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    name: "Workbench",
    role: "Database Tool",
    Icon: Database,
    color: "text-orange-400",
  },
  {
    name: "FileZilla",
    role: "Server Tool",
    Icon: SiFilezilla,
    color: "text-red-600",
  },
  {
    name: "Bootstrap 5",
    role: "CSS Framework",
    Icon: SiBootstrap,
    color: "text-purple-500",
  },
  {
    name: "Tailwind CSS",
    role: "CSS Framework",
    Icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  {
    name: "WebSockets",
    role: "Realtime Communication",
    Icon: Workflow,
    color: "text-pink-500",
  },
  {
    name: "Gemini",
    role: "AI Assistant",
    Icon: SiGooglegemini,
    color: "text-blue-400",
  },
  {
    name: "GitHub Copilot",
    role: "AI Coding Assistant",
    Icon: SiGithubcopilot,
    color: "text-green-400",
  },
  {
    name: "Claude",
    role: "AI Assistant",
    Icon: SiClaude,
    color: "text-orange-300",
  },
  {
    name: "ChatGPT",
    role: "AI Assistant",
    Icon: Sparkles,
    color: "text-emerald-400",
  },
  {
    name: "VS Code",
    role: "Code Editor",
    Icon: Code2,
    color: "text-blue-500",
  },
  {
    name: "Git and GitHub",
    role: "Code Repository",
    Icon: SiGit,
    color: "text-white",
  },
  {
    name: "RAG",
    role: "Retrieval Augmented Generation",
    Icon: Brain,
    color: "text-violet-500",
  },
];

function ToolsPage() {
  return (
    <PageLayout>
      <DisplayHeading line1="Premium" line2="Tools" />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map(({ name, role, Icon, color }) => (
          <div
            key={name}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange/10 ${color}`}
            >
              <Icon className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        ))}
      </div>

      <ContactSection />
    </PageLayout>
  );
}