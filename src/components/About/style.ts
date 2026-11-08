import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  padding: 120px 48px;
  background: #fafafa;
  color: #111215;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const AboutInner = styled.div`
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

  span.accent {
    font-weight: 300;
    color: #52525b;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const NarrativeCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LeadText = styled.p`
  margin: 0;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 500;
  line-height: 1.5;
  color: #18181b;
  letter-spacing: -0.01em;
`;

export const BodyText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #52525b;
`;

export const PillarsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PillarCard = styled.div`
  padding: 28px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.06);
  }

  span.number {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #a1a1aa;
    letter-spacing: 0.05em;
  }

  h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #111215;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.6;
    color: #52525b;
  }

  @media (max-width: 640px) {
    padding: 22px 18px;
  }
`;
