import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 100vh;

  padding: 45px 55px 30px;

  background: #181818;
  color: #ffffff;

  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;

  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    min-height: 100svh;
    padding: 30px 20px 25px;
  }
`;

export const MainTitle = styled.h2`
  margin: 0;

  font-size: clamp(60px, 10.5vw, 190px);
  font-weight: 400;
  line-height: 0.85;
  letter-spacing: -0.075em;

  white-space: nowrap;

  animation: titleReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;

  @keyframes titleReveal {
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
    white-space: normal;
    font-size: clamp(55px, 15vw, 110px);
  }
`;

export const SubTitle = styled.span`
  align-self: flex-end;

  margin-top: 5px;
  margin-right: 18%;

  font-family: Georgia, serif;
  font-style: italic;
  font-size: clamp(20px, 2.2vw, 38px);

  animation: fadeIn 1s ease 0.3s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    margin-right: 5%;
  }
`;

export const Graphic = styled.div`
  width: clamp(100px, 12vw, 190px);
  height: clamp(100px, 12vw, 190px);

  margin: 20px auto 0;

  border: 2px solid #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(45deg);

  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s ease;

  animation: graphicReveal 1.2s ease 0.4s both;

  &:hover {
    transform: rotate(135deg) scale(1.08);
    background: #ffffff;
  }

  &:hover span {
    color: #181818;
  }

  &:hover a {
    color: #181818;
  }

  @keyframes graphicReveal {
    from {
      opacity: 0;
      transform: rotate(0deg) scale(0.5);
    }

    to {
      opacity: 1;
      transform: rotate(45deg) scale(1);
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const ContactTitle = styled.h3`
  margin: auto 0 40px;

  font-size: clamp(65px, 11vw, 190px);
  font-weight: 400;
  line-height: 0.8;
  letter-spacing: -0.08em;

  cursor: default;

  transition:
    letter-spacing 0.5s ease,
    transform 0.5s ease;

  &:hover {
    letter-spacing: -0.055em;
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    font-size: clamp(55px, 15vw, 110px);
  }
`;

export const BottomContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-top: 1px solid rgba(255, 255, 255, 0.35);

  padding-top: 20px;

  font-size: 11px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 45px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 9px;
    opacity: 0.5;
  }

  a {
    color: #ffffff;
    text-decoration: none;

    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.4;
    }
  }
`;

export const Arrow = styled.div`
  a {
    color: inherit;
    text-decoration: none;

    display: inline-block;

    transition: transform 0.3s ease;

    &:hover {
      transform: translate(5px, -5px);
    }
  }
`;