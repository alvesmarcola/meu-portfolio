import {
  ServicesContainer,
  Top,
  Number,
  Title,
  ServicesList,
  Service,
  ServiceNumber,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  Arrow,
} from "./style";

export function Services() {
  return (
    <ServicesContainer>
      <Top>
        <Number>03 — SERVIÇOS</Number>

        <Title>
          O QUE EU
          <br />
          POSSO CRIAR.
        </Title>
      </Top>

      <ServicesList>
        <Service>
          <ServiceNumber>01</ServiceNumber>

          <ServiceContent>
            <ServiceTitle>LANDING PAGES</ServiceTitle>

            <ServiceDescription>
              Páginas desenvolvidas para apresentar marcas,
              produtos e serviços com clareza, personalidade
              e foco na experiência.
            </ServiceDescription>
          </ServiceContent>

          <Arrow>↗</Arrow>
        </Service>

        <Service>
          <ServiceNumber>02</ServiceNumber>

          <ServiceContent>
            <ServiceTitle>GESTÃO DE TRÁFEGO</ServiceTitle>

            <ServiceDescription>
              Design, tipografia, animações e interações
              pensados para transformar uma página comum
              em uma experiência visual.
            </ServiceDescription>
          </ServiceContent>

          <Arrow>↗</Arrow>
        </Service>

        <Service>
          <ServiceNumber>03</ServiceNumber>

          <ServiceContent>
            <ServiceTitle>SITES 3D</ServiceTitle>

            <ServiceDescription>
              Desenvolvimento de experiências digitais
              com o produto apresentado em 3D.
            </ServiceDescription>
          </ServiceContent>

          <Arrow>↗</Arrow>
        </Service>
      </ServicesList>
    </ServicesContainer>
  );
}