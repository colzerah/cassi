import React from "react";

import {
  Container,
  AlertBody,
  AlertIcon,
  AlertDescription,
  IconSuccess,
  ContentSuccess,
} from "./styles";
import { ALERT_SUCCESS, ALERT_ERROR, ALERT_SUCCESS_MSG } from "@/assets";
import { Label } from "../Label";
import { Divider } from "../Divider";

interface AlertProps {
  children: React.ReactNode;
  type: "success" | "error";
}

export function Alert({ children, type }: AlertProps) {
  const resolvedColor = {
    success: {
      background: "#d6fbd0",
      borderColor: "#29bb11",
      icon: ALERT_SUCCESS.src,
    },
    error: {
      background: "#fbd0d4",
      borderColor: "#ec1529",

      icon: ALERT_ERROR.src,
    },
  };

  return (
    <Container>
      <AlertBody
        bg={resolvedColor[type].background}
        bc={resolvedColor[type].borderColor}
      >
        <AlertIcon src={resolvedColor[type].icon} />
        <AlertDescription>{children}</AlertDescription>
      </AlertBody>
      <Divider />
      <ContentSuccess>
        <IconSuccess src={ALERT_SUCCESS_MSG.src} />
        <Label
          mb={0}
          mt={2}
          text="Obrigado pela resposta!"
          type="h2"
          colorScheme="tertiary"
        />
      </ContentSuccess>
    </Container>
  );
}
