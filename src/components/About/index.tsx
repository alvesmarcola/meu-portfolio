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
        <AboutNumber>02 — SOBRE</AboutNumber>
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
              <span>LANDING PAGES</span>
              <span>CRIATIVOS</span>
              <span>TRÁFEGO PAGO</span>
              <span>SITES 3D</span>
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