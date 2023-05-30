import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 24px;

  border-bottom: 2px solid black;
`;
export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #f55f5f;
`;
export const NavWrapper = styled.nav`
  display: flex;
  gap: 24px;
`;
export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #393646;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.1;
  }

  &.active {
    color: #f55f5f;
  }
`;
