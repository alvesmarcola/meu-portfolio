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
  ProjectImage,
} from "./style";

export function Project2() {
  return (
    <ProjectContainer>
      <ProjectLabel>(02) PROJETO</ProjectLabel>

      <ProjectHeader>
        <ProjectInfo>
          <ProjectType>PROJETO</ProjectType>

          <ProjectName>
            Creative 3D
          </ProjectName>
        </ProjectInfo>

        <ProjectInfo>
          <ProjectType>TIPO</ProjectType>

          <ProjectName>3D / WEB</ProjectName>
        </ProjectInfo>
      </ProjectHeader>

      <DetailsGrid>
        <DetailBlock>
          <DetailTitle>SOBRE</DetailTitle>

          <DetailText>
            Experimento visual desenvolvido em 3D, explorando composição,
            interação e estética para criar uma experiência digital mais
            imersiva.
          </DetailText>
        </DetailBlock>

        <DetailBlock>
          <DetailTitle>FERRAMENTAS / CONHECIMENTOS</DetailTitle>

          <ScopeList>
            <li>Desenvolvimento 3D</li>
            <li>Design UX/UI</li>
            <li>Front-end</li>
            <li>Criatividade</li>
          </ScopeList>
        </DetailBlock>
      </DetailsGrid>

      <ProjectPreview
        href="https://alvesmarcola.github.io/Donut-animated-3D/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectImage
          src={projeto2}
          alt="Projeto Creative 3D"
        />
      </ProjectPreview>
    </ProjectContainer>
  );
}