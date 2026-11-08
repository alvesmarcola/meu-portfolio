import { Download, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import {
  ResumeSection as Section,
  ResumeInner,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  ResumeCard,
  IconContainer,
  ResumeHeading,
  ResumeDesc,
  ButtonRow,
  DownloadBtn,
  ViewOnlineBtn,
  FormatBadge,
} from "./style";

export function Resume() {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <Section id="curriculo">
      <ResumeInner>
        <SectionHeader>
          <SectionTag>{r.sectionTag}</SectionTag>
          <SectionTitle>{r.title}</SectionTitle>
          <SectionSubtitle>{r.subtitle}</SectionSubtitle>
        </SectionHeader>

        <ResumeCard>
          <IconContainer>
            <FileText size={28} />
          </IconContainer>

          <ResumeHeading>Marco Antonio Alves Bruno</ResumeHeading>
          <ResumeDesc>{r.infoText}</ResumeDesc>

          <ButtonRow>
            {/* Botão bem visível para baixar currículo */}
            <DownloadBtn
              href="/curriculo-marco-alves.pdf"
              download="Curriculo-Marco-Antonio-Alves.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.downloadButton}
            >
              <span>{r.downloadButton}</span>
              <Download size={16} />
            </DownloadBtn>

            <ViewOnlineBtn
              href="/curriculo-marco-alves.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.viewButton}
            >
              <span>{r.viewButton}</span>
              <ExternalLink size={15} />
            </ViewOnlineBtn>
          </ButtonRow>

          <FormatBadge>{r.badge}</FormatBadge>
        </ResumeCard>
      </ResumeInner>
    </Section>
  );
}

export default Resume;
