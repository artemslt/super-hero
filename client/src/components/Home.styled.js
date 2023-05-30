import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  color: #fff;
  padding: 80px 40px;

  @media screen and (min-width: 768px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 350px;
    padding-bottom: 350px;
  }

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.7),
      rgba(47, 48, 58, 0.7)
    ),
    url(/171041.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 20px;
`;

export const HomeLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline #f55f5f;
  color: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
    color: #f55f5f;
  }
`;
