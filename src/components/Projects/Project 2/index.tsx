import projeto2 from "../../../assets/projeto2.png";
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
  FloatingDetail,
  MobileComposition,
  MobileDesktop,
  MobilePhone,
  MobileParallax,
} from "../projectStyles";
import { useLanguage } from "../../../i18n/useLanguage";
import { useProjectMotion } from "../useProjectMotion";

export function Project2() {
  const { t } = useLanguage();
  const p = t.projects;
  const project = p.project2;
  const { rootRef, isVisible } = useProjectMotion();

  return (
    <ProjectContainer
      ref={rootRef}
      data-project="donut"
      data-revealed={isVisible}
    >
      <ProjectLabel>{project.number}</ProjectLabel>

      <ProjectHeader>
        <ProjectInfo>
          <ProjectType>{p.label}</ProjectType>
          <ProjectName>Creative 3D</ProjectName>
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
        href="https://alvesmarcola.github.io/Donut-animated-3D/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.imageAlt}
        tabIndex={isVisible ? undefined : -1}
      >
        <DesktopComposition aria-hidden="true">
          <FloatingDetail>
            <img src={projeto2} alt="" loading="lazy" decoding="async" />
          </FloatingDetail>
          <BrowserWindow>
            <BrowserBar>
              <BrowserControls><span /></BrowserControls>
              <BrowserAddress />
            </BrowserBar>
            <BrowserScreen>
              <BrowserImage
                src={projeto2}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </BrowserScreen>
          </BrowserWindow>
          <FloatingPhone>
            <FloatingScreen>
              <img src={projeto2} alt="" loading="lazy" decoding="async" />
            </FloatingScreen>
          </FloatingPhone>
        </DesktopComposition>
        <MobileComposition aria-hidden="true">
          <MobileDesktop>
            <img src={projeto2} alt="" loading="lazy" decoding="async" />
          </MobileDesktop>
          <MobilePhone>
            <img src={projeto2} alt="" loading="lazy" decoding="async" />
          </MobilePhone>
          <MobileParallax />
        </MobileComposition>
      </ProjectPreview>
    </ProjectContainer>
  );
}
