import {
  AboutContainer,
  AboutHeader,
  AboutNumber,
  AboutContent,
  MainText,
  Highlight,
  SideInfo,
  InfoBlock,
  InfoTitle,
  InfoText,
  Skills,
} from "./style";

export function About() {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutNumber>02 — ABOUT</AboutNumber>
      </AboutHeader>

      <AboutContent>
        <MainText>
          EU CRIO
          <br />
          <Highlight>EXPERIÊNCIAS</Highlight>
          <br />
          DIGITAIS.
        </MainText>

        <SideInfo>
          <InfoBlock>
            <InfoTitle>MARCO ALVES</InfoTitle>

            <InfoText>
              Desenvolvedor criativo focado em criar experiências digitais
              funcionais, estratégicas e visualmente marcantes.
            </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>FOCO</InfoTitle>

            <Skills>
              <span>WEB DEVELOPMENT</span>
              <span>UI DESIGN</span>
              <span>TRÁFEGO PAGO</span>
              <span>AUTOMAÇÕES</span>
            </Skills>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>BASE</InfoTitle>
            <InfoText>Brasil — 2026</InfoText>
          </InfoBlock>
        </SideInfo>
      </AboutContent>
    </AboutContainer>
  );
}