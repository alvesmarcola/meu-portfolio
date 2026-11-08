import styled from "styled-components";

export const ResumeSection = styled.section`
  width: 100%;
  padding: 120px 48px;
  background: #fafafa;
  color: #111215;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const ResumeInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 70px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    margin-bottom: 45px;
  }
`;

export const SectionTag = styled.span`
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #71717a;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(34px, 5.5vw, 68px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: #111215;
  text-transform: uppercase;
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  max-width: 580px;
  font-size: clamp(14.5px, 1.5vw, 17px);
  line-height: 1.6;
  color: #52525b;
`;

export const ResumeCard = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 64px 48px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  box-shadow: 0 20px 48px -16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 0, 0, 0.18);
    box-shadow: 0 28px 56px -16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 44px 24px;
  }
`;

export const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: #f4f4f5;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #111215;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: transform 0.3s ease;

  ${ResumeCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ResumeHeading = styled.h3`
  margin: 0 0 12px;
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #111215;
  letter-spacing: -0.02em;
`;

export const ResumeDesc = styled.p`
  max-width: 540px;
  margin: 0 0 36px;
  font-size: 15px;
  line-height: 1.65;
  color: #52525b;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 36px;
  border-radius: 999px;
  background: #111215;
  color: #ffffff;
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #27272a;
    transform: translateY(-2px);
    box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.35);

    svg {
      transform: translateY(2px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ViewOnlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 28px;
  border-radius: 999px;
  background: #fafafa;
  color: #111215;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: all 0.25s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #ffffff;
    border-color: #111215;
    transform: translateY(-2px);

    svg {
      transform: translate(2px, -2px);
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormatBadge = styled.span`
  margin-top: 24px;
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
