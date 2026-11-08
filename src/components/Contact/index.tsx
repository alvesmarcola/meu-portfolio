import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import {
  ContactSection,
  ContactInner,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  MainCtaWrapper,
  PrimaryCtaButton,
  ContactChannelsGrid,
  ChannelCard,
  LocationCard,
} from "./style";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <ContactSection id="contato">
      <ContactInner>
        <SectionHeader>
          <SectionTag>{c.sectionTag}</SectionTag>
          <SectionTitle>
            {c.titleLine1} <br />
            <span className="light">{c.titleLine2}</span>
          </SectionTitle>
          <SectionSubtitle>{c.subtitle}</SectionSubtitle>
        </SectionHeader>

        {/* Botão de contato com destaque visual */}
        <MainCtaWrapper>
          <PrimaryCtaButton
            href={c.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar conversa no WhatsApp"
          >
            <MessageCircle size={18} />
            <span>{c.primaryButton}</span>
            <ArrowUpRight size={18} />
          </PrimaryCtaButton>
        </MainCtaWrapper>

        {/* Canais reais e links preservados */}
        <ContactChannelsGrid>
          <ChannelCard
            href={`mailto:${c.email}`}
            aria-label={`Enviar e-mail para ${c.email}`}
          >
            <span className="label">E-mail</span>
            <span className="val">
              {c.email}
              <ArrowUpRight size={14} />
            </span>
          </ChannelCard>

          <ChannelCard
            href={c.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn de Marco Alves"
          >
            <span className="label">LinkedIn</span>
            <span className="val">
              {c.linkedin}
              <ArrowUpRight size={14} />
            </span>
          </ChannelCard>

          <ChannelCard
            href={c.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub de Marco Alves"
          >
            <span className="label">GitHub</span>
            <span className="val">
              {c.github}
              <ArrowUpRight size={14} />
            </span>
          </ChannelCard>

          <LocationCard>
            <span className="label">Base</span>
            <span className="val">{c.location}</span>
          </LocationCard>
        </ContactChannelsGrid>
      </ContactInner>
    </ContactSection>
  );
}

export default Contact;
