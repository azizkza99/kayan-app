import { ArrowRight, Play, Shield, Languages, Sparkles } from 'lucide-react';
import SplineRobot from './SplineRobot';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-obsidian-900" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 radial-glow" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-400/5 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
              </span>
              <span className="text-xs font-medium text-neutral-300 tracking-wide">
                Built for corporate teams in Saudi Arabia
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Your AI Business{' '}
              <span className="gold-text">Concierge.</span>
              <br />
              Always on.
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
              Kayan AI delivers 24/7 autonomous back-office automation for corporate
              enterprises and government entities. Process documents, generate reports,
              and support executive decisions — with data hosted entirely in-Kingdom and
              native Arabic and English at every touchpoint.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 font-semibold overflow-hidden transition-all duration-300 hover:glow-gold-strong hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Request a Demo</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#how-it-works"
                className="group px-8 py-4 rounded-full glass text-neutral-200 font-medium hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                See how it works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass">
                <Shield className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-neutral-300 font-medium">
                  Data hosted in-Kingdom
                </span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass">
                <Languages className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-neutral-300 font-medium">
                  Arabic & English native
                </span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-neutral-300 font-medium">
                  24/7 autonomous
                </span>
              </div>
            </div>
          </div>

          {/* Right column — 3D Robot */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2rem] border border-gold-400/10 pointer-events-none" />
            <div className="absolute -inset-8 rounded-[2.5rem] border border-white/5 pointer-events-none" />

            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              <SplineRobot />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-strong px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-neutral-300 font-medium tracking-wide">
                Live interactive model — drag to explore
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-obsidian-900 pointer-events-none" />
    </section>
  );
}
