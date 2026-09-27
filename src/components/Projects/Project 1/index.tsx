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
} from "./style";

import projectDuda from "../../../assets/projeto1.png";

export function Projects() {
  return (
    <ProjectsContainer>
      <ProjectLabel>(01) PROJETO</ProjectLabel>

      <ProjectHeader>
        <ProjectInfo>
          <ProjectType>PROJETO</ProjectType>

          <ProjectName>
            Eduarda Alves
            <br />
            Social Media
          </ProjectName>
        </ProjectInfo>

        <ProjectInfo>
          <ProjectType>TIPO</ProjectType>

          <ProjectName>SITE</ProjectName>
        </ProjectInfo>
      </ProjectHeader>

      <DetailsGrid>
        <DetailBlock>
          <DetailTitle>SOBRE</DetailTitle>

          <DetailText>
            Website desenvolvido para apresentar uma profissional de social
            media e seus serviços, combinando identidade visual, comunicação
            estratégica e uma experiência digital moderna.
          </DetailText>
        </DetailBlock>

        <DetailBlock>
          <DetailTitle>FERRAMENTAS / CONHECIMENTOS</DetailTitle>

          <ScopeList>
            <li>UI Design</li>
            <li>Front-end</li>
            <li>Design Responsivo</li>
          </ScopeList>
        </DetailBlock>
      </DetailsGrid>

      <ProjectPreview
  as="a"
  href="https://eduarda-alves-social-media.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={projectDuda}
    alt="Projeto Eduarda Alves Social Media"
  />
</ProjectPreview>
    </ProjectsContainer>
  );
}