import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import DemoForm from '@/components/DemoForm';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obsidian-900 text-neutral-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
