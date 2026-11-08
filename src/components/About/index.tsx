import { useLanguage } from "../../i18n/useLanguage";
import {
  AboutSection,
  AboutInner,
  SectionHeader,
  SectionTag,
  SectionTitle,
  AboutGrid,
  NarrativeCol,
  LeadText,
  BodyText,
  PillarsCol,
  PillarCard,
} from "./style";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <AboutSection id="sobre">
      <AboutInner>
        <SectionHeader>
          <SectionTag>{a.sectionTag}</SectionTag>
          <SectionTitle>
            {a.titleLine1} <br />
            <span className="accent">{a.titleLine2}</span>
          </SectionTitle>
        </SectionHeader>

        <AboutGrid>
          <NarrativeCol>
            <LeadText>{a.paragraph1}</LeadText>
            <BodyText>{a.paragraph2}</BodyText>
          </NarrativeCol>

          <PillarsCol>
            {a.cards.map((card) => (
              <PillarCard key={card.number}>
                <span className="number">[{card.number}]</span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </PillarCard>
            ))}
          </PillarsCol>
        </AboutGrid>
      </AboutInner>
    </AboutSection>
  );
}

export default About;
