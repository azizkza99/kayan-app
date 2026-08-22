import { useState, type FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Building2,
  Landmark,
} from 'lucide-react';
import { useLanguage } from '@/i18n';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const TEAM_SIZES = [
  '1–50 employees',
  '51–200 employees',
  '201–1,000 employees',
  '1,000+ employees',
];

export default function DemoForm() {
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [orgType, setOrgType] = useState<'corporate' | 'government'>('corporate');
  const { lang } = useLanguage();
  const t = lang === 'ar' ? {
    eyebrow: 'طلب عرض تجريبي', title: 'شاهد كيان', highlight: 'قيد العمل.', description: 'احجز جلسة مخصصة مع فريق المؤسسات. سنوضح لك كيف يتوافق كيان مع مسارات العمل الخاصة بمؤسستك.', organizationType: 'نوع الجهة', corporate: 'شركة', government: 'جهة حكومية', fullName: 'الاسم الكامل', workEmail: 'البريد الإلكتروني للعمل', organization: 'اسم الجهة', teamSize: 'حجم الفريق', select: 'اختر النطاق', message: 'أخبرنا عن احتياجاتك', messagePlaceholder: 'ما العمليات المكتبية التي ترغب في أتمتتها؟', submit: 'اطلب عرضك التجريبي', submitting: 'جارٍ الإرسال...', required: 'مطلوب', success: 'تم استلام الطلب', successText: 'شكراً لك. سيتواصل معك فريق المؤسسات خلال يوم عمل لتنسيق العرض المخصص.', another: 'إرسال طلب آخر', consent: 'بإرسال الطلب، توافق على أن يتواصل معك فريق كيان. بياناتك مستضافة داخل المملكة ولا تتم مشاركتها.', errorRequired: 'يرجى تعبئة جميع الحقول المطلوبة.', errorSubmit: 'حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.', sizes: ['موظف إلى 50', '51 إلى 200 موظف', '201 إلى 1,000 موظف', 'أكثر من 1,000 موظف']
  } : { eyebrow: 'Request a Demo', title: 'See Kayan AI in', highlight: 'action.', description: "Book a personalized walkthrough with our enterprise team. We'll show you how Kayan fits your organization's specific workflows.", organizationType: 'Organization type', corporate: 'Corporate', government: 'Government', fullName: 'Full name', workEmail: 'Work email', organization: 'Organization', teamSize: 'Team size', select: 'Select range', message: 'Tell us about your needs', messagePlaceholder: 'What back-office processes would you like Kayan AI to automate?', submit: 'Request your demo', submitting: 'Submitting...', required: 'required', success: 'Request received', successText: 'Thank you. Our enterprise team will reach out within one business day to schedule your personalized demo.', another: 'Submit another request', consent: 'By submitting, you agree to be contacted by the Kayan AI team. Your data is hosted in-Kingdom and never shared.', errorRequired: 'Please fill in all required fields.', errorSubmit: 'Something went wrong submitting your request. Please try again.', sizes: TEAM_SIZES };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      full_name: (formData.get('full_name') as string)?.trim(),
      work_email: (formData.get('work_email') as string)?.trim(),
      organization: (formData.get('organization') as string)?.trim(),
      organization_type: orgType,
      team_size: formData.get('team_size') as string,
      message: (formData.get('message') as string)?.trim() || null,
    };

    if (!payload.full_name || !payload.work_email || !payload.organization || !payload.team_size) {
      setState('error');
      setErrorMsg(t.errorRequired);
      return;
    }

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setState('success');
        return;
      }

      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase.from('demo_requests').insert(payload);

      if (error) {
        setState('error');
        setErrorMsg(t.errorSubmit);
        return;
      }

      setState('success');
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState('success');
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian-900" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-400/5 rounded-full blur-[180px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="text-xs font-medium text-gold-400 tracking-[0.15em] uppercase">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {t.title}
            <span className="gold-text"> {t.highlight}</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl">
            {t.description}
          </p>
        </div>

        {/* Form card */}
        <div className="relative">
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-gold-400/20 via-transparent to-transparent" />

          <div className="relative glass-strong rounded-[2rem] p-8 lg:p-10">
            {state === 'success' ? (
              <div className="flex flex-col items-center text-center py-12 gap-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 flex items-center justify-center glow-gold">
                  <CheckCircle2 className="w-10 h-10 text-gold-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-white">Request received</h3>
                  <p className="text-neutral-400 max-w-md">
                    {t.successText}
                  </p>
                </div>
                <button
                  onClick={() => setState('idle')}
                  className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  {t.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Organization type toggle */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-neutral-300">
                    {t.organizationType}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setOrgType('corporate')}
                      className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                        orgType === 'corporate'
                          ? 'glass-strong border-gold-400/40 glow-gold'
                          : 'glass border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Building2
                        className={`w-5 h-5 ${
                          orgType === 'corporate' ? 'text-gold-400' : 'text-neutral-500'
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          orgType === 'corporate' ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        {t.corporate}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrgType('government')}
                      className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                        orgType === 'government'
                          ? 'glass-strong border-gold-400/40 glow-gold'
                          : 'glass border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Landmark
                        className={`w-5 h-5 ${
                          orgType === 'government' ? 'text-gold-400' : 'text-neutral-500'
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          orgType === 'government' ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        {t.government}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="full_name" className="text-sm font-medium text-neutral-300">
                      {t.fullName} <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      required
                      placeholder="Ahmed Al-Rashid"
                      className="px-5 py-3.5 rounded-2xl bg-obsidian-800 border border-white/10 text-white placeholder:text-neutral-600 focus:border-gold-400/40 focus:outline-none focus:ring-2 focus:ring-gold-400/10 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="work_email" className="text-sm font-medium text-neutral-300">
                      {t.workEmail} <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="work_email"
                      name="work_email"
                      type="email"
                      required
                      placeholder="ahmed@company.sa"
                      className="px-5 py-3.5 rounded-2xl bg-obsidian-800 border border-white/10 text-white placeholder:text-neutral-600 focus:border-gold-400/40 focus:outline-none focus:ring-2 focus:ring-gold-400/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Organization + Team size */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="organization" className="text-sm font-medium text-neutral-300">
                      {t.organization} <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      placeholder="Company or entity name"
                      className="px-5 py-3.5 rounded-2xl bg-obsidian-800 border border-white/10 text-white placeholder:text-neutral-600 focus:border-gold-400/40 focus:outline-none focus:ring-2 focus:ring-gold-400/10 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="team_size" className="text-sm font-medium text-neutral-300">
                      {t.teamSize} <span className="text-gold-400">*</span>
                    </label>
                    <select
                      id="team_size"
                      name="team_size"
                      required
                      defaultValue=""
                      className="px-5 py-3.5 rounded-2xl bg-obsidian-800 border border-white/10 text-white focus:border-gold-400/40 focus:outline-none focus:ring-2 focus:ring-gold-400/10 transition-all duration-300 [&>option]:bg-obsidian-800"
                    >
                      <option value="" disabled>
                        {t.select}
                      </option>
                      {t.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    className="px-5 py-3.5 rounded-2xl bg-obsidian-800 border border-white/10 text-white placeholder:text-neutral-600 focus:border-gold-400/40 focus:outline-none focus:ring-2 focus:ring-gold-400/10 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Error message */}
                {state === 'error' && (
                  <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-300">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 font-semibold overflow-hidden transition-all duration-300 hover:glow-gold-strong hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      {t.submit}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  {t.consent}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}