import styled from "styled-components";
import { Divider as DividerChakra } from "@chakra-ui/react";

export const Container = styled.div``;

interface StyledProps {
  $color?: "primary" | "secondary";
}

export const DividerComponent = styled(DividerChakra)<StyledProps>`
  margin: 0px !important;
  border-color: ${({ $color }) =>
    $color === "primary"
      ? "#d9d9d9 !important"
      : $color === "secondary"
      ? "#FCFC1B !important"
      : "#d9d9d9 !important"};
`;
