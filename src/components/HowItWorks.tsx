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
    title: 'A responsible pilot in',
    highlight: 'four clear stages.',
    description: 'A proposed discovery path for testing one workflow before committing to a production system.',
    cta: 'Share a workflow to evaluate',
    items: [
      {
        title: 'Define the Problem',
        description: 'Select one workflow, document its current steps, and agree on the users, data boundaries, and measurable outcome.',
      },
      {
        title: 'Design the Prototype',
        description: 'Shape the interface, approval points, and exception handling with realistic but non-sensitive test data.',
      },
      {
        title: 'Run a Controlled Pilot',
        description: 'Test the proposed flow with a limited group, human review, and an agreed rollback path. Production integrations are a separate scope.',
      },
      {
        title: 'Measure & Decide',
        description: 'Compare time, errors, and user feedback against the baseline, then decide whether to refine, stop, or plan production delivery.',
      },
    ],
  },
  ar: {
    eyebrow: 'آلية العمل',
    title: 'تجربة مسؤولة خلال',
    highlight: 'أربع مراحل واضحة.',
    description: 'مسار استكشاف مقترح لاختبار عملية واحدة قبل الالتزام ببناء نظام إنتاجي.',
    cta: 'شاركنا عملية لتقييمها',
    items: [
      {
        title: 'تحديد المشكلة',
        description: 'اختيار عملية واحدة، وتوثيق خطواتها الحالية، والاتفاق على المستخدمين وحدود البيانات والنتيجة القابلة للقياس.',
      },
      {
        title: 'تصميم النموذج الأولي',
        description: 'صياغة الواجهة ونقاط الاعتماد ومعالجة الحالات الاستثنائية باستخدام بيانات اختبار واقعية وغير حساسة.',
      },
      {
        title: 'تنفيذ تجربة محكومة',
        description: 'اختبار المسار المقترح مع مجموعة محدودة ومراجعة بشرية وخطة تراجع متفق عليها. تكاملات الإنتاج تُحدد في نطاق مستقل.',
      },
      {
        title: 'القياس واتخاذ القرار',
        description: 'مقارنة الزمن والأخطاء وملاحظات المستخدمين بالوضع الأساسي، ثم تقرير التحسين أو الإيقاف أو التخطيط للتنفيذ الإنتاجي.',
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
