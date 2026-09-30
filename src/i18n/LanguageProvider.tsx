import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations, type Lang } from "./translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Idioma inicial: português
  const [lang, setLang] = useState<Lang>("pt");

  const toggleLang = useCallback(() => {
    setLang((current) => (current === "pt" ? "en" : "pt"));
  }, []);

  const t = translations[lang];

  // Mantém <html lang> e o título da aba em sincronia com o idioma
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
  }, [t]);

  const value = useMemo(() => ({ lang, t, toggleLang }), [lang, t, toggleLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
