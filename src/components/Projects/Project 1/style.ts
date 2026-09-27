import styled from "styled-components";

export const ProjectsContainer = styled.section<{ $dark?: boolean }>`
  background: ${({ $dark }) => ($dark ? "#181818" : "#e9e6df")};
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#181818")};

  min-height: 100vh;

  padding: 0 48px 80px;

  position: relative;
  overflow: hidden;

  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 0 20px 50px;
  }
`;

export const ProjectLabel = styled.div<{ $dark?: boolean }>`
  display: inline-block;

  background: ${({ $dark }) => ($dark ? "#e9e6df" : "#181818")};
  color: ${({ $dark }) => ($dark ? "#181818" : "#ffffff")};

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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 60px;

  margin-top: 50px;

  animation: contentReveal 0.9s ease 0.15s both;

  @keyframes contentReveal {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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

  line-height: 1.4;
`;

export const ProjectName = styled.h2`
  margin: 0;

  font-size: clamp(30px, 4vw, 58px);

  font-weight: 500;

  line-height: 0.95;

  letter-spacing: -0.055em;

  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    letter-spacing 0.5s ease;

  cursor: default;

  &:hover {
    transform: translateX(8px);

    letter-spacing: -0.04em;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 100px;

  margin-top: 100px;

  max-width: 1100px;

  animation: detailsReveal 0.9s ease 0.3s both;

  @keyframes detailsReveal {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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

  text-transform: uppercase;

  opacity: 0.45;

  letter-spacing: 0.02em;
`;

export const DetailText = styled.p`
  margin: 0;

  max-width: 430px;

  font-size: 15px;

  line-height: 1.5;

  opacity: 0.8;

  strong {
    font-weight: 700;
  }
`;

export const ScopeList = styled.ul`
  margin: 0;

  padding: 0;

  list-style: none;

  display: flex;

  flex-direction: column;

  gap: 8px;

  font-size: 15px;

  line-height: 1.4;

  opacity: 0.8;

  li {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;

    cursor: default;

    &::before {
      content: "•";

      margin-right: 10px;

      opacity: 0.5;
    }

    &:hover {
      transform: translateX(6px);

      opacity: 1;
    }
  }
`;

export const ProjectPreview = styled.div<{ $dark?: boolean }>`
  width: 100%;

  height: 65vh;

  min-height: 400px;

  margin-top: 100px;

  background: ${({ $dark }) => ($dark ? "#e9e6df" : "#181818")};

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
  }

  @media (max-width: 768px) {
    height: 50vh;

    min-height: 300px;

    margin-top: 60px;
  }
`;

export const PreviewContent = styled.div<{ $dark?: boolean }>`
  width: 80%;

  height: 80%;

  border: 1px solid
    ${({ $dark }) =>
      $dark
        ? "rgba(24, 24, 24, 0.2)"
        : "rgba(255, 255, 255, 0.2)"};

  display: flex;

  align-items: center;

  justify-content: center;

  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease;

  ${ProjectPreview}:hover & {
    transform: scale(1.03);

    border-color: ${({ $dark }) =>
      $dark
        ? "rgba(24, 24, 24, 0.5)"
        : "rgba(255, 255, 255, 0.5)"};
  }
`;

export const PreviewText = styled.span<{ $dark?: boolean }>`
  color: ${({ $dark }) => ($dark ? "#181818" : "#ffffff")};

  font-size: clamp(30px, 5vw, 80px);

  font-weight: 700;

  letter-spacing: -0.06em;

  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    letter-spacing 0.5s ease;

  ${ProjectPreview}:hover & {
    transform: scale(1.04);

    letter-spacing: -0.04em;
  }
`;