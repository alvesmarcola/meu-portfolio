import { createContext } from "react";
import type { Dict, Lang } from "./translations";

export type LanguageContextValue = {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
