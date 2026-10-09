import {
  ProjectContainer,
  ProjectLabel,
  ProjectHeader,
  ProjectInfo,
  ProjectType,
  ProjectName,
  DetailsGrid,
  DetailBlock,
  DetailTitle,
  DetailText,
  ScopeList,
  ProjectPreview,
  DesktopComposition,
  BrowserWindow,
  BrowserBar,
  BrowserControls,
  BrowserAddress,
  BrowserScreen,
  BrowserImage,
  FloatingPhone,
  FloatingScreen,
  MobileComposition,
  MobileDesktop,
  MobilePhone,
  MobileParallax,
} from "../projectStyles";

import projeto1 from "../../../assets/projeto1.png";
import { useLanguage } from "../../../i18n/useLanguage";
import { useProjectMotion } from "../useProjectMotion";

export function Project1() {
  const { t } = useLanguage();
  const p = t.projects;
  const project = p.project1;
  const { rootRef, isVisible } = useProjectMotion();

  return (
    <ProjectContainer
      ref={rootRef}
      data-project="mbruno"
      data-revealed={isVisible}
    >
      <ProjectLabel>{project.number}</ProjectLabel>

      <ProjectHeader>
        <ProjectInfo>
          <ProjectType>{p.label}</ProjectType>

          <ProjectName>{project.name}</ProjectName>
        </ProjectInfo>

        <ProjectInfo>
          <ProjectType>{p.typeLabel}</ProjectType>

          <ProjectName>{project.type}</ProjectName>
        </ProjectInfo>
      </ProjectHeader>

      <DetailsGrid>
        <DetailBlock>
          <DetailTitle>{p.aboutTitle}</DetailTitle>

          <DetailText>{project.description}</DetailText>
        </DetailBlock>

        <DetailBlock>
          <DetailTitle>{p.toolsTitle}</DetailTitle>

          <ScopeList>
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ScopeList>
        </DetailBlock>
      </DetailsGrid>

      <ProjectPreview
        data-project-scene
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.alt}
        tabIndex={isVisible ? undefined : -1}
      >
        <DesktopComposition aria-hidden="true">
          <BrowserWindow>
            <BrowserBar>
              <BrowserControls><span /></BrowserControls>
              <BrowserAddress />
            </BrowserBar>
            <BrowserScreen>
              <BrowserImage
                src={projeto1}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </BrowserScreen>
          </BrowserWindow>
          <FloatingPhone>
            <FloatingScreen>
              <img src={projeto1} alt="" loading="lazy" decoding="async" />
            </FloatingScreen>
          </FloatingPhone>
        </DesktopComposition>
        <MobileComposition aria-hidden="true">
          <MobileDesktop>
            <img src={projeto1} alt="" loading="lazy" decoding="async" />
          </MobileDesktop>
          <MobilePhone>
            <img src={projeto1} alt="" loading="lazy" decoding="async" />
          </MobilePhone>
          <MobileParallax />
        </MobileComposition>
      </ProjectPreview>
    </ProjectContainer>
  );
}