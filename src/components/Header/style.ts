import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 100vh;

  padding: 40px 48px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  background: #ffffff;
  color: #181818;

  @media (max-width: 768px) {
    min-height: 100svh;
    padding: 28px 20px 25px;
  }
`;

export const TopContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-family: Arial, sans-serif;

  animation: fadeDown 0.8s ease both;

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  font-size: 11px;
  line-height: 1.3;

  span:first-child {
    margin-bottom: 8px;
  }

  strong {
    font-size: 13px;
    font-weight: 700;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;

  font-size: 11px;
  line-height: 1.3;

  span {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  &:hover span {
    opacity: 0.3;
  }

  span:hover {
    opacity: 1;
    transform: translateX(-4px);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Role = styled.div`
  display: flex;
  gap: 12px;

  font-family: Arial, sans-serif;
  font-size: 13px;

  animation: roleReveal 0.8s ease 0.25s both;

  span {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  &:hover span {
    opacity: 0.25;
  }

  span:hover {
    opacity: 1;
    transform: translateY(-3px);
  }

  @keyframes roleReveal {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 11px;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

export const BigTitle = styled.h1`
  margin: 0 -20px -5px;

  font-family: Arial, sans-serif;
  font-size: clamp(130px, 22vw, 360px);
  font-weight: 900;
  line-height: 0.72;
  letter-spacing: -0.075em;

  white-space: nowrap;

  cursor: default;

  animation: titleReveal 4.2s cubic-bezier(0.16, 1, 0.3, 1) both;

  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes titleReveal {
    from {
      opacity: 0;
      transform: translateY(100px);
      letter-spacing: -0.02em;
    }

    to {
      opacity: 1;
      transform: translateY(0);
      letter-spacing: -0.075em;
    }
  }

  &:hover {
    transform: scale(1.015);
    letter-spacing: -0.055em;
  }

  @media (max-width: 768px) {
    margin: 0 -5px;

    font-size: clamp(70px, 21vw, 160px);
    line-height: 0.8;

    white-space: normal;
    word-break: break-word;

    &:hover {
      transform: none;
      letter-spacing: -0.075em;
    }
  }
`;

export const LangButton = styled.button`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 10px;
  font-family: Arial, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #181818;
  background: transparent;
  border: 1px solid #181818;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover { background: #181818; color: #ffffff; }
  @media (max-width: 768px) { top: 28px; }
`;
