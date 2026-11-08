import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  padding: 36px 48px;
  background: #fafafa;
  color: #71717a;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`;

export const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 11px;
  letter-spacing: 0.04em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Copyright = styled.span`
  color: #52525b;

  strong {
    color: #111215;
    font-weight: 700;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    color: #71717a;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #111215;
    }
  }

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

export const BackToTopBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #111215;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
