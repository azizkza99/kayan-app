import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import DemoForm from '@/components/DemoForm';
import Footer from '@/components/Footer';
import TawkChat from '@/components/TawkChat'; // 👈 استيراد شات Tawk.to المجاني
import LanguageProvider from '@/LanguageProvider';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-obsidian-900 text-neutral-200 antialiased selection:bg-gold-400/30 selection:text-gold-200 relative">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Security />
          <DemoForm />
        </main>
        <Footer />

        {/* 🌟 نظام الدردشة الفورية Tawk.to المرتبط بحسابك */}
        <TawkChat />
      </div>
    </LanguageProvider>
  );
}
