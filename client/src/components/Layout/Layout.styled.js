import styled from "styled-components";

export const Container = styled.div`
  width: 480px;
  margin-left: auto;
  margin-right: auto;

  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;
