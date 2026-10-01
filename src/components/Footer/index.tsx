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

import { useLanguage } from "../../i18n/useLanguage";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <FooterContainer>
      <MainTitle>{f.thanks}</MainTitle>

      <SubTitle></SubTitle>

      <Graphic>
        <Arrow>
          <a
            href="https://wa.me/54997053527"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            ↗
          </a>
        </Arrow>
      </Graphic>

      <ContactTitle>{f.contactTitle}</ContactTitle>

      <BottomContent>
        <ContactInfo>
          <ContactItem>
            <span>{f.email}</span>
            <a href="mailto:alvesbmarco@email.com">
              alvesbmarco@email.com
            </a>
          </ContactItem>

          <ContactItem>
            <span>{f.instagram}</span>
            <a
              href="https://www.instagram.com/marco_alvesb"
              target="_blank"
              rel="noopener noreferrer"
            >
              @marco_alvesb
            </a>
          </ContactItem>

          <ContactItem>
            <span>{f.linkedin}</span>
            <a
              href="https://www.linkedin.com/in/omarcolvess"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marco Alves
            </a>
          </ContactItem>
        </ContactInfo>

        <span>{f.copyright}</span>
      </BottomContent>
    </FooterContainer>
  );
}

