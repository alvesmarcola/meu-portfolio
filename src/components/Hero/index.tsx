import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import {
  HeroSection,
  HeroInner,
  TopMeta,
  HeroMain,
  SubHeading,
  MainTitle,
  HeroDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  BottomMeta,
  MetaBlock,
} from "./style";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <HeroSection id="inicio">
      <HeroInner>
        {/* Top Architectural Metadata Strip */}
        <TopMeta>
          <span>{h.label}</span>
          <span className="location">{h.location}</span>
          <span className="status">{h.status}</span>
        </TopMeta>

        {/* Center Presentation & Standout Typography */}
        <HeroMain>
          <SubHeading>{h.name} — PORTFOLIO</SubHeading>

          <MainTitle>
            {h.titleLine1} <br />
            <span className="light">{h.titleLine2}</span>
          </MainTitle>

          <HeroDescription>{h.description}</HeroDescription>

          <ButtonGroup>
            <PrimaryButton href="#projetos">
              <span>{h.ctaProjects}</span>
              <ArrowDown size={16} />
            </PrimaryButton>

            <SecondaryButton href="#contato">
              <span>{h.ctaContact}</span>
              <ArrowUpRight size={16} />
            </SecondaryButton>
          </ButtonGroup>
        </HeroMain>

        {/* Bottom Metadata Coordinates */}
        <BottomMeta>
          {h.metaItems.map((item, index) => (
            <MetaBlock key={index}>
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </MetaBlock>
          ))}
        </BottomMeta>
      </HeroInner>
    </HeroSection>
  );
}

export default Hero;
