import { MarqueeContainer, MarqueeTrack, MarqueeGroup, MarqueeItem } from "./style";
import { useLanguage } from "../../i18n/useLanguage";
function MarqueeGroupContent() { const { t } = useLanguage(); const items=[...t.marquee,...t.marquee,...t.marquee]; return <MarqueeGroup>{items.map((item,index)=><MarqueeItem key={`${item}-${index}`}>{item}<span>✦</span></MarqueeItem>)}</MarqueeGroup>; }
export function Marquee(){return <MarqueeContainer><MarqueeTrack><MarqueeGroupContent/><MarqueeGroupContent/></MarqueeTrack></MarqueeContainer>;}
