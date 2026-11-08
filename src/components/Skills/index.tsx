import { useLanguage } from "../../i18n/useLanguage";
import {
  SkillsSection,
  SkillsInner,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  SkillsGrid,
  PillarCard,
  PillarTop,
  PillarTitle,
  TagCloud,
  SkillItem,
} from "./style";

export function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <SkillsSection id="habilidades">
      <SkillsInner>
        <SectionHeader>
          <SectionTag>{s.sectionTag}</SectionTag>
          <SectionTitle>{s.title}</SectionTitle>
          <SectionSubtitle>{s.subtitle}</SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {s.pillars.map((pillar) => (
            <PillarCard key={pillar.number}>
              <div>
                <PillarTop>
                  <span className="number">[{pillar.number}]</span>
                </PillarTop>

                <PillarTitle>{pillar.category}</PillarTitle>

                <TagCloud>
                  {pillar.skills.map((skill) => (
                    <SkillItem key={skill}>{skill}</SkillItem>
                  ))}
                </TagCloud>
              </div>
            </PillarCard>
          ))}
        </SkillsGrid>
      </SkillsInner>
    </SkillsSection>
  );
}

export default Skills;
