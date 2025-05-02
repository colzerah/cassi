import styled from "styled-components";
import { Divider as DividerChakra } from "@chakra-ui/react";

import COLORS from "@/themes/colors.pallete";

export const Container = styled.div``;

interface StyledProps {
  $color?: "primary" | "secondary";
}

export const DividerComponent = styled(DividerChakra)<StyledProps>`
  margin: 0px !important;
  border-color: ${({ $color }) =>
    $color === "primary"
      ? `${COLORS.gray[200]} !important`
      : $color === "secondary"
      ? `${COLORS.yellow[100]} !important`
      : `${COLORS.gray[200]} !important`};
`;
