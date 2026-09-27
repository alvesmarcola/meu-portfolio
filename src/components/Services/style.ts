import styled from "styled-components";

export const ServicesContainer = styled.section`
  min-height: 100vh;

  padding: 120px 48px 100px;

  background: #e9e6df;
  color: #181818;

  font-family: Arial, sans-serif;

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 20px 70px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 40px;

  margin-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 70px;
  }
`;

export const Number = styled.span`
  font-size: 12px;

  opacity: 0.55;

  white-space: nowrap;
`;

export const Title = styled.h2`
  margin: 0;

  max-width: 900px;

  font-size: clamp(70px, 11vw, 180px);

  font-weight: 900;

  line-height: 0.8;

  letter-spacing: -0.075em;

  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: clamp(55px, 17vw, 110px);
  }
`;

export const ServicesList = styled.div`
  width: 100%;

  border-top: 1px solid rgba(24, 24, 24, 0.3);
`;

export const Service = styled.div`
  display: grid;

  grid-template-columns: 80px 1fr 60px;

  align-items: center;

  gap: 30px;

  padding: 35px 0;

  border-bottom: 1px solid rgba(24, 24, 24, 0.3);

  transition:
    padding 0.4s ease,
    background 0.4s ease;

  &:hover {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 50px 1fr 40px;

    gap: 15px;

    padding: 28px 0;

    &:hover {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export const ServiceNumber = styled.span`
  font-size: 12px;

  opacity: 0.5;
`;

export const ServiceContent = styled.div`
  display: flex;

  align-items: baseline;

  justify-content: space-between;

  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 12px;
  }
`;

export const ServiceTitle = styled.h3`
  margin: 0;

  font-size: clamp(25px, 4vw, 60px);

  font-weight: 500;

  line-height: 0.9;

  letter-spacing: -0.055em;

  transition: transform 0.4s ease;

  ${Service}:hover & {
    transform: translateX(8px);
  }
`;

export const ServiceDescription = styled.p`
  margin: 0;

  max-width: 400px;

  font-size: 14px;

  line-height: 1.5;

  opacity: 0.65;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Arrow = styled.span`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 42px;

  height: 42px;

  border: 1px solid rgba(24, 24, 24, 0.35);

  border-radius: 50%;

  font-size: 20px;

  transition:
    transform 0.4s ease,
    background 0.4s ease,
    color 0.4s ease;

  ${Service}:hover & {
    transform: rotate(45deg);

    background: #181818;

    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;

    font-size: 16px;
  }
`;