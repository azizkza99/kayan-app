import { createContext } from 'react';
import type { Language } from './i18n';

export type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
