import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";

export const Heading = styled.h2`
  margin-bottom: 40px;
  text-align: center;

  letter-spacing: 0.04em;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const Label = styled.label``;

export const Input = styled(FormikField)`
  width: 280px;
  height: 40px;
  padding: 11px 14px 12px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 8px;

  line-height: 19px;
  letter-spacing: 0.04em;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;
export const Textarea = styled(FormikField)`
  width: 280px;
  height: 100px;
  font-size: 14px;
  line-height: calc(26 / 14);
  outline: none;
  overflow: auto;
  resize: none;
  padding: 11px 14px 12px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 44px;
  cursor: pointer;
  border-radius: 16px;
  background-color: chocolate;
  border: 2px solid chocolate;
  line-height: 27px;
  letter-spacing: 0.04em;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
    background-color: #f55f5f;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ImgThumb = styled.img`
  width: 100px;
  height: 100px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const ButtonDeleteImage = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  right: 0;

  width: 20px;
  height: 20px;

  border-radius: 80%;
  border: none;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;
