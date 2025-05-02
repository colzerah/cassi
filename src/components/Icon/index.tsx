import React from "react";

import { Container, IconComponent } from "./styles";

import { ICON_ENUM } from "@/utils/Enums";

interface IconProps {
  type: "primary" | "secondary";
  iconName: "facebook" | "linkedin" | "instagram";
  onClick: () => void;
  alt?: string;
}

export function Icon({ type, iconName, onClick, alt }: IconProps) {
  return (
    <Container>
      <IconComponent
        src={ICON_ENUM[type][iconName].src}
        onClick={onClick}
        alt={alt}
      />
    </Container>
  );
}
