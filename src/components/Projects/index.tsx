import {
  ProjectsContainer,
  ProjectLabel,
  ProjectHeader,
  ProjectInfo,
  ProjectName,
  ProjectType,
  DetailsGrid,
  DetailBlock,
  DetailTitle,
  DetailText,
  ScopeList,
  ProjectPreview,
  PreviewContent,
  PreviewText,
} from "./style";

export function Projects() {
  return (
    <ProjectsContainer>
      <ProjectLabel>(01) PROJECT</ProjectLabel>

      <ProjectHeader>
        <ProjectInfo>
          <ProjectType>Project</ProjectType>

          <ProjectName>
            Advocacia
            <br />
            Endressa Alves
          </ProjectName>
        </ProjectInfo>

        <ProjectInfo>
          <ProjectType>Type</ProjectType>

          <ProjectName>Website</ProjectName>
        </ProjectInfo>
      </ProjectHeader>

      <DetailsGrid>
        <DetailBlock>
          <DetailTitle>ABOUT</DetailTitle>

          <DetailText>
            Website desenvolvido para apresentar uma marca de forma
            profissional, moderna e estratégica, com foco em experiência
            digital e identidade visual.
          </DetailText>
        </DetailBlock>

        <DetailBlock>
          <DetailTitle>SCOPE OF WORK</DetailTitle>

          <ScopeList>
            <li>UI Design</li>
            <li>Web Development</li>
            <li>Responsive Design</li>
            <li>Deployment</li>
          </ScopeList>
        </DetailBlock>
      </DetailsGrid>

      <ProjectPreview>
        <PreviewContent>
          <PreviewText>PROJECT 01</PreviewText>
        </PreviewContent>
      </ProjectPreview>
    </ProjectsContainer>
  );
}