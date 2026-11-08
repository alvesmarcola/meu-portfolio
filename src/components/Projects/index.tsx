import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import importsAlvesWeb from "../../assets/resenha-sports.png";
import importsAlvesPhone from "../../assets/alves-store-showcase.png";
import mbrunoWeb from "../../assets/projeto1.png";
import mbrunoPhone from "../../assets/mbruno-showcase.png";

import {
  ProjectsSection,
  ProjectsInner,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  ProjectsList,
  ProjectCard,
  ProjectInfo,
  ProjectTopRow,
  ProjectTitle,
  ProjectDescription,
  TechList,
  TechTag,
  ProjectLink,
  VisualShowcase,
  DeviceBadge,
} from "./style";

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <ProjectsSection id="projetos">
      <ProjectsInner>
        <SectionHeader>
          <SectionTag>{p.sectionTag}</SectionTag>
          <SectionTitle>{p.title}</SectionTitle>
          <SectionSubtitle>{p.subtitle}</SectionSubtitle>
        </SectionHeader>

        <ProjectsList>
          {/* Projeto 01 — Imports Alves */}
          <ProjectCard>
            <ProjectInfo>
              <ProjectTopRow>
                <span className="number">{p.project1.number}</span>
                <span className="category">{p.project1.category}</span>
              </ProjectTopRow>

              <ProjectTitle>{p.project1.name}</ProjectTitle>
              <ProjectDescription>{p.project1.description}</ProjectDescription>

              <TechList>
                {p.project1.tools.map((tool) => (
                  <TechTag key={tool}>{tool}</TechTag>
                ))}
              </TechList>

              <ProjectLink
                href={p.project1.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.viewProject} — ${p.project1.name}`}
              >
                <span>{p.viewProject}</span>
                <ArrowUpRight size={16} />
              </ProjectLink>
            </ProjectInfo>

            <VisualShowcase>
              <a
                href={p.project1.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.project1.alt}
              >
                <img
                  src={importsAlvesWeb}
                  alt={p.project1.alt}
                  className="main-img"
                  loading="lazy"
                />
                <DeviceBadge>
                  <img
                    src={importsAlvesPhone}
                    alt="Imports Alves Mobile Version"
                    loading="lazy"
                  />
                </DeviceBadge>
              </a>
            </VisualShowcase>
          </ProjectCard>

          {/* Projeto 02 — Mbrulhos Seguros */}
          <ProjectCard>
            <ProjectInfo>
              <ProjectTopRow>
                <span className="number">{p.project2.number}</span>
                <span className="category">{p.project2.category}</span>
              </ProjectTopRow>

              <ProjectTitle>{p.project2.name}</ProjectTitle>
              <ProjectDescription>{p.project2.description}</ProjectDescription>

              <TechList>
                {p.project2.tools.map((tool) => (
                  <TechTag key={tool}>{tool}</TechTag>
                ))}
              </TechList>

              <ProjectLink
                href={p.project2.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.viewProject} — ${p.project2.name}`}
              >
                <span>{p.viewProject}</span>
                <ArrowUpRight size={16} />
              </ProjectLink>
            </ProjectInfo>

            <VisualShowcase>
              <a
                href={p.project2.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.project2.alt}
              >
                <img
                  src={mbrunoWeb}
                  alt={p.project2.alt}
                  className="main-img"
                  loading="lazy"
                />
                <DeviceBadge>
                  <img
                    src={mbrunoPhone}
                    alt="Mbrulhos Seguros Mobile Version"
                    loading="lazy"
                  />
                </DeviceBadge>
              </a>
            </VisualShowcase>
          </ProjectCard>
        </ProjectsList>
      </ProjectsInner>
    </ProjectsSection>
  );
}

export default Projects;
