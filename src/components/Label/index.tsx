import React from "react";

import { Container, H1, H2, Text } from "./styles";

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
      primary: "#002D4B",
      secondary: "#2D2D2D",
      tertiary: "#505251",
      white: "#FFFFFF",
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
