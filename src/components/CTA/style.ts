import styled from "styled-components";

export const CTAContainer = styled.section`
  min-height: 70vh;

  padding: 80px 48px;

  background: #e9e6df;
  color: #181818;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    min-height: 65vh;
    padding: 60px 20px;
  }
`;

export const CTATop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-size: 11px;

  opacity: 0.6;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const CTATitle = styled.h2`
  max-width: 1100px;

  margin: 0;

  font-size: clamp(65px, 10vw, 170px);

  font-weight: 900;

  line-height: 0.82;

  letter-spacing: -0.075em;

  text-transform: uppercase;

  animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;

  @keyframes reveal {
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
    font-size: clamp(50px, 15vw, 95px);
  }

  @media (max-width: 450px) {
    font-size: clamp(44px, 14vw, 70px);
  }
`;

export const CTAContent = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-end;

  gap: 40px;

  @media (max-width: 700px) {
    flex-direction: column;

    align-items: flex-start;
  }
`;

export const CTAText = styled.p`
  max-width: 420px;

  margin: 0;

  font-size: 16px;

  line-height: 1.5;

  opacity: 0.7;
`;

export const CTAButton = styled.a`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 25px;

  padding: 18px 25px;

  background: #181818;

  color: #ffffff;

  text-decoration: none;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 0.03em;

  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s ease;

  span {
    font-size: 18px;

    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:hover span {
    transform: translate(4px, -4px);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;