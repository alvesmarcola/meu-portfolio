import styled from "styled-components";

export const SkillsSection = styled.section`
  width: 100%;
  padding: 120px 48px;
  background: #ffffff;
  color: #111215;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const SkillsInner = styled.div`
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const PillarCard = styled.div`
  padding: 36px 28px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 640px) {
    padding: 28px 20px;
  }
`;

export const PillarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  span.number {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #a1a1aa;
    letter-spacing: 0.04em;
  }
`;

export const PillarTitle = styled.h3`
  margin: 0 0 24px;
  font-size: 18px;
  font-weight: 700;
  color: #111215;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

export const TagCloud = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkillItem = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 12.5px;
  font-weight: 500;
  color: #27272a;
  transition: all 0.2s ease;

  &::before {
    content: "•";
    color: #a1a1aa;
    margin-right: 8px;
    font-size: 14px;
  }

  ${PillarCard}:hover & {
    border-color: rgba(0, 0, 0, 0.12);
  }
`;
