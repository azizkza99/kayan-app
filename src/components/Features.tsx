import {
  Bot,
  Languages,
  ShieldCheck,
  Brain,
  FileText,
  Gauge,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: 'Autonomous Back-Office Operations',
    description:
      'Kayan AI runs your repetitive workflows around the clock — data entry, document processing, approvals routing — without human intervention or fatigue.',
    highlight: true,
  },
  {
    icon: Languages,
    title: 'Native Arabic & English',
    description:
      'Full bilingual understanding, generation, and reasoning. No translation layer — Kayan thinks and responds natively in both languages.',
  },
  {
    icon: ShieldCheck,
    title: 'In-Kingdom Data Sovereignty',
    description:
      'All data is processed and stored within Saudi Arabia, meeting the strictest national data residency and compliance requirements.',
    highlight: true,
  },
  {
    icon: Brain,
    title: 'Executive Decision Support',
    description:
      'Context-aware summaries, predictive insights, and scenario modeling that help leadership make faster, better-informed decisions.',
  },
  {
    icon: FileText,
    title: 'Intelligent Document Processing',
    description:
      'Automatically classify, extract, and route documents — from invoices to contracts — with human-level accuracy and audit trails.',
  },
  {
    icon: Gauge,
    title: 'Enterprise-Grade Performance',
    description:
      'Built for scale: handles thousands of concurrent tasks with sub-second response times, monitored 24/7 with full observability.',
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div
      className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 ${
        feature.highlight
          ? 'glass-strong border-gold-400/20 hover:border-gold-400/40'
          : 'glass hover:border-white/20'
      }`}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          feature.highlight ? 'bg-gold-400/5' : 'bg-white/[0.02]'
        }`}
      />

      {/* Icon */}
      <div className="relative mb-6">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            feature.highlight
              ? 'bg-gradient-to-br from-gold-400/20 to-gold-600/10 group-hover:glow-gold'
              : 'bg-white/5 group-hover:bg-gold-400/10'
          }`}
        >
          <Icon
            className={`w-7 h-7 ${
              feature.highlight ? 'text-gold-400' : 'text-neutral-300 group-hover:text-gold-400'
            } transition-colors duration-300`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
          {feature.title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom border accent */}
      <div
        className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-500 ${
          feature.highlight
            ? 'bg-gradient-to-r from-transparent via-gold-400/40 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        }`}
      />
    </div>
  );
}

export default function Features() {
  return (
    <section id="capabilities" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian-850" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-400/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            Everything your back office needs,
            <br />
            <span className="gold-text">autonomously handled.</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Six pillars of intelligent automation, engineered for the demands of
            Saudi Arabia's most ambitious organizations.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
