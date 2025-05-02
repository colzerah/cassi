import React from "react";

import { Container, DividerComponent } from "./styles";

interface DividerProps {
  colorSchema?: "primary" | "secondary";
}

export function Divider({ colorSchema }: DividerProps) {
  return (
    <Container>
      <DividerComponent $color={colorSchema} />
    </Container>
  );
}
