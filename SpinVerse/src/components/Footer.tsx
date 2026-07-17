import Link from "next/link";
import { Disc } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full neo-border border-b-0 border-x-0 bg-cream dark:bg-retro-navy py-12 px-6 md:px-12 mt-auto transition-colors text-retro-navy dark:text-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-display text-2xl font-black">
            <Disc className="w-7 h-7 text-retro-orange animate-spin-slow" style={{ animationDuration: '12s' }} />
            <span>Spin<span className="text-retro-orange">Verse</span></span>
          </div>
          <p className="text-sm font-semibold max-w-sm opacity-80 leading-relaxed">
            Fast, accessible, and neobrutalist-designed decision wheels, randomizers, and productivity timers. Settle choices instantly.
          </p>
        </div>

        {/* Use Cases */}
        <div className="flex flex-col gap-3">
          <h4 className="font-extrabold text-sm uppercase tracking-widest text-retro-navy/55 dark:text-cream/55">
            Use Cases
          </h4>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <Link href="/for-teachers" className="hover:text-retro-orange transition-colors">
              For Teachers
            </Link>
            <Link href="/for-business" className="hover:text-retro-orange transition-colors">
              For Business
            </Link>
            <Link href="/for-events" className="hover:text-retro-orange transition-colors">
              For Events
            </Link>
          </div>
        </div>

        {/* Guides & Features */}
        <div className="flex flex-col gap-3">
          <h4 className="font-extrabold text-sm uppercase tracking-widest text-retro-navy/55 dark:text-cream/55">
            Guides & Info
          </h4>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <Link href="/guides/how-random-wheels-work" className="hover:text-retro-orange transition-colors">
              How Wheels Work
            </Link>
            <Link href="/guides/spin-wheel-psychology" className="hover:text-retro-orange transition-colors">
              Wheel Psychology
            </Link>
            <Link href="/features/weighted-wheel" className="hover:text-retro-orange transition-colors">
              Weighted Wheels
            </Link>
            <Link href="/features/elimination-mode" className="hover:text-retro-orange transition-colors">
              Elimination Mode
            </Link>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="flex flex-col gap-3">
          <h4 className="font-extrabold text-sm uppercase tracking-widest text-retro-navy/55 dark:text-cream/55">
            Recent Blog
          </h4>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <Link href="/blog/spin-wheels-for-decision-making" className="hover:text-retro-orange transition-colors">
              Wheels for Decisions
            </Link>
            <Link href="/blog/party-games-for-adults" className="hover:text-retro-orange transition-colors">
              Party Games
            </Link>
            <Link href="/blog/spin-wheels-in-modern-education" className="hover:text-retro-orange transition-colors">
              Classroom Incentive
            </Link>
            <Link href="/blog/time-boxing-to-prevent-burnout" className="hover:text-retro-orange transition-colors">
              Avoid Burnout
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-retro-navy/10 dark:border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-semibold opacity-70 text-center md:text-left">
          &copy; {currentYear} GameWheelClub. All rights reserved. Zero-cookie locally computed utility.
        </p>

        <div className="flex gap-6 text-xs font-semibold">
          <Link href="/about" className="hover:text-retro-orange transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-retro-orange transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-retro-orange transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-retro-orange transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
