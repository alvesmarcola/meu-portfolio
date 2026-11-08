import { useLanguage } from "../../i18n/useLanguage";
import {
  NavContainer,
  NavInner,
  Brand,
  NavLinks,
  NavLink,
  NavActions,
  LangToggle,
  MobileContactBtn,
} from "./style";

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const n = t.nav;

  return (
    <NavContainer>
      <NavInner>
        <Brand href="#inicio" aria-label="Marco Alves Home">
          <strong>{n.logo}</strong>
          <span>{n.role}</span>
        </Brand>

        <NavLinks>
          <NavLink href="#projetos">
            <span className="mono">[ 01 ]</span>
            {n.projects}
          </NavLink>
          <NavLink href="#sobre">
            <span className="mono">[ 02 ]</span>
            {n.about}
          </NavLink>
          <NavLink href="#habilidades">
            <span className="mono">[ 03 ]</span>
            {n.skills}
          </NavLink>
          <NavLink href="#curriculo">
            <span className="mono">[ 04 ]</span>
            {n.resume}
          </NavLink>
          <NavLink href="#contato">
            <span className="mono">[ 05 ]</span>
            {n.contact}
          </NavLink>
        </NavLinks>

        <NavActions>
          <LangToggle
            type="button"
            onClick={toggleLang}
            aria-label={n.switchLabel}
          >
            <span className={lang === "pt" ? "active" : "inactive"}>PT</span>
            <span style={{ color: "#d4d4d8" }}>/</span>
            <span className={lang === "en" ? "active" : "inactive"}>EN</span>
          </LangToggle>

          <MobileContactBtn href="#contato">
            {n.contact}
          </MobileContactBtn>
        </NavActions>
      </NavInner>
    </NavContainer>
  );
}
