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
  PreviewContent,
  PreviewText,
} from "./style";

export function Project2() {
  return (
    <ProjectContainer>
      <ProjectLabel>(02) PROJECT</ProjectLabel>

      <ProjectHeader>
        <ProjectInfo>
          <ProjectType>Product</ProjectType>

          <ProjectName>
            Creative digital
            <br />
            experience
          </ProjectName>
        </ProjectInfo>
      </ProjectHeader>

      <DetailsGrid>
        <DetailBlock>
          <DetailTitle>About</DetailTitle>

          <DetailText>
            A digital project focused on creating a strong visual identity,
            combining creativity, design and technology into one experience.
          </DetailText>
        </DetailBlock>

        <DetailBlock>
          <DetailTitle>Scope of work</DetailTitle>

          <ScopeList>
            <li>Concept development</li>
            <li>Web design</li>
            <li>Creative development</li>
            <li>Art direction</li>
          </ScopeList>
        </DetailBlock>
      </DetailsGrid>

      <ProjectPreview>
        <PreviewContent>
          <PreviewText>PROJECT 02</PreviewText>
        </PreviewContent>
      </ProjectPreview>
    </ProjectContainer>
  );
}