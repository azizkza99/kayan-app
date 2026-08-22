import { ShieldCheck, Server, FileCheck, Lock, Eye, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SecurityPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SECURITY_POINTS: SecurityPoint[] = [
  {
    icon: Server,
    title: 'In-Kingdom Hosting',
    description:
      "All infrastructure runs within Saudi Arabia's sovereign data centers. Your data never leaves national borders.",
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description:
      'AES-256 encryption at rest and TLS 1.3 in transit. Every interaction is cryptographically secured.',
  },
  {
    icon: FileCheck,
    title: 'Full Audit Trails',
    description:
      'Every action Kayan takes is logged with timestamp, user context, and decision rationale — ready for any compliance review.',
  },
  {
    icon: Eye,
    title: 'Role-Based Access Control',
    description:
      'Granular permissions ensure users only see and act on what their role permits, enforced at the data layer.',
  },
  {
    icon: Scale,
    title: 'Regulatory Compliance',
    description:
      'Aligned with NCA guidelines, PDPL requirements, and Saudi government data governance standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Data Retraining',
    description:
      'Your data is never used to train shared models. Each deployment maintains isolated, private model weights.',
  },
];

export default function Security() {
  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian-850" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — messaging */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
                Security & Governance
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Built for sovereign
              <br />
              <span className="gold-text">data and trust.</span>
            </h2>

            <p className="text-lg text-neutral-400 leading-relaxed">
              Kayan AI is architected from the ground up to meet the stringent
              security and governance demands of Saudi government entities and
              enterprise corporations. Your data stays in-Kingdom, your models
              stay private, and your compliance stays intact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-5 rounded-2xl glass">
                <div className="text-3xl font-bold gold-text">100%</div>
                <div className="text-xs text-neutral-500 mt-1">In-Kingdom data</div>
              </div>
              <div className="p-5 rounded-2xl glass">
                <div className="text-3xl font-bold gold-text">24/7</div>
                <div className="text-xs text-neutral-500 mt-1">Monitoring</div>
              </div>
              <div className="p-5 rounded-2xl glass">
                <div className="text-3xl font-bold gold-text">NCA</div>
                <div className="text-xs text-neutral-500 mt-1">Aligned</div>
              </div>
            </div>
          </div>

          {/* Right — security points grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {SECURITY_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="group p-6 rounded-3xl glass hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
