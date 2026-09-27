import {
  FooterContainer,
  MainTitle,
  SubTitle,
  Graphic,
  ContactTitle,
  BottomContent,
  ContactInfo,
  ContactItem,
  Arrow,
} from "./style";

export function Footer() {
  return (
    <FooterContainer>
      <MainTitle>Obrigado.</MainTitle>

      <SubTitle></SubTitle>

      <Graphic>
  <Arrow>
    <a
      href="https://wa.me/54997053527"
      target="_blank"
      rel="noopener noreferrer"
    >
      ↗ 
    </a>
  </Arrow>
</Graphic>

      <ContactTitle>* ME CHAME *</ContactTitle>

      <BottomContent>
        <ContactInfo>
          <ContactItem>
            <span>EMAIL</span>
            <a href="mailto:marco@email.com">
              alvesbmarco@email.com
            </a>
          </ContactItem>

          <ContactItem>
            <span>INSTAGRAM</span>
            <a href="#">
              @marco_alvesb
            </a>
          </ContactItem>

          <ContactItem>
            <span>LINKEDIN</span>
            <a href="www.linkedin.com/in/omarcolvess">
              Marco Alves
            </a>
          </ContactItem>
        </ContactInfo>

        <span>© 2026 MARCO ALVES</span>
      </BottomContent>
    </FooterContainer>
  );
}