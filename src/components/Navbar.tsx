import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n';

const NAV_LINKS = [
  { en: 'Capabilities', ar: 'الإمكانات', href: '#capabilities' },
  { en: 'How it Works', ar: 'آلية العمل', href: '#how-it-works' },
  { en: 'Security', ar: 'الأمان', href: '#security' },
  { en: 'Contact', ar: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLanguage();
  const demoLabel = lang === 'ar' ? 'اطلب عرضاً تجريبياً' : 'Request a Demo';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-2xl shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center glow-gold group-hover:glow-gold-strong transition-all duration-300">
                <Sparkles className="w-5 h-5 text-obsidian-900" />
              </div>
              <div className="absolute inset-0 rounded-xl border border-gold-400/30 group-hover:border-gold-400/60 transition-colors duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-white tracking-tight">Kayan AI</span>
              <span className="text-[10px] text-gold-400/70 tracking-[0.2em] uppercase font-medium">
                Business Concierge
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link[lang]}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 text-sm font-semibold overflow-hidden transition-all duration-300 hover:glow-gold-strong hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {demoLabel}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 mb-4 p-6 flex flex-col gap-4 animate-fade-in-down">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {link[lang]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 text-sm font-semibold text-center"
            >
              {demoLabel}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
