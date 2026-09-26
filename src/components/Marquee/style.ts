import styled from "styled-components";

export const MarqueeContainer = styled.section`
  width: 100%;
  overflow: hidden;

  background: #181818;
  color: #ffffff;

  padding: 18px 0;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;

  animation: marquee 20s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
`;

export const MarqueeGroup = styled.div`
  display: flex;
  flex-shrink: 0;

  min-width: 100vw;
  justify-content: space-around;
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  padding-right: 32px;

  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;

  white-space: nowrap;

  span {
    font-size: 14px;
  }
`;