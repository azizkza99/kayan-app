import { Plug, Brain, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface StepMeta {
  icon: LucideIcon;
  number: string;
}

interface StepContent {
  title: string;
  description: string;
}

const STEP_ICONS: StepMeta[] = [
  { icon: Plug, number: '01' },
  { icon: Brain, number: '02' },
  { icon: Rocket, number: '03' },
  { icon: BarChart3, number: '04' },
];

const STEPS_DATA: Record<'en' | 'ar', {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  cta: string;
  items: StepContent[];
}> = {
  en: {
    eyebrow: 'How It Works',
    title: 'From integration to autonomy in',
    highlight: 'four steps.',
    description: 'A proven enterprise onboarding journey, designed for minimal disruption and maximum time-to-value.',
    cta: 'Start your integration journey',
    items: [
      {
        title: 'Connect Your Systems',
        description: 'Kayan AI integrates securely with your existing enterprise tools — ERP, CRM, document stores, and internal databases — through authenticated API connectors.',
      },
      {
        title: 'Train & Configure',
        description: "Define your workflows, approval chains, and decision parameters. Kayan learns your organization's context, terminology, and compliance rules in both Arabic and English.",
      },
      {
        title: 'Automate & Operate',
        description: 'Deploy Kayan to handle back-office tasks 24/7. Documents are processed, reports generated, and routine decisions made — with full audit trails for every action.',
      },
      {
        title: 'Monitor & Optimize',
        description: 'Real-time dashboards show throughput, accuracy, and savings. Kayan continuously refines its models based on feedback, scaling from pilot to enterprise-wide.',
      },
    ],
  },
  ar: {
    eyebrow: 'آلية العمل',
    title: 'من التكامل إلى الاستقلالية خلال',
    highlight: 'أربع خطوات مؤسسية.',
    description: 'رحلة تهيئة مؤسسية مجرّبة، صُممت وفق معايير السيادة والأمان لتمنحك أعلى قيمة تشغيلية بأقل جهد.',
    cta: 'ابدأ رحلة التكامل',
    items: [
      {
        title: 'التكامل والربط السيادي',
        description: 'يتكامل كيان بسلاسة وأمان مع بنية مؤسستك التحتية القائمة (أنظمة تخطيط الموارد، إدارة العملاء، ومستودعات المستندات) عبر موصلات برمجية مشفرة ومعتمدة.',
      },
      {
        title: 'الضبط والتدريب السياقي',
        description: 'صياغة قواعد العمل، مسارات الاعتماد، ومعايير اتخاذ القرار، ليتعلّم كيان السياق المؤسسي الخاص بك، مصطلحاتك الإدارية، ومتطلبات الامتثال التنظيمي بدقة بالغة.',
      },
      {
        title: 'التشغيل والتمكين الذاتي',
        description: 'تفعيل المنظومة لإدارة المهام المكتبية على مدار الساعة؛ لمعالجة المستندات المعقدة، إصدار التقارير التحليلية، وضمان سجل تدقيق وتوثيق كامل لكل إجراء.',
      },
      {
        title: 'الرؤية والتطوير المستمر',
        description: 'لوحات تحكم ذكية ترصد الإنتاجية، دقة الأداء، والوفر المالي لحظياً، بينما تتطور نماذج الذكاء الاصطناعي باستمرار لتتوسع مؤسسياً من النطاق التجريبي إلى الشامل.',
      },
    ],
  },
};

function StepCard({ 
  step, 
  meta, 
  isLast,
  isArabic 
}: { 
  step: StepContent; 
  meta: StepMeta; 
  isLast: boolean;
  isArabic: boolean;
}) {
  const Icon = meta.icon;
  return (
    <div className="relative flex flex-col lg:flex-row gap-8 items-start group transform-gpu">
      {/* Step number + icon */}
      <div className="relative flex-shrink-0">
        <div className="relative w-20 h-20 rounded-3xl glass-strong flex items-center justify-center transition-all duration-300 group-hover:glow-gold group-hover:border-gold-400/40">
          <Icon className="w-8 h-8 text-gold-400" />
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-obsidian-900 text-xs font-bold">
            {meta.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors">
          {step.title}
        </h3>
        <p className="text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
          {step.description}
        </p>
      </div>

      {/* Arrow connector — flipped for RTL/Arabic layout */}
      {!isLast && (
        <div className={`hidden lg:flex absolute ${isArabic ? 'right-10' : 'left-10'} top-20 -translate-x-1/2 items-center justify-center`}>
          <ArrowRight className={`w-5 h-5 text-gold-400/30 group-hover:text-gold-400/60 transition-colors ${isArabic ? 'rotate-180' : ''}`} />
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const copy = STEPS_DATA[lang];

  return (
    <section 
      id="how-it-works" 
      dir={isArabic ? 'rtl' : 'ltr'} 
      className="relative py-32 overflow-hidden transform-gpu"
    >
      <div className="absolute inset-0 bg-obsidian-900" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[150px] transform-gpu" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20 gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
              {copy.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            {copy.title}
            <br />
            <span className="gold-text">{copy.highlight}</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl">
            {copy.description}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-12 lg:gap-16 max-w-4xl mx-auto">
          {copy.items.map((step, index) => (
            <StepCard
              key={`step-0${index + 1}`}
              step={step}
              meta={STEP_ICONS[index]}
              isLast={index === copy.items.length - 1}
              isArabic={isArabic}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full glass-strong text-white font-medium hover:glow-gold hover:border-gold-400/40 transition-all duration-300 flex items-center gap-2"
          >
            {copy.cta}
            <ArrowRight className={`w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
