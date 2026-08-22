import { ShieldCheck, Server, FileCheck, Lock, Eye, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface SecurityPointItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SECURITY_DATA: Record<'en' | 'ar', {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  stats: [string, string, string];
  items: SecurityPointItem[];
}> = {
  en: {
    eyebrow: 'Security & Governance',
    title: 'Built for sovereign',
    highlight: 'data and trust.',
    description: 'Kayan AI is architected from the ground up to meet the stringent security and governance demands of Saudi government entities and enterprise corporations. Your data stays in-Kingdom, your models stay private, and your compliance stays intact.',
    stats: ['In-Kingdom data', 'Monitoring', 'Aligned'],
    items: [
      {
        icon: Server,
        title: 'In-Kingdom Hosting',
        description: "All infrastructure runs within Saudi Arabia's sovereign data centers. Your data never leaves national borders.",
      },
      {
        icon: Lock,
        title: 'End-to-End Encryption',
        description: 'AES-256 encryption at rest and TLS 1.3 in transit. Every interaction is cryptographically secured.',
      },
      {
        icon: FileCheck,
        title: 'Full Audit Trails',
        description: 'Every action Kayan takes is logged with timestamp, user context, and decision rationale — ready for any compliance review.',
      },
      {
        icon: Eye,
        title: 'Role-Based Access Control',
        description: 'Granular permissions ensure users only see and act on what their role permits, enforced at the data layer.',
      },
      {
        icon: Scale,
        title: 'Regulatory Compliance',
        description: 'Aligned with NCA guidelines, PDPL requirements, and Saudi government data governance standards.',
      },
      {
        icon: ShieldCheck,
        title: 'Zero Data Retraining',
        description: 'Your data is never used to train shared models. Each deployment maintains isolated, private model weights.',
      },
    ],
  },
  ar: {
    eyebrow: 'الأمان والحوكمة',
    title: 'مصمم لبيانات',
    highlight: 'سيادية وموثوقة.',
    description: 'صُمم كيان من الأساس لتلبية متطلبات الأمان والحوكمة الصارمة للجهات الحكومية والشركات في المملكة. تبقى بياناتك داخل المملكة ونماذجك خاصة وامتثالك محفوظاً.',
    stats: ['بيانات داخل المملكة', 'مراقبة مستمرة', 'متوافق'],
    items: [
      {
        icon: Server,
        title: 'استضافة داخل المملكة',
        description: 'تعمل البنية التحتية بالكامل داخل مراكز بيانات سيادية في المملكة، ولا تغادر بياناتك الحدود الوطنية.',
      },
      {
        icon: Lock,
        title: 'تشفير شامل',
        description: 'تشفير AES-256 للبيانات المخزنة وTLS 1.3 أثناء النقل يحمي كل تفاعل.',
      },
      {
        icon: FileCheck,
        title: 'سجلات تدقيق كاملة',
        description: 'يسجل كل إجراء مع الوقت وسياق المستخدم ومبررات القرار، جاهزاً لأي مراجعة امتثال.',
      },
      {
        icon: Eye,
        title: 'تحكم بالوصول حسب الدور',
        description: 'تضمن الصلاحيات الدقيقة أن يرى المستخدمون ما يسمح به دورهم فقط.',
      },
      {
        icon: Scale,
        title: 'امتثال تنظيمي',
        description: 'متوافق مع إرشادات الهيئة الوطنية للأمن السيبراني ومتطلبات نظام حماية البيانات الشخصية.',
      },
      {
        icon: ShieldCheck,
        title: 'لا إعادة تدريب على البيانات',
        description: 'لا تُستخدم بياناتك لتدريب نماذج مشتركة، ويحافظ كل نشر على عزلة أوزانه الخاصة.',
      },
    ],
  },
};

export default function Security() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const copy = SECURITY_DATA[lang];

  return (
    <section 
      id="security" 
      dir={isArabic ? 'rtl' : 'ltr'} 
      className="relative py-32 bg-[#080808] overflow-hidden transform-gpu"
    >
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none transform-gpu" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — messaging */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-400/20 w-fit">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
                {copy.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {copy.title}
              <br />
              <span className="gold-text">{copy.highlight}</span>
            </h2>

            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              {copy.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-5 rounded-2xl glass border border-white/10 hover:border-gold-400/30 transition-all duration-300 transform-gpu group">
                <div className="text-3xl font-bold gold-text tracking-tight group-hover:scale-105 transition-transform">100%</div>
                <div className="text-xs text-neutral-400 mt-1 font-medium">{copy.stats[0]}</div>
              </div>
              <div className="p-5 rounded-2xl glass border border-white/10 hover:border-gold-400/30 transition-all duration-300 transform-gpu group">
                <div className="text-3xl font-bold gold-text tracking-tight group-hover:scale-105 transition-transform">24/7</div>
                <div className="text-xs text-neutral-400 mt-1 font-medium">{copy.stats[1]}</div>
              </div>
              <div className="p-5 rounded-2xl glass border border-white/10 hover:border-gold-400/30 transition-all duration-300 transform-gpu group">
                <div className="text-3xl font-bold gold-text tracking-tight group-hover:scale-105 transition-transform">NCA</div>
                <div className="text-xs text-neutral-400 mt-1 font-medium">{copy.stats[2]}</div>
              </div>
            </div>
          </div>

          {/* Right — security points grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {copy.items.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="group p-6 rounded-3xl glass border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1 transform-gpu shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 group-hover:glow-gold transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
