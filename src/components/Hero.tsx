import { ArrowRight, Globe, Languages, Play, Shield, Sparkles, Activity } from 'lucide-react';
import SplineRobot from './SplineRobot';
import { useLanguage } from '@/i18n';

const content = {
  en: {
    badge: 'Arabic-first enterprise automation concept',
    line1: 'Explore a clearer way to',
    line2: 'design, test, and improve',
    line3: 'everyday business workflows.',
    description:
      'Kayan is an interactive product prototype for mapping repetitive office processes, shaping an automation pilot, and evaluating the experience before production investment.',
    requestDemo: 'Share a Use Case',
    seeHow: 'Explore the Concept',
    trust: ['Privacy-aware design', 'Arabic & English interface', 'Pilot-first delivery'],
    langSwitchAria: 'Switch language to Arabic',
  },
  ar: {
    badge: 'تصور عربي أولاً لأتمتة أعمال المؤسسات',
    line1: 'اكتشف طريقة أوضح',
    line2: 'لتصميم واختبار وتحسين',
    line3: 'مسارات العمل اليومية.',
    description:
      'كيان نموذج منتج تفاعلي يساعد على توصيف العمليات المكتبية المتكررة، وصياغة تجربة أتمتة محدودة، وتقييم التجربة قبل الاستثمار في بناء نظام إنتاجي.',
    requestDemo: 'شاركنا حالة استخدام',
    seeHow: 'استكشف التصور',
    trust: ['تصميم يراعي الخصوصية', 'واجهة عربية وإنجليزية', 'بدء تدريجي بنموذج تجريبي'],
    langSwitchAria: 'تغيير اللغة إلى الإنجليزية',
  },
} as const;

export default function Hero() {
  const { lang, toggleLang } = useLanguage();
  const isArabic = lang === 'ar';
  const locale = isArabic ? 'ar' : 'en';
  const t = content[locale];

  return (
    <section
      lang={locale}
      dir={isArabic ? 'rtl' : 'ltr'}
      aria-labelledby="hero-heading"
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#060606] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:py-28 transform-gpu"
    >
      {/* Background Ambience Layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#060606]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-pattern opacity-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 w-[500px] h-[500px] rounded-full bg-gold-400/10 blur-[140px] transform-gpu"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 w-[500px] h-[500px] rounded-full bg-gold-600/10 blur-[150px] transform-gpu"
      />

      {/* Language Switcher */}
      <div className="absolute end-6 top-24 z-30 sm:end-10">
        <button
          type="button"
          onClick={toggleLang}
          aria-label={t.langSwitchAria}
          className="group glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-200 shadow-xl transition-all duration-300 hover:border-gold-400/60 hover:text-white transform-gpu"
        >
          <Globe aria-hidden="true" className="size-4 text-gold-400 transition-transform duration-300 group-hover:rotate-180" />
          <span>{isArabic ? 'English' : 'العربية'}</span>
        </button>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:max-w-[90rem] lg:px-12 flex flex-col justify-center">
        <div className="grid items-center gap-y-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-x-12 xl:gap-x-16">
          
          {/* Left Column (Text & CTAs) */}
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col gap-6 w-full">
                
              {/* Header Group */}
              <div className="flex flex-col gap-5">
                {/* Elite Badge */}
                <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 border border-gold-400/30 bg-neutral-900/60 shadow-lg w-fit">
                  <span aria-hidden="true" className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full rounded-full bg-gold-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-gold-400" />
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold-300 sm:text-sm">{t.badge}</span>
                </div>

                {/* Headings with Executive Proportions */}
                <h1
                  id="hero-heading"
                  className="flex flex-col gap-2 sm:gap-3 w-full text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.18]"
                >
                  <span className="block text-neutral-100">{t.line1}</span>
                  <span className="block gold-text py-1">
                    {t.line2}
                  </span>
                  <span className="block text-neutral-200">{t.line3}</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl font-normal">
                {t.description}
              </p>

              {/* Action Buttons Hub */}
              <div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-neutral-950 font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 w-full sm:w-auto transform-gpu"
                >
                  <span className="relative z-10 tracking-wide">{t.requestDemo}</span>
                  <ArrowRight className={`relative z-10 w-4 h-4 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>
                
                <a
                  href="#how-it-works"
                  className="group px-8 py-4 rounded-2xl glass-strong border border-white/15 text-neutral-200 font-semibold hover:text-white hover:border-gold-400/40 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg w-full sm:w-auto transform-gpu"
                >
                  <Play className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform duration-300 fill-gold-400/20" />
                  <span className="tracking-wide">{t.seeHow}</span>
                </a>
              </div>

              {/* Enterprise Trust Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 mt-2 border-t border-white/10">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass border border-white/10 bg-neutral-900/40 transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/80 transform-gpu group">
                  <div className="p-2.5 rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 font-semibold leading-tight">{t.trust[0]}</span>
                </div>
                
                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass border border-white/10 bg-neutral-900/40 transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/80 transform-gpu group">
                  <div className="p-2.5 rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Languages className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 font-semibold leading-tight">{t.trust[1]}</span>
                </div>
                
                <div className="flex items-center gap-3.5 p-4 rounded-2xl glass border border-white/10 bg-neutral-900/40 transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/80 transform-gpu group">
                  <div className="p-2.5 rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 font-semibold leading-tight">{t.trust[2]}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Elite 3D Container with Cyber HUD Borders) */}
          <div className="relative hidden w-full items-center justify-center transform-gpu md:flex">
            {/* Glowing Backdrop Frame */}
            <div className="absolute -inset-2 rounded-[2.5rem] border border-gold-400/30 pointer-events-none bg-gradient-to-tr from-gold-400/10 via-gold-400/5 to-transparent blur-sm" />
            
            <div className="relative w-full max-w-[540px] aspect-[4/4.5] mx-auto overflow-hidden rounded-[2.2rem] glass-strong border border-gold-400/30 shadow-2xl bg-neutral-950/90">
              
              {/* Telemetry Badge inside Robot Box */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-gold-400/30 backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span className="text-[10px] font-mono font-semibold text-gold-300 uppercase tracking-widest">
                  CONCEPT_PREVIEW
                </span>
              </div>

              <SplineRobot />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
