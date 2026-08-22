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
    eyebrow: 'Core Capabilities',
    title: 'Everything your back office needs,',
    highlight: 'autonomously handled.',
    description: "Six pillars of intelligent automation, engineered for the demands of Saudi Arabia's most ambitious organizations.",
    items: [
      {
        icon: Bot,
        title: 'Autonomous Back-Office Operations',
        description: 'Kayan AI runs your repetitive workflows around the clock — data entry, document processing, approvals routing — without human intervention or fatigue.',
        highlight: true,
      },
      {
        icon: Languages,
        title: 'Native Arabic & English',
        description: 'Full bilingual understanding, generation, and reasoning. No translation layer — Kayan thinks and responds natively in both languages.',
      },
      {
        icon: ShieldCheck,
        title: 'In-Kingdom Data Sovereignty',
        description: 'All data is processed and stored within Saudi Arabia, meeting the strictest national data residency and compliance requirements.',
        highlight: true,
      },
      {
        icon: Brain,
        title: 'Executive Decision Support',
        description: 'Context-aware summaries, predictive insights, and scenario modeling that help leadership make faster, better-informed decisions.',
      },
      {
        icon: FileText,
        title: 'Intelligent Document Processing',
        description: 'Automatically classify, extract, and route documents — from invoices to contracts — with human-level accuracy and audit trails.',
      },
      {
        icon: Gauge,
        title: 'Enterprise-Grade Performance',
        description: 'Built for scale: handles thousands of concurrent tasks with sub-second response times, monitored 24/7 with full observability.',
      },
    ]
  },
  ar: {
    eyebrow: 'الإمكانات الأساسية',
    title: 'كل ما يحتاجه مكتبك الخلفي،',
    highlight: 'بإدارة ذاتية كاملة.',
    description: 'ست ركائز للأتمتة الذكية، صُممت لتلبية احتياجات المؤسسات الأكثر طموحاً في المملكة العربية السعودية.',
    items: [
      {
        icon: Bot,
        title: 'عمليات المكاتب الخلفية الذاتية',
        description: 'يدير كيان مهام سير العمل المتكررة على مدار الساعة، من إدخال البيانات إلى معالجة المستندات ومسارات الموافقات.',
        highlight: true,
      },
      {
        icon: Languages,
        title: 'العربية والإنجليزية أصلياً',
        description: 'فهم وتوليد واستدلال كامل باللغتين دون طبقة ترجمة، ليفكر كيان ويستجيب بلغتك الأم مباشرة.',
      },
      {
        icon: ShieldCheck,
        title: 'سيادة البيانات داخل المملكة',
        description: 'تُعالج البيانات وتُخزّن محلياً داخل المملكة العربية السعودية وفق أعلى متطلبات الإقامة والامتثال الوطني.',
        highlight: true,
      },
      {
        icon: Brain,
        title: 'دعم القرار التنفيذي',
        description: 'ملخصات واعية بالسياق ورؤى تنبؤية تساعد القيادة التنفيذية على اتخاذ قرارات دقيقة وأسرع.',
      },
      {
        icon: FileText,
        title: 'معالجة المستندات الذكية',
        description: 'تصنيف آلي للمستندات واستخراجها وتوجيهها مع مسارات تدقيق وتوثيق كاملة لكل إجراء.',
      },
      {
        icon: Gauge,
        title: 'أداء بمستوى المؤسسات',
        description: 'مصمم للتوسع بأمان مع آلاف المهام المتزامنة ومراقبة مستمرة للأداء على مدار الساعة.',
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
