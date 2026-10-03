import styled from "styled-components";

export const ProjectContainer = styled.section`
  min-height: 100vh;

  padding: 0 48px 80px;

  background: #rgb(233, 230, 223);
  color: #000;

  font-family: Arial, sans-serif;

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px 50px;
  }
`;

export const ProjectLabel = styled.div`
  display: inline-block;

  padding: 14px 55px;

  margin-left: 20px;

  background: #e9e6df;
  color: #181818;

  font-size: 13px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 12px 30px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 60px;

  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 35px;
    margin-top: 35px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 30px;

  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ProjectType = styled.span`
  min-width: 80px;

  font-size: 13px;

  opacity: 0.5;
`;

export const ProjectName = styled.h2`
  margin: 0;

  font-size: clamp(30px, 4vw, 58px);

  font-weight: 500;

  line-height: 0.95;

  letter-spacing: -0.055em;

  transition: transform 0.4s ease;

  &:hover {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    font-size: clamp(34px, 10vw, 58px);
  }
`;

export const DetailsGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 100px;

  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 50px;

    margin-top: 60px;
  }
`;

export const DetailBlock = styled.div`
  display: grid;

  grid-template-columns: 80px 1fr;

  gap: 30px;

  align-items: start;

  min-width: 0;

  @media (max-width: 768px) {
    display: flex;

    flex-direction: column;

    gap: 18px;

    width: 100%;
  }
`;

export const DetailTitle = styled.span`
  font-size: 12px;

  text-transform: uppercase;

  opacity: 0.45;

  letter-spacing: 0.02em;

  line-height: 1.4;

  @media (max-width: 768px) {
    display: block;

    width: 100%;
  }
`;

export const DetailText = styled.p`
  margin: 0;

  max-width: 430px;

  font-size: 15px;

  line-height: 1.5;

  opacity: 0.8;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ScopeList = styled.ul`
  margin: 0;

  padding: 0;

  list-style: none;

  display: flex;

  flex-direction: column;

  gap: 8px;

  width: 100%;

  font-size: 15px;

  line-height: 1.4;

  opacity: 0.8;

  li {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;

    &::before {
      content: "•";

      margin-right: 10px;

      opacity: 0.6;
    }

    &:hover {
      transform: translateX(6px);

      opacity: 1;
    }
  }
`;

export const ProjectPreview = styled.a`
  display: flex;

  width: 100%;
  height: 65vh;
  min-height: 400px;

  margin-top: 100px;

  background: #111111;

  overflow: hidden;

  cursor: pointer;

  text-decoration: none;

  align-items: center;
  justify-content: center;

  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: scale(0.985);
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 0;

    margin-top: 60px;

    background: transparent;

    &:hover {
      transform: none;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  

  display: block;

  object-fit: contain;
  object-position: center;

  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.4s ease;

  ${ProjectPreview}:hover & {
    transform: scale(1.02);

    filter: brightness(0.92);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 100%;

    object-fit: contain;

    ${ProjectPreview}:hover & {
      transform: none;
      filter: none;
    }
  }
`;