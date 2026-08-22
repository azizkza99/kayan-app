import { Plug, Brain, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: Plug,
    number: '01',
    title: 'Connect Your Systems',
    description:
      'Kayan AI integrates securely with your existing enterprise tools — ERP, CRM, document stores, and internal databases — through authenticated API connectors.',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Train & Configure',
    description:
      "Define your workflows, approval chains, and decision parameters. Kayan learns your organization's context, terminology, and compliance rules in both Arabic and English.",
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Automate & Operate',
    description:
      'Deploy Kayan to handle back-office tasks 24/7. Documents are processed, reports generated, and routine decisions made — with full audit trails for every action.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Monitor & Optimize',
    description:
      'Real-time dashboards show throughput, accuracy, and savings. Kayan continuously refines its models based on feedback, scaling from pilot to enterprise-wide.',
  },
];

function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  const Icon = step.icon;
  return (
    <div className="relative flex flex-col lg:flex-row gap-8 items-start group">
      {/* Step number + icon */}
      <div className="relative flex-shrink-0">
        <div className="relative w-20 h-20 rounded-3xl glass-strong flex items-center justify-center transition-all duration-500 group-hover:glow-gold group-hover:border-gold-400/40">
          <Icon className="w-8 h-8 text-gold-400" />
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-obsidian-900 text-xs font-bold">
            {step.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
        <p className="text-base text-neutral-400 leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>

      {/* Arrow connector — only on desktop, not last */}
      {!isLast && (
        <div className="hidden lg:flex absolute left-10 top-20 -translate-x-1/2 items-center justify-center">
          <ArrowRight className="w-5 h-5 text-gold-400/30 group-hover:text-gold-400/60 transition-colors" />
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian-900" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            From integration to autonomy in
            <br />
            <span className="gold-text">four steps.</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl">
            A proven enterprise onboarding journey, designed for minimal disruption
            and maximum time-to-value.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-12 lg:gap-16 max-w-4xl mx-auto">
          {STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full glass-strong text-white font-medium hover:glow-gold hover:border-gold-400/40 transition-all duration-300 flex items-center gap-2"
          >
            Start your integration journey
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
