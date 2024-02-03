import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 128px;
  margin-bottom: 16px;
  background-color: #0f1d2d;
  height: 60px;
`;

export const LogoImg=styled.img`
  width: 28px;
  height: 28px;
  margin-right: 16px;
`
export const Go=styled.span`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 26px;
`

export const HomeLogo = styled.span`
  color: #FF662D;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 26px;
`

export const LinkNav = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #FF662D;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #FF662D;
  }
`;

export const Footer=styled.footer`
  background-color: #0f1d2d;
  height: 60px;
`