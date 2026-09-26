import {
  MarqueeContainer,
  MarqueeTrack,
  MarqueeGroup,
  MarqueeItem,
} from "./style";

const items = [
  "Desenvolvimento front-end",
  "Criativos",
  "Sites 3D",
  "tráfego pago",
  "Desenvolvimento front-end",
  "Criativos",
  "Sites 3D",
  "tráfego pago",
  "Desenvolvimento front-end",
  "Criativos",
  "Sites 3D",
  "tráfego pago",
];

function MarqueeGroupContent() {
  return (
    <MarqueeGroup>
      {items.map((item, index) => (
        <MarqueeItem key={`${item}-${index}`}>
          {item}
          <span>✦</span>
        </MarqueeItem>
      ))}
    </MarqueeGroup>
  );
}

export function Marquee() {
  return (
    <MarqueeContainer>
      <MarqueeTrack>
        <MarqueeGroupContent />
        <MarqueeGroupContent />
      </MarqueeTrack>
    </MarqueeContainer>
  );
}