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
        <Arrow>↗</Arrow>
      </Graphic>

      <ContactTitle>* ME CHAME *</ContactTitle>

      <BottomContent>
        <ContactInfo>
          <ContactItem>
            <span>EMAIL</span>
            <a href="mailto:marco@email.com">
              marco@email.com
            </a>
          </ContactItem>

          <ContactItem>
            <span>INSTAGRAM</span>
            <a href="#">
              @marcoalves
            </a>
          </ContactItem>

          <ContactItem>
            <span>LINKEDIN</span>
            <a href="#">
              Marco Alves
            </a>
          </ContactItem>
        </ContactInfo>

        <span>© 2026 MARCO ALVES</span>
      </BottomContent>
    </FooterContainer>
  );
}