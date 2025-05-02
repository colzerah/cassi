import React from "react";

import { Container, H1, H2, Text } from "./styles";
import COLORS from "@/themes/colors.pallete";

interface LabelProps {
  type?: "h1" | "h2" | "text";
  colorScheme?: "primary" | "secondary" | "tertiary" | "white";
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  text: string;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
}

export function Label({
  type = "text",
  colorScheme = "primary",
  text,
  fontSize,
  fontWeight,
  lineHeight,
  mt,
  ml,
  mb,
  mr,
}: LabelProps) {
  const resolvedColor = React.useMemo(() => {
    const colors = {
      primary: COLORS.primary[500],
      secondary: COLORS.gray[600],
      tertiary: COLORS.gray[700],
      white: COLORS.white[100],
    };
    return colors[colorScheme];
  }, [colorScheme]);

  return (
    <Container>
      {type === "h1" && (
        <H1 $mt={mt} $mr={mr} $mb={mb} $ml={ml} color={resolvedColor}>
          {text}
        </H1>
      )}
      {type === "h2" && (
        <H2 $mt={mt} $mr={mr} $mb={mb} $ml={ml} color={resolvedColor}>
          {text}
        </H2>
      )}
      {type === "text" && (
        <Text
          $mt={mt}
          $mr={mr}
          $mb={mb}
          $ml={ml}
          color={resolvedColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
        >
          {text}
        </Text>
      )}
    </Container>
  );
}
