import { CTAContainer, CTATop, CTATitle, CTAContent, CTAText, CTAButton } from "./style";
import { useLanguage } from "../../i18n/useLanguage";
export function CTA(){const {t}=useLanguage();const c=t.cta;return <CTAContainer><CTATop><span>{c.label}</span><span>{c.tagline}</span></CTATop><CTATitle>{c.title[0]}<br/>{c.title[1]}<br/>{c.title[2]}</CTATitle><CTAContent><CTAText>{c.text}</CTAText><CTAButton href="https://wa.me/54997053527" target="_blank" rel="noopener noreferrer">{c.button}<span>↗</span></CTAButton></CTAContent></CTAContainer>;}
