import { Github, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n';

const NAV_LINKS = [
  { en: 'Capabilities', ar: 'الإمكانات', href: '#capabilities' },
  { en: 'Pilot approach', ar: 'منهج التجربة', href: '#how-it-works' },
  { en: 'Trust principles', ar: 'مبادئ الثقة', href: '#security' },
  { en: 'Share a use case', ar: 'شارك حالة استخدام', href: '#contact' },
];

export default function Footer() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const copy = isArabic
    ? {
        label: 'تصور منتج تجريبي',
        description:
          'نموذج واجهة عربي أولاً لاستكشاف أتمتة مسارات العمل. لا يمثل خدمة إنتاجية أو اعتماداً تنظيمياً.',
        explore: 'استكشف',
        project: 'المشروع',
        source: 'عرض المستودع على GitHub',
        email: 'التواصل مع صاحب المشروع',
        rights: 'تصور كيان — مشروع تجريبي من عبدالعزيز أبوثريا.',
      }
    : {
        label: 'Product concept',
        description:
          'An Arabic-first interface prototype for exploring workflow automation. It is not a production service or regulatory certification.',
        explore: 'Explore',
        project: 'Project',
        source: 'View the repository on GitHub',
        email: 'Contact the project owner',
        rights: 'Kayan concept — an experimental project by Abdelaziz Abuthuraya.',
      };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-obsidian-950">
      <div className="absolute left-1/2 top-0 h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-gold-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <a href="#top" className="group flex w-fit items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 glow-gold">
                <Sparkles className="h-5 w-5 text-obsidian-900" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white">Kayan AI</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400/70">
                  {copy.label}
                </span>
              </div>
            </a>
            <p className="max-w-md text-sm leading-relaxed text-neutral-500">{copy.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-white">{copy.explore}</h2>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors duration-200 hover:text-gold-400"
                  >
                    {link[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-white">{copy.project}</h2>
            <a
              href="https://github.com/azizkza99/kayan-app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-gold-400"
            >
              <Github className="h-4 w-4" />
              {copy.source}
            </a>
            <a
              href="mailto:aziz.kza99@gmail.com"
              className="flex items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-gold-400"
            >
              <Mail className="h-4 w-4" />
              {copy.email}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} {copy.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
