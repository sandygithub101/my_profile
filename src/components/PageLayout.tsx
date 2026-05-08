import { PillNav } from "./PillNav";
import { ProfileCard } from "./ProfileCard";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <PillNav />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-12 lg:gap-16">
          <ProfileCard />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}

export function DisplayHeading({
  line1,
  line2,
}: {
  line1: string;
  line2: string;
}) {
  return (
    <h1 className="display-heading">
      <span className="block">{line1}</span>
      <span className="block faded">{line2}</span>
    </h1>
  );
}
