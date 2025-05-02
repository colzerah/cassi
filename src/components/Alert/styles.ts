import COLORS from "@/themes/colors.pallete";
import styled from "styled-components";
import {
  Alert as AlertChakra,
  AlertDescription as AlertDescriptionChakra,
} from "@chakra-ui/react";

export const Container = styled.div``;

interface IAlertBodyProps {
  bg: string;
  bc: string;
}

export const AlertBody = styled(AlertChakra)<IAlertBodyProps>`
  background: ${({ bg }) => `${bg} !important`};
  border-color: ${({ bc }) => `${bc} !important`};
  border-width: 1px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const AlertIcon = styled.img`
  padding-right: 10px;
`;

export const AlertDescription = styled(AlertDescriptionChakra)`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  color: ${COLORS.gray[800]};
`;

export const IconSuccess = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

export const ContentSuccess = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;
