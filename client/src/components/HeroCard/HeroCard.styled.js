import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  width: 100%;
  height: 300px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const Image = styled.img`
  height: 90%;
  object-fit: cover;
`;
export const Title = styled.h2`
  height: 10%;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Poster = styled.img`
  width: 360px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AdditionalInfoWrapper = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  > li {
    display: flex;
  }
`;

export const TextAccent = styled.span`
  font-weight: 600;

  text-decoration: underline;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const HeroCardWrapper = styled.div`
  padding: 16px;
`;

export const EditLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  text-align: center;
  width: 100px;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid grey;
  border-radius: 6px;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.1;
    background-color: #f55f5f;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  font-weight: 600;
  text-align: center;
  width: 100px;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid grey;
  border-radius: 6px;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.1;
    background-color: #f55f5f;
  }
`;
