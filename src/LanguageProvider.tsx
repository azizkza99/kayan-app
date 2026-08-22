import { useEffect, useState, type ReactNode } from 'react';
import type { Language } from './i18n';
import { LanguageContext, type LanguageContextValue } from './language-context';

const STORAGE_KEY = 'kayan_language_preference';

export default function LanguageProvider({ children }: { children: ReactNode }) {
  // تعيين العربية كافتراضي أولي، مع استرجاع الاختيار المحفوظ مسبقاً إن وُجد
  const [lang, setLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language;
      if (savedLang === 'ar' || savedLang === 'en') {
        return savedLang;
      }
    } catch (error) {
      console.warn('Could not access localStorage for language preference:', error);
    }
    return 'ar'; // الأولوية المطلقة للغة العربية عند الزيارة الأولى
  });

  useEffect(() => {
    // تحديث اتجاه وثيقة HTML واللغة فور تغيرها وحفظها في المتصفح
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      console.warn('Could not save language preference to localStorage:', error);
    }
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang: () => setLang((current) => (current === 'ar' ? 'en' : 'ar')),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
