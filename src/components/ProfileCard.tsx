import portrait from "@/assets/profile_img.png";
import { Dribbble, Twitter, Instagram, Youtube } from "lucide-react";
import { Flame } from "lucide-react";

export function ProfileCard() {
  return (
    <aside className="lg:sticky lg:top-32 self-start">
      <div className="relative bg-surface text-surface-foreground rounded-3xl p-6 shadow-[var(--shadow-card)] max-w-sm mx-auto">
        {/* <div className="dashed-ring" /> */}
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
          <img
            src={portrait}
            alt="Sandeep kumar portrait"
            className="w-full h-full object-cover"
            width={768}
            height={1024}
          />
        </div>

        <div className="relative mt-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">Sandeep Kumar</h2>
          {/* <div className="flame-badge mt-8">
            <Flame className="w-5 h-5" />
          </div> */}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500 leading-relaxed">
          A Fullstack Engineer who has developed countless innovative solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4 text-brand-orange">
          <a href="#" aria-label="Dribbble" className="hover:opacity-70 transition">
            <Dribbble className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-70 transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-70 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-70 transition">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
