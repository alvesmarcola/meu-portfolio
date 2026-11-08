import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(250, 250, 250, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
`;

export const NavInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 18px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Brand = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  color: #111215;

  strong {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  span {
    font-size: 10px;
    font-family: 'Space Grotesk', monospace, sans-serif;
    color: #71717a;
    letter-spacing: 0.05em;
  }

  @media (max-width: 640px) {
    span {
      display: none;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #52525b;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;

  span.mono {
    font-family: 'Space Grotesk', monospace, sans-serif;
    font-size: 10px;
    color: #a1a1aa;
    margin-right: 4px;
  }

  &:hover {
    color: #111215;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LangToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #ffffff;
  font-family: 'Space Grotesk', monospace, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #111215;
  cursor: pointer;
  transition: all 0.25s ease;

  span.active {
    color: #111215;
    font-weight: 700;
  }

  span.inactive {
    color: #a1a1aa;
  }

  &:hover {
    border-color: #111215;
    background: #f4f4f5;
  }
`;

export const MobileContactBtn = styled.a`
  display: none;

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border-radius: 999px;
    background: #111215;
    color: #ffffff;
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
  }
`;
