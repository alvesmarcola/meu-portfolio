import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100%;
  padding: 120px 48px 100px;
  background: #ffffff;
  color: #111215;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 80px 20px 70px;
  }
`;

export const ContactInner = styled.div`
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
  font-size: clamp(38px, 6.5vw, 86px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.98;
  color: #111215;
  text-transform: uppercase;

  span.light {
    font-weight: 300;
    color: #52525b;
  }
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  max-width: 620px;
  font-size: clamp(15px, 1.6vw, 18px);
  line-height: 1.6;
  color: #52525b;
`;

export const MainCtaWrapper = styled.div`
  margin: 48px 0 70px;

  @media (max-width: 768px) {
    margin: 36px 0 50px;
  }
`;

export const PrimaryCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 40px;
  border-radius: 999px;
  background: #111215;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #27272a;
    transform: translateY(-2px);
    box-shadow: 0 18px 36px -8px rgba(0, 0, 0, 0.35);

    svg {
      transform: translate(2px, -2px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 16px 24px;
    font-size: 14px;
  }
`;

export const ContactChannelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding-top: 48px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ChannelCard = styled.a`
  padding: 24px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.25s ease;

  span.label {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #71717a;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  span.val {
    font-size: 14px;
    font-weight: 600;
    color: #111215;
    word-break: break-all;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    svg {
      color: #a1a1aa;
      transition: transform 0.2s ease, color 0.2s ease;
      flex-shrink: 0;
    }
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    background: #ffffff;

    span.val svg {
      color: #111215;
      transform: translate(2px, -2px);
    }
  }
`;

export const LocationCard = styled.div`
  padding: 24px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  span.label {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #71717a;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  span.val {
    font-size: 14px;
    font-weight: 600;
    color: #111215;
  }
`;
