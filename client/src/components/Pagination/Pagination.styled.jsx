import styled from "styled-components";

export const Wrapper = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Button = styled.button`
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
