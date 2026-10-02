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
  ProjectImage,
} from "./style";

import projeto1 from "../../../assets/projeto1.png";
import { useLanguage } from "../../../i18n/useLanguage";

export function Project1() {
  const { t } = useLanguage();

  const p = t.projects;
  const project = p.project1;

  return (
    <ProjectContainer>
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
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectImage
          src={projeto1}
          alt={project.alt}
        />
      </ProjectPreview>
    </ProjectContainer>
  );
}