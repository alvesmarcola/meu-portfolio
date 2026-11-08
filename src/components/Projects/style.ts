import styled from "styled-components";

export const ProjectsSection = styled.section`
  width: 100%;
  padding: 120px 48px;
  background: #ffffff;
  color: #111215;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const ProjectsInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 80px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    margin-bottom: 50px;
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

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 768px) {
    gap: 70px;
  }
`;

export const ProjectCard = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 60px;
  align-items: center;
  padding: 48px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(0, 0, 0, 0.22);
    box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 36px 24px;
  }

  @media (max-width: 640px) {
    padding: 24px 16px;
    border-radius: 16px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  span.number {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #111215;
    letter-spacing: -0.02em;
  }

  span.category {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #71717a;
    background: rgba(0, 0, 0, 0.05);
    padding: 4px 10px;
    border-radius: 999px;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 16px;
  font-size: clamp(26px, 3.2vw, 40px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #111215;
`;

export const ProjectDescription = styled.p`
  margin: 0 0 28px;
  font-size: 15px;
  line-height: 1.65;
  color: #3f3f46;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
`;

export const TechTag = styled.span`
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  color: #27272a;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px 12px;
  border-radius: 6px;
  letter-spacing: 0.02em;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 26px;
  border-radius: 999px;
  background: #111215;
  color: #ffffff;
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  width: fit-content;
  transition: all 0.25s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #27272a;
    transform: translateY(-2px);

    svg {
      transform: translate(2px, -2px);
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const VisualShowcase = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #f0f0f2;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.08);

  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }

  img.main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover img.main-img {
    transform: scale(1.03);
  }

  @media (max-width: 640px) {
    aspect-ratio: 4 / 3;
  }
`;

export const DeviceBadge = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 80px;
  height: 110px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${VisualShowcase}:hover & {
    transform: scale(1.08) translateY(-4px);
  }

  @media (max-width: 640px) {
    width: 65px;
    height: 90px;
    bottom: 12px;
    right: 12px;
  }
`;
