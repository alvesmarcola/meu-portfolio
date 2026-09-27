import styled from "styled-components";

export const ProjectContainer = styled.section`
  min-height: 100vh;

  padding: 0 48px 80px;

  background: #181818;
  color: #ffffff;

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

  @media (max-width: 768px) {
    grid-template-columns: 70px 1fr;
    gap: 20px;
  }
`;

export const DetailTitle = styled.span`
  font-size: 12px;

  opacity: 0.45;
`;

export const DetailText = styled.p`
  margin: 0;

  max-width: 430px;

  font-size: 15px;

  line-height: 1.5;

  opacity: 0.8;
`;

export const ScopeList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 8px;

  font-size: 15px;

  opacity: 0.8;

  li {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;

    &::before {
      content: "•";
      margin-right: 10px;
    }

    &:hover {
      transform: translateX(6px);
      opacity: 1;
    }
  }
`;

export const ProjectPreview = styled.div`
  width: 100%;

  height: 65vh;
  min-height: 400px;

  margin-top: 100px;

  background: #e9e6df;
  color: #181818;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.5s ease;

  &:hover {
    transform: scale(0.985);
  }

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 300px;
  }
`;

export const PreviewContent = styled.div`
  width: 80%;
  height: 80%;

  border: 1px solid rgba(24, 24, 24, 0.2);

  background: #e9e6df;
  color: #181818;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewText = styled.span`
  color: #181818;

  font-size: clamp(30px, 5vw, 80px);

  font-weight: 700;

  letter-spacing: -0.06em;
`;