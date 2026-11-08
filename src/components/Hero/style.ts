import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.header`
  width: 100%;
  min-height: 100vh;
  padding: 130px 48px 50px;
  background: #fafafa;
  color: #111215;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100svh;
    padding: 105px 20px 40px;
  }
`;

export const HeroInner = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const TopMeta = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #71717a;
  text-transform: uppercase;
  animation: ${fadeIn} 0.8s ease both;

  span.status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #111215;
    font-weight: 600;

    &::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
    }
  }

  @media (max-width: 640px) {
    span.location {
      display: none;
    }
  }
`;

export const HeroMain = styled.div`
  width: 100%;
  padding: 48px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 1s ease 0.15s both;

  @media (max-width: 768px) {
    padding: 36px 0 44px;
  }
`;

export const SubHeading = styled.span`
  display: block;
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: clamp(12px, 1.4vw, 14px);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #71717a;
  margin-bottom: 18px;
`;

export const MainTitle = styled.h1`
  margin: 0 0 28px;
  font-size: clamp(44px, 7.8vw, 112px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #111215;
  text-transform: uppercase;

  span.light {
    font-weight: 300;
    color: #52525b;
  }

  @media (max-width: 768px) {
    line-height: 1;
    margin-bottom: 24px;
  }
`;

export const HeroDescription = styled.p`
  max-width: 660px;
  font-size: clamp(15px, 1.6vw, 19px);
  line-height: 1.6;
  color: #3f3f46;
  font-weight: 400;
  margin: 0 0 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 999px;
  background: #111215;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-decoration: none;
  border: 1px solid #111215;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #27272a;
    border-color: #27272a;
    transform: translateY(-2px);
    box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.35);

    svg {
      transform: translateY(2px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 28px;
  border-radius: 999px;
  background: transparent;
  color: #111215;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #ffffff;
    border-color: #111215;
    color: #111215;
    transform: translateY(-2px);

    svg {
      transform: translate(2px, -2px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BottomMeta = styled.div`
  width: 100%;
  padding-top: 28px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  animation: ${fadeIn} 1.2s ease 0.3s both;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span.label {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 10px;
    font-weight: 600;
    color: #a1a1aa;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  span.value {
    font-size: 13px;
    font-weight: 600;
    color: #27272a;
    letter-spacing: -0.01em;
  }
`;
