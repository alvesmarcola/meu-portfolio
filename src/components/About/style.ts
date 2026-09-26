import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 100vh;

  padding: 80px 48px;

  background: #181818;
  color: #ffffff;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const AboutHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  font-family: Arial, sans-serif;
`;

export const AboutNumber = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.03em;

  opacity: 0.7;
`;

export const AboutContent = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;

  align-items: center;

  padding-top: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const MainText = styled.h2`
  margin: 0;

  font-family: Arial, sans-serif;
  font-size: clamp(70px, 10vw, 170px);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: -0.07em;

  cursor: default;

  animation: revealText 1s cubic-bezier(0.16, 1, 0.3, 1) both;

  @keyframes revealText {
    from {
      opacity: 0;
      transform: translateY(60px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(60px, 16vw, 120px);
  }
`;

export const Highlight = styled.span`
  display: inline-block;

  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    letter-spacing 0.5s ease;

  &:hover {
    transform: translateX(20px);
    letter-spacing: -0.04em;
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

export const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;

  max-width: 360px;

  font-family: Arial, sans-serif;

  @media (max-width: 900px) {
    max-width: 500px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding-bottom: 25px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  animation: fadeIn 1s ease 0.3s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const InfoTitle = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;

  opacity: 0.6;
`;

export const InfoText = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.6;

  color: rgba(255, 255, 255, 0.8);
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    font-size: 11px;

    padding: 7px 10px;

    border: 1px solid rgba(255, 255, 255, 0.3);

    transition:
      background 0.3s ease,
      color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      background: #ffffff;
      color: #181818;
      transform: translateY(-3px);
    }
  }
`;