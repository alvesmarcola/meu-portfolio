import {
  CTAContainer,
  CTATop,
  CTATitle,
  CTAContent,
  CTAText,
  CTAButton,
} from "./style";

export function CTA() {
  return (
    <CTAContainer>
      <CTATop>
        <span>05 — COMEÇAR UMA PARCERIA</span>

        <span>VAMOS TRABALHAR</span>
      </CTATop>

      <CTATitle>
        Tem um
        <br />
        projeto
        <br />
        em mente?
      </CTATitle>

      <CTAContent>
        <CTAText>
          Landing pages, experiências digitais e interfaces pensadas para
          transformar ideias em projetos visualmente marcantes.
        </CTAText>

        <CTAButton href="wa.me/54997053527" target="_blank" rel="noopener noreferrer">
          INICIAR UM PROJETO
          <span>↗</span>
        </CTAButton>
      </CTAContent>
    </CTAContainer>
  );
}