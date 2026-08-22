import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  Platform: [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'Request a Demo', href: '#contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Compliance', href: '#security' },
    { label: 'Support', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-obsidian-950 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold-400/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center glow-gold">
                <Sparkles className="w-5 h-5 text-obsidian-900" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white tracking-tight">Kayan AI</span>
                <span className="text-[10px] text-gold-400/70 tracking-[0.2em] uppercase font-medium">
                  Business Concierge
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
              The elite AI Business Concierge for corporate enterprises and government
              entities in Saudi Arabia. Autonomous, sovereign, always on.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Mail className="w-4 h-4 text-gold-400/60" />
                <span>contact@kayan.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Phone className="w-4 h-4 text-gold-400/60" />
                <span dir="ltr">+966 11 000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-gold-400/60" />
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white tracking-wide">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Kayan AI. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-neutral-500 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-neutral-500 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
