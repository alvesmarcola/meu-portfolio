import { HeaderContainer, TopContent, LeftContent, RightContent, LangButton, Role, BigTitle } from "./style";
import { useLanguage } from "../../i18n/useLanguage";

export function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const h = t.header;
  return (
    <>
      <HeaderContainer>
        <TopContent>
          <LeftContent><span>{h.date}</span><strong>{h.subtitle}</strong><span>{h.portfolioLabel}</span></LeftContent>
          <RightContent><span>{h.name}</span><span>{h.jobFrontend}</span><span>{h.jobTraffic}</span></RightContent>
        </TopContent>
        <Role><span>{h.roles[0]}</span><span>/</span><span>{h.roles[1]}</span><span>/</span><span>{h.roles[2]}</span></Role>
        <BigTitle>{h.bigTitle}</BigTitle>
      </HeaderContainer>
      <LangButton type="button" onClick={toggleLang} aria-label={h.switchLabel}>{lang === "pt" ? "EN" : "PT"}</LangButton>
    </>
  );
}
