import styled from "styled-components";

export const ProjectContainer = styled.section`
  --project-accent: #168fe2;
  --project-glow: rgba(22, 143, 226, 0.2);

  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.8fr);
  grid-template-rows: auto auto minmax(580px, 1fr);
  column-gap: clamp(38px, 6vw, 100px);
  align-items: center;
  min-height: min(100vh, 1100px);
  padding: 0 clamp(24px, 6vw, 104px) 74px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 78% 58%, var(--project-glow), transparent 42%),
    #181818;
  color: #e9e6df;
  font-family: Arial, sans-serif;

  &[data-project="donut"] {
    --project-accent: #f04c89;
    --project-glow: rgba(240, 76, 137, 0.2);

    background:
      radial-gradient(ellipse at 72% 60%, var(--project-glow), transparent 43%),
      #181818;
  }

  @media (max-width: 768px) {
    display: block;
    min-height: auto;
    padding: 0 20px 76px;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export const ProjectLabel = styled.div`
  display: inline-block;
  grid-column: 1 / -1;
  justify-self: start;
  margin-left: 20px;
  padding: 14px 30px;
  border-radius: 0 0 5px 5px;
  background: #e9e6df;
  color: #181818;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 12px 21px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  grid-column: 1 / -1;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(30px, 7vw, 100px);
  margin-top: clamp(45px, 6.2vw, 84px);

  > :first-child {
    flex: 1;
  }

  > :last-child {
    flex: 0 1 22%;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 5px;
  }

  > :last-child h2 {
    font-size: clamp(16px, 1.5vw, 21px);
    line-height: 1.15;
    letter-spacing: -0.025em;
  }

  > :last-child span {
    padding-top: 0;
  }

  [data-revealed="false"] & {
    opacity: 0;
    transform: translateY(18px);
  }

  [data-revealed="true"] & {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 700ms ease,
      transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    margin-top: 42px;

    > :last-child {
      flex: 1;
      flex-direction: column;
      gap: 12px;
    }

    > :last-child h2 {
      font-size: clamp(36px, 10vw, 58px);
      line-height: 0.98;
      letter-spacing: -0.06em;
    }
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ProjectType = styled.span`
  min-width: 72px;
  padding-top: 7px;
  color: rgba(233, 230, 223, 0.55);
  font-size: 11px;
  letter-spacing: 0.09em;
`;

export const ProjectName = styled.h2`
  margin: 0;
  font-size: clamp(46px, 6.3vw, 88px);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.06em;
  text-wrap: balance;
  transition:
    color 350ms ease,
    transform 500ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    max-width: 15ch;
    font-size: clamp(36px, 10vw, 58px);
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 3;
  grid-template-columns: minmax(0, 1fr);
  align-content: center;
  gap: clamp(34px, 5vw, 66px);
  margin-top: 0;
  padding: 34px 0 48px;

  [data-revealed="false"] & {
    opacity: 0;
    transform: translateY(24px);
  }

  [data-revealed="true"] & {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 750ms ease 100ms,
      transform 950ms cubic-bezier(0.16, 1, 0.3, 1) 100ms;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 31px;
    margin-top: 49px;
  }
`;

export const DetailBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 14px;
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 11px;
  }
`;

export const DetailTitle = styled.span`
  position: relative;
  display: block;
  width: fit-content;
  padding-bottom: 9px;
  color: rgba(233, 230, 223, 0.48);
  font-size: 10px;
  letter-spacing: 0.08em;
  line-height: 1.5;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: var(--project-accent);
    content: "";
    transform: scaleX(0.35);
    transform-origin: left;
    transition: transform 350ms ease;
  }

  ${DetailBlock}:hover &::after {
    transform: scaleX(1);
  }
`;

export const DetailText = styled.p`
  max-width: 540px;
  margin: 0;
  color: rgba(233, 230, 223, 0.82);
  font-size: 14px;
  line-height: 1.7;
`;

export const ScopeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  color: rgba(233, 230, 223, 0.82);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;

  li {
    transition:
      color 250ms ease,
      transform 300ms ease;

    &::before {
      content: "—";
      margin-right: 10px;
      color: var(--project-accent);
    }

    &:hover {
      color: #ffffff;
      transform: translateX(4px);
    }
  }
`;

export const ProjectPreview = styled.a`
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --parallax-x: 0px;
  --parallax-y: 0px;

  position: relative;
  display: block;
  grid-column: 2;
  grid-row: 3;
  width: 100%;
  height: min(72vh, 760px);
  min-height: 570px;
  margin: 0;
  isolation: isolate;
  outline: none;
  text-decoration: none;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;

  &::before {
    position: absolute;
    z-index: -1;
    inset: 8% 4%;
    border-radius: 50%;
    background: var(--project-glow);
    content: "";
    filter: blur(65px);
    opacity: 0.72;
    transform: translate3d(var(--parallax-x), var(--parallax-y), -50px) scale(0.9);
    transition:
      transform 800ms cubic-bezier(0.2, 0.7, 0.2, 1),
      opacity 800ms ease;
  }

  [data-revealed="false"] &::before {
    opacity: 0;
    transform: translate3d(0, 32px, -50px) scale(0.7);
  }

  [data-revealed="true"] &::before {
    opacity: 0.72;
    transform: translate3d(var(--parallax-x), var(--parallax-y), -50px) scale(1);
  }

  &:focus-visible {
    border-radius: 6px;
    box-shadow: 0 0 0 2px var(--project-accent);
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 0;
    margin-top: 46px;
  }
`;

