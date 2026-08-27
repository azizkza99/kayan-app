import {
  Bot,
  Languages,
  ShieldCheck,
  Brain,
  FileText,
  Gauge,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

const FEATURES_DATA: Record<'en' | 'ar', {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  items: FeatureItem[];
}> = {
  en: {
    eyebrow: 'Concept capabilities',
    title: 'A practical blueprint for',
    highlight: 'better operational workflows.',
    description: 'The current prototype illustrates six product directions. Production capabilities would be validated and scoped with each pilot.',
    items: [
      {
        icon: Bot,
        title: 'Workflow Mapping',
        description: 'Identify repetitive steps, owners, inputs, and approval points before deciding what should be automated.',
        highlight: true,
      },
      {
        icon: Languages,
        title: 'Arabic & English Experience',
        description: 'A bilingual interface designed for Arabic-first teams, with clear right-to-left and left-to-right navigation.',
      },
      {
        icon: ShieldCheck,
        title: 'Privacy-Aware Architecture',
        description: 'Start with data classification, minimum-access rules, and deployment requirements before connecting operational information.',
        highlight: true,
      },
      {
        icon: Brain,
        title: 'Decision-Support Concepts',
        description: 'Prototype summaries and review queues that keep decision ownership with authorized people.',
      },
      {
        icon: FileText,
        title: 'Document Workflow Design',
        description: 'Explore how documents could be classified, reviewed, and routed with explicit human checkpoints.',
      },
      {
        icon: Gauge,
        title: 'Measurable Pilot Outcomes',
        description: 'Define baseline time, error rate, and review quality so a pilot can be evaluated with evidence.',
      },
    ]
  },
  ar: {
    eyebrow: 'إمكانات التصور',
    title: 'مخطط عملي لبناء',
    highlight: 'مسارات تشغيلية أفضل.',
    description: 'يوضح النموذج الحالي ستة اتجاهات محتملة للمنتج، وتُختبر قدرات الإنتاج وتُحدد وفق نطاق كل تجربة أولية.',
    items: [
      {
        icon: Bot,
        title: 'رسم مسار العمل',
        description: 'تحديد الخطوات المتكررة والمسؤولين والمدخلات ونقاط الاعتماد قبل تقرير ما يستحق الأتمتة.',
        highlight: true,
      },
      {
        icon: Languages,
        title: 'تجربة عربية وإنجليزية',
        description: 'واجهة ثنائية اللغة صُممت للفرق العربية أولاً، مع تنقل واضح في اتجاهي الكتابة.',
      },
      {
        icon: ShieldCheck,
        title: 'بنية تراعي الخصوصية',
        description: 'البدء بتصنيف البيانات، والحد الأدنى من الصلاحيات، ومتطلبات الاستضافة قبل ربط أي معلومات تشغيلية.',
        highlight: true,
      },
      {
        icon: Brain,
        title: 'تصورات لدعم القرار',
        description: 'نماذج أولية للملخصات وقوائم المراجعة مع إبقاء القرار لدى الأشخاص المخولين.',
      },
      {
        icon: FileText,
        title: 'تصميم دورة المستندات',
        description: 'استكشاف آلية تصنيف المستندات ومراجعتها وتوجيهها مع نقاط تحقق بشرية واضحة.',
      },
      {
        icon: Gauge,
        title: 'نتائج قابلة للقياس',
        description: 'تحديد الزمن الأساسي ونسبة الأخطاء وجودة المراجعة حتى تُقيّم التجربة بالأدلة.',
      },
    ]
  }
};

function FeatureCard({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon;
  return (
    <div
      className={`group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 transform-gpu ${
        feature.highlight
          ? 'glass-strong border border-gold-400/20 hover:border-gold-400/40 shadow-xl'
          : 'glass border border-white/10 hover:border-white/25 shadow-lg'
      }`}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform-gpu ${
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
        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-gold-300 transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {/* Bottom border accent */}
      <div
        className={`absolute bottom-0 left-8 right-8 h-[2px] transition-all duration-300 ${
          feature.highlight
            ? 'bg-gradient-to-r from-transparent via-gold-400/50 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        }`}
      />
    </div>
  );
}

export default function Features() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const copy = FEATURES_DATA[lang];

  return (
    <section 
      id="capabilities" 
      dir={isArabic ? 'rtl' : 'ltr'} 
      className="relative py-32 bg-[#0a0a0a] overflow-hidden transform-gpu"
    >
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none transform-gpu" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-400/20">
            <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
              {copy.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            {copy.title}
            <br />
            <span className="gold-text">{copy.highlight}</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            {copy.description}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {copy.items.map((feature, index) => (
            <FeatureCard key={`feature-${index}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
