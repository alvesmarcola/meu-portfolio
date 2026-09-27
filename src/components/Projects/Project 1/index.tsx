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
          <ProjectType>Projeto</ProjectType>

          <ProjectName>
            Advocacia
            <br />
            Endressa Alves
          </ProjectName>
        </ProjectInfo>

        <ProjectInfo>
          <ProjectType>Tipo</ProjectType>

          <ProjectName>Website</ProjectName>
        </ProjectInfo>
      </ProjectHeader>

      <DetailsGrid>
        <DetailBlock>
          <DetailTitle>SOBRE</DetailTitle>

          <DetailText>
            Website desenvolvido para apresentar uma marca de forma
            profissional, moderna e estratégica, com foco em experiência
            digital e identidade visual.
          </DetailText>
        </DetailBlock>

        <DetailBlock>
          <DetailTitle>Ferramentas - conhecimentos</DetailTitle>

          <ScopeList>
            <li>UI Design</li>
            <li>Front-end </li>
            <li>Design Responsivo</li>
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