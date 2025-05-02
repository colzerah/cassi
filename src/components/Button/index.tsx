import React from "react";

import { Container, ButtonChakra } from "./styles";

interface ButtonProps {
  onClick: () => void;
  variant?: "solid" | "outline" | "link";
  title: string;
}

export function Button({ onClick, title, variant = "solid" }: ButtonProps) {
  return (
    <Container>
      <ButtonChakra onClick={onClick} colorScheme="primary" variant={variant}>
        {title}
      </ButtonChakra>
    </Container>
  );
}
