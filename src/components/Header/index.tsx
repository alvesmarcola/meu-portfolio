import {
  HeaderContainer,
  TopContent,
  LeftContent,
  RightContent,
  Role,
  BigTitle,
} from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <TopContent>
        <LeftContent>
          <span>25 SEP, 2026</span>
          <strong>Desenvolvimento criativo</strong>
          <span>PORTFOLIO — 01</span>
        </LeftContent>

        <RightContent>
          <span>MARCO ALVES</span>
          <span>DESENVOLVEDOR FRONT-END</span>
          <span>GESTOR DE TRÁFEGO</span>
        </RightContent>
      </TopContent>

      <Role>
        <span>Desenvolvedor</span>
        <span>/</span>
        <span>Desenvolvimento 3D</span>
        <span>/</span>
        <span>Criativos</span>
      </Role>

      <BigTitle>Portfolio</BigTitle>
    </HeaderContainer>
  );
}