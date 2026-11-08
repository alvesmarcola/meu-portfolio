import { useLanguage } from "../../i18n/useLanguage";
import {
  FooterSection,
  FooterInner,
  Copyright,
  FooterLinks,
  BackToTopBtn,
} from "./style";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const n = t.nav;

  return (
    <FooterSection>
      <FooterInner>
        <Copyright>
          <strong>{f.name}</strong> — {f.copyright}
        </Copyright>

        <FooterLinks>
          <a href="#projetos">{n.projects}</a>
          <a href="#sobre">{n.about}</a>
          <a href="#habilidades">{n.skills}</a>
          <a href="#curriculo">{n.resume}</a>
          <a href="#contato">{n.contact}</a>
        </FooterLinks>

        <BackToTopBtn href="#inicio" aria-label="Voltar ao topo da página">
          {f.backToTop}
        </BackToTopBtn>
      </FooterInner>
    </FooterSection>
  );
}

export default Footer;
