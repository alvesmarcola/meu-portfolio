import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background: #fff;
  color: #181818;

  min-height: 100vh;

  padding: 0 48px 80px;

  position: relative;
  overflow: hidden;

  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 0 20px 50px;
  }
`;

export const ProjectLabel = styled.div`
  display: inline-block;

  background: #181818;
  color: #ffffff;

  padding: 14px 55px;

  font-size: 13px;
  font-weight: 600;

  margin-left: 20px;

  animation: labelReveal 0.8s ease both;

  @keyframes labelReveal {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 12px 30px;
  }
`;

export const ProjectHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 80px;

  padding: 55px 0 70px;

  border-bottom: 1px solid rgba(24, 24, 24, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;

    padding: 45px 0;
  }
`;

export const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;

  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 70px 1fr;
  }
`;

export const ProjectType = styled.span`
  font-size: 13px;

  opacity: 0.55;
`;

export const ProjectName = styled.h2`
  margin: 0;

  font-size: clamp(32px, 4vw, 65px);
  font-weight: 500;

  line-height: 0.95;
  letter-spacing: -0.055em;

  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    letter-spacing 0.5s ease;

  &:hover {
    transform: translateX(12px);
    letter-spacing: -0.03em;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 100px;

  padding: 65px 0 90px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;

    padding: 50px 0 60px;
  }
`;

export const DetailBlock = styled.div`
  display: grid;

  grid-template-columns: 100px 1fr;

  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 70px 1fr;
  }
`;

export const DetailTitle = styled.span`
  font-size: 11px;

  opacity: 0.5;

  letter-spacing: 0.03em;
`;

export const DetailText = styled.p`
  margin: 0;

  max-width: 430px;

  font-size: 15px;

  line-height: 1.5;
`;

export const ScopeList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 10px;

  font-size: 15px;

  li {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;

    &::before {
      content: "•";
      margin-right: 10px;
    }

    &:hover {
      transform: translateX(8px);
      opacity: 0.55;
    }
  }
`;

export const ProjectPreview = styled.div`
  width: 100%;
  height: 65vh;

  min-height: 400px;

  background: #181818;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  cursor: pointer;

  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.4s ease;

  &:hover {
    transform: scale(0.985);
    background: #242424;
  }

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 300px;
  }
`;

export const PreviewContent = styled.div`
  width: 80%;
  height: 80%;

  border: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease;

  ${ProjectPreview}:hover & {
    transform: scale(1.03);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const PreviewText = styled.span`
  color: #ffffff;

  font-size: clamp(30px, 5vw, 80px);

  font-weight: 700;

  letter-spacing: -0.06em;
`;