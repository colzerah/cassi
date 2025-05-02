import styled from "styled-components";
import {
  Input as InputChakra,
  InputLeftElement,
  InputGroup as InputGroupChakra,
} from "@chakra-ui/react";

export const Container = styled.div``;

export const ContentInput = styled.div``;

export const InputComponent = styled(InputChakra)`
  padding: 8px 16px !important;
  color: #505251 !important;
  background: ${({ disabled }) => (disabled ? "#d9d9d9" : "#fff")} !important;
  border-color: ${({ disabled, isInvalid }) =>
    disabled ? "#b8b8b8" : isInvalid ? "#FF5C5C" : "#d9d9d9"} !important;
  &::placeholder {
    color: #d9d9d9;
  }
`;

export const InputSearchComponent = styled(InputChakra)`
  height: 300px !important;
  height: 50px !important;
  color: #505251 !important;
  background: ${({ disabled }) => (disabled ? "#d9d9d9" : "#fff")} !important;
  border-color: ${({ disabled }) =>
    disabled ? "#b8b8b8" : "#d9d9d9"} !important;
  &::placeholder {
    color: #d9d9d9;
  }
`;

export const InputIcon = styled.img``;

export const InputGroup = styled(InputGroupChakra)``;

export const IconContainer = styled(InputLeftElement)`
  height: 100% !important;
  border-radius: 4px !important;
`;