export const DesktopComposition = styled.div`
  --window-x: 0px;
  --window-y: 0px;
  --phone-x: 0px;
  --phone-y: 0px;
  --detail-x: 0px;
  --detail-y: 0px;

  position: absolute;
  inset: 0;
  perspective: 1500px;
  transform-style: preserve-3d;

  [data-revealed="false"] & {
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrowserWindow = styled.div`
  position: absolute;
  z-index: 1;
  top: 8%;
  right: 1%;
  width: 94%;
  height: 78%;
  overflow: hidden;
  border: 1px solid rgba(233, 230, 223, 0.33);
  border-radius: 8px;
  background: #171717;
  box-shadow:
    0 38px 90px rgba(0, 0, 0, 0.56),
    0 12px 28px rgba(0, 0, 0, 0.42),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  transform:
    translate3d(var(--window-x), var(--window-y), 0)
    perspective(1400px)
    rotateX(calc(3deg + var(--rotate-x)))
    rotateY(calc(-9deg + var(--rotate-y)));
  transform-origin: center;
  transition:
    transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
    opacity 800ms ease,
    box-shadow 500ms ease;
  backface-visibility: hidden;

  [data-project="donut"] & {
    top: 5%;
    right: 4%;
    width: 92%;
    height: 76%;
    transform:
      translate3d(var(--window-x), var(--window-y), 0)
      perspective(1400px)
      rotateX(calc(2deg + var(--rotate-x)))
      rotateY(calc(8deg + var(--rotate-y)))
      rotateZ(-1deg);
  }

  [data-revealed="false"] & {
    opacity: 0;
    transform:
      translate3d(5%, 34px, -100px)
      perspective(1400px)
      rotateX(9deg)
      rotateY(-16deg)
      scale(0.93);
  }

  [data-revealed="true"] & {
    opacity: 1;
    transition-delay: 160ms;
  }

  ${ProjectPreview}:hover & {
    box-shadow:
      0 46px 100px rgba(0, 0, 0, 0.65),
      0 14px 32px rgba(0, 0, 0, 0.48),
      inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
`;

export const BrowserBar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  height: 30px;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border-bottom: 1px solid rgba(233, 230, 223, 0.12);
  background: linear-gradient(180deg, #292929, #202020);
`;

export const BrowserControls = styled.span`
  display: flex;
  gap: 5px;

  &::before,
  &::after,
  span {
    width: 7px;
    height: 7px;
    border: 1px solid rgba(233, 230, 223, 0.35);
    border-radius: 50%;
    content: "";
  }

  &::before {
    border-color: #f17f73;
    background: #f17f73;
  }

  &::after {
    border-color: #e7bf6b;
    background: #e7bf6b;
  }

  span {
    border-color: #77bf82;
    background: #77bf82;
  }
`;

export const BrowserAddress = styled.span`
  display: block;
  width: min(48%, 290px);
  height: 13px;
  margin: 0 auto;
  border: 1px solid rgba(233, 230, 223, 0.08);
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.19);
`;

export const BrowserScreen = styled.div`
  position: relative;
  height: calc(100% - 30px);
  overflow: hidden;
  background: #e9e6df;
`;

export const BrowserImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: auto;
  max-width: none;
  height: 100%;
  object-fit: contain;
  object-position: right center;
  transition:
    filter 450ms ease,
    transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: right center;

  [data-project="donut"] & {
    height: 100%;
  }

  ${ProjectPreview}:hover & {
    filter: brightness(1.035);
    transform: scale(1.02);
  }
`;

export const FloatingPhone = styled.div`
  position: absolute;
  z-index: 3;
  top: 29%;
  left: -1%;
  width: 19%;
  height: 54%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: clamp(18px, 2vw, 29px);
  background: #090909;
  box-shadow:
    0 34px 70px rgba(0, 0, 0, 0.62),
    0 10px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 0 3px rgba(255, 255, 255, 0.08);
  transform:
    translate3d(var(--phone-x), var(--phone-y), 80px)
    perspective(900px)
    rotateX(calc(-2deg + var(--rotate-x)))
    rotateY(calc(10deg + var(--rotate-y)))
    rotateZ(-5deg);
  transform-origin: center;
  transition:
    transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
    opacity 700ms ease,
    box-shadow 500ms ease;
  backface-visibility: hidden;

  &::before {
    position: absolute;
    z-index: 2;
    top: 2.4%;
    left: 50%;
    width: 26%;
    height: 1.5%;
    border-radius: 999px;
    background: #080808;
    content: "";
    transform: translateX(-50%);
  }

  [data-project="donut"] & {
    top: 39%;
    right: 4%;
    left: auto;
    width: 19%;
    height: 53%;
    transform:
      translate3d(var(--phone-x), var(--phone-y), 100px)
      perspective(900px)
      rotateX(calc(2deg + var(--rotate-x)))
      rotateY(calc(-11deg + var(--rotate-y)))
      rotateZ(6deg);
  }

  [data-revealed="false"] & {
    opacity: 0;
    transform:
      translate3d(-35px, 60px, 180px)
      perspective(900px)
      rotateX(8deg)
      rotateY(18deg)
      rotateZ(-11deg)
      scale(0.82);
  }

  [data-revealed="true"] & {
    opacity: 1;
    transition-delay: 360ms;
  }

  ${ProjectPreview}:hover & {
    box-shadow:
      0 42px 80px rgba(0, 0, 0, 0.68),
      0 12px 24px rgba(0, 0, 0, 0.5),
      inset 0 0 0 3px rgba(255, 255, 255, 0.1);
  }

`;

export const FloatingScreen = styled.div`
  position: absolute;
  inset: 4.5% 5%;
  overflow: hidden;
  border-radius: clamp(14px, 1.55vw, 22px);
  background: #101010;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);

  img {
    position: absolute;
    top: -13%;
    left: -72%;
    display: block;
    width: 600%;
    max-width: none;
    height: auto;
  }

  [data-project="donut"] & img {
    left: -90%;
  }
`;

export const FloatingDetail = styled.div`
  position: absolute;
  z-index: 2;
  top: 1%;
  left: 4%;
  width: 35%;
  height: 28%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 5px;
  background: #151515;
  box-shadow:
    0 26px 54px rgba(0, 0, 0, 0.5),
    0 5px 15px rgba(0, 0, 0, 0.34);
  transform:
    translate3d(var(--detail-x), var(--detail-y), 120px)
    perspective(1000px)
    rotateY(17deg)
    rotateZ(-5deg);
  transition:
    transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
    opacity 750ms ease;

  [data-revealed="false"] & {
    opacity: 0;
    transform:
      translate3d(-35px, -25px, 180px)
      perspective(1000px)
      rotateY(28deg)
      rotateZ(-10deg)
      scale(0.84);
  }

  [data-revealed="true"] & {
    opacity: 1;
    transition-delay: 520ms;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 97% 67%;
    transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  ${ProjectPreview}:hover & img {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileComposition = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: clamp(340px, 108vw, 500px);
  overflow: hidden;
  border: 1px solid rgba(233, 230, 223, 0.14);
  border-radius: 5px;
  background:
    radial-gradient(ellipse at 75% 40%, var(--project-glow), transparent 60%),
    #121212;
  box-shadow:
    0 35px 70px rgba(0, 0, 0, 0.48),
    inset 0 0 50px rgba(0, 0, 0, 0.35);
  transform:
    perspective(1000px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y))
    translate3d(var(--parallax-x), var(--parallax-y), 0);
  transition: transform 550ms cubic-bezier(0.2, 0.7, 0.2, 1);

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 420px) {
    height: clamp(330px, 105vw, 420px);
  }
`;

export const MobileDesktop = styled.div`
  position: absolute;
  top: 9%;
  right: -8%;
  width: 88%;
  height: 63%;
  overflow: hidden;
  border: 1px solid rgba(233, 230, 223, 0.2);
  border-radius: 5px;
  background: #e9e6df;
  box-shadow:
    0 25px 45px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.32);
  transform: translate3d(0, 0, -30px) rotate(2deg);
  transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right center;
  }

  ${ProjectPreview}:hover & {
    transform: translate3d(-4px, -3px, -30px) rotate(1deg);
  }
`;

export const MobilePhone = styled.div`
  position: absolute;
  z-index: 1;
  top: 3%;
  left: 3%;
  width: 70%;
  height: 94%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: #111111;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.55),
    0 4px 12px rgba(0, 0, 0, 0.45),
    inset 0 0 0 2px rgba(0, 0, 0, 0.7);
  transform: rotate(-5deg);
  transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
  }

  ${ProjectPreview}:hover & {
    transform: translateY(-4px) rotate(-3deg);
  }
`;

export const MobileParallax = styled.span`
  position: absolute;
  z-index: 2;
  right: 5%;
  bottom: 6%;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(233, 230, 223, 0.35);
  border-radius: 50%;
  background: rgba(24, 24, 24, 0.72);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  transform: translate3d(var(--parallax-x), var(--parallax-y), 40px);
  transition: transform 500ms cubic-bezier(0.2, 0.7, 0.2, 1);

  &::before {
    position: absolute;
    inset: 12px;
    border: 1px solid var(--project-accent);
    border-radius: 50%;
    content: "";
  }
`;
