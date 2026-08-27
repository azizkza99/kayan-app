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
    eyebrow: 'Trust by design',
    title: 'Clear principles,',
    highlight: 'honest boundaries.',
    description: 'This prototype demonstrates privacy-aware interface and database patterns; it is not a certified production platform. Hosting region, controls, integrations, and regulatory scope must be verified for each deployment.',
    stats: ['Database guard', 'Arabic-first', 'Current status'],
    items: [
      {
        icon: Server,
        title: 'Deployment Requirements First',
        description: 'Data residency and hosting constraints are documented and verified before any production architecture is selected.',
      },
      {
        icon: Lock,
        title: 'Least-Privilege Access',
        description: 'The request table uses row-level security, and the browser receives only a public client key—not an administrative secret.',
      },
      {
        icon: FileCheck,
        title: 'Evidence Before Claims',
        description: 'Performance, accuracy, and control claims should be measured during a scoped pilot before appearing in production messaging.',
      },
      {
        icon: Eye,
        title: 'Human Review Points',
        description: 'Proposed workflows keep exceptions and consequential decisions visible to authorized reviewers.',
      },
      {
        icon: Scale,
        title: 'Compliance Is Verified',
        description: 'NCA, PDPL, and sector requirements need formal review and evidence; this concept does not claim certification.',
      },
      {
        icon: ShieldCheck,
        title: 'Data Minimization',
        description: 'Collect only what a pilot needs, define retention explicitly, and keep sensitive production data out of early prototypes.',
      },
    ],
  },
  ar: {
    eyebrow: 'الثقة ضمن التصميم',
    title: 'مبادئ واضحة،',
    highlight: 'وحدود صريحة.',
    description: 'يعرض هذا النموذج أنماطاً تراعي الخصوصية في الواجهة وقاعدة البيانات، لكنه ليس منصة إنتاجية معتمدة. يجب التحقق من منطقة الاستضافة والضوابط والتكاملات والنطاق التنظيمي لكل تنفيذ.',
    stats: ['حماية قاعدة البيانات', 'العربية أولاً', 'الحالة الحالية'],
    items: [
      {
        icon: Server,
        title: 'متطلبات النشر أولاً',
        description: 'تُوثق قيود إقامة البيانات والاستضافة ويُتحقق منها قبل اختيار أي بنية إنتاجية.',
      },
      {
        icon: Lock,
        title: 'أقل صلاحية ممكنة',
        description: 'يستخدم جدول الطلبات سياسات أمان على مستوى الصف، ولا تصل للمتصفح أي مفاتيح إدارية سرية.',
      },
      {
        icon: FileCheck,
        title: 'الدليل قبل الادعاء',
        description: 'يجب قياس الأداء والدقة والضوابط في تجربة محددة النطاق قبل عرضها كوعود إنتاجية.',
      },
      {
        icon: Eye,
        title: 'نقاط مراجعة بشرية',
        description: 'تُبقي المسارات المقترحة الحالات الاستثنائية والقرارات المؤثرة ظاهرة للمراجعين المخولين.',
      },
      {
        icon: Scale,
        title: 'الامتثال يُثبت ولا يُفترض',
        description: 'تتطلب متطلبات NCA وPDPL والقطاعات مراجعة وأدلة رسمية؛ ولا يدعي هذا التصور الحصول على اعتماد.',
      },
      {
        icon: ShieldCheck,
        title: 'تقليل البيانات',
        description: 'جمع ما تحتاجه التجربة فقط، وتحديد الاحتفاظ بوضوح، وإبعاد البيانات الحساسة عن النماذج المبكرة.',
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
                <div className="text-3xl font-bold gold-text tracking-tight group-hover:scale-105 transition-transform">RLS</div>
                <div className="text-xs text-neutral-400 mt-1 font-medium">{copy.stats[0]}</div>
              </div>
              <div className="p-5 rounded-2xl glass border border-white/10 hover:border-gold-400/30 transition-all duration-300 transform-gpu group">
                <div className="text-3xl font-bold gold-text tracking-tight group-hover:scale-105 transition-transform">RTL</div>
                <div className="text-xs text-neutral-400 mt-1 font-medium">{copy.stats[1]}</div>
              </div>
              <div className="p-5 rounded-2xl glass border border-white/10 hover:border-gold-400/30 transition-all duration-300 transform-gpu group">
                <div className="text-3xl font-bold gold-text tracking-tight group-hover:scale-105 transition-transform">Pilot</div>
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
