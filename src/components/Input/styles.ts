import styled from "styled-components";
import {
  Input as InputChakra,
  InputLeftElement,
  InputGroup as InputGroupChakra,
} from "@chakra-ui/react";
import COLORS from "@/themes/colors.pallete";

export const Container = styled.div``;

export const ContentInput = styled.div``;

export const InputComponent = styled(InputChakra)`
  padding: 8px 16px !important;
  color: ${COLORS.gray[700]} !important;
  background: ${({ disabled }) =>
    disabled ? `${COLORS.gray[200]}` : `${COLORS.white[100]}`} !important;
  border-color: ${({ disabled, isInvalid }) =>
    disabled
      ? `${COLORS.gray[500]}`
      : isInvalid
      ? `${COLORS.red[200]}`
      : `${COLORS.gray[200]}`} !important;
  &::placeholder {
    color: ${COLORS.gray[200]};
  }
`;

export const InputSearchComponent = styled(InputChakra)`
  height: 300px !important;
  height: 50px !important;
  color: #505251 !important;
  background: ${({ disabled }) =>
    disabled ? `${COLORS.gray[200]}` : `${COLORS.white[100]}`} !important;
  border-color: ${({ disabled }) =>
    disabled ? `${COLORS.gray[500]}` : `${COLORS.gray[200]}`} !important;
  &::placeholder {
    color: ${COLORS.gray[200]};
  }
`;

export const InputIcon = styled.img``;

export const InputGroup = styled(InputGroupChakra)``;

export const IconContainer = styled(InputLeftElement)`
  height: 100% !important;
  border-radius: 4px !important;
`;
