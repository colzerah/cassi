import React from "react";

import {
  Container,
  Content,
  IconFooter,
  ContentFooter,
  Body,
  VStack,
  Col,
  DivIcon,
  ContentBody,
  FooterTitle,
  Link,
} from "./styles";

import { Divider } from "@/components/Divider";

import { CASSI_LOGO_LIGHT } from "@/assets";
import { Icon } from "../Icon";
import { SOCIAL_LINK_ENUM } from "@/utils/Enums";

const navLinks = [
  {
    title: "Home",
    links: [],
  },
  {
    title: "Conheça a CASSI",
    links: [
      "Institucional",
      "Informações financeiras",
      "Governança corporativa",
      "Como trabalhamos",
      "Faça parte da nossa equipe",
    ],
  },
  {
    title: "Nossos Planos",
    links: [
      "Plano CASSI Essencial",
      "Plano CASSI Família",
      "Plano CASSI Vida",
      "Quero contratar",
      "Plano de Associados",
    ],
  },
  {
    title: "Já tenho um plano CASSI",
    links: ["Cobertura do meu plano", "Cronogramas", "Telemedicina"],
  },
  {
    title: "CliniCASSI",
    links: ["Atenção Primária Saúde", "Localize sua CliniCASSI"],
  },
];

export function Footer() {
  const handleClickSocialIcon = (
    name: "facebook" | "linkedin" | "instagram"
  ) => {
    if (typeof window !== "undefined") {
      window.open(SOCIAL_LINK_ENUM[name], "_blank");
    }
  };

  return (
    <Container>
      <Content>
        <ContentBody>
          <Col $col={6} $jc="flex-start">
            <IconFooter src={CASSI_LOGO_LIGHT.src} alt="Logo CASSI" />
          </Col>
          <Col $col={6} $jc="flex-end">
            <DivIcon>
              <Icon
                alt="facebook"
                type="secondary"
                iconName="facebook"
                onClick={() => handleClickSocialIcon("facebook")}
              />
            </DivIcon>
            <DivIcon>
              <Icon
                alt="linkedin"
                type="secondary"
                iconName="linkedin"
                onClick={() => handleClickSocialIcon("linkedin")}
              />
            </DivIcon>
            <DivIcon>
              <Icon
                alt="instagram"
                type="secondary"
                iconName="instagram"
                onClick={() => handleClickSocialIcon("instagram")}
              />
            </DivIcon>
          </Col>
        </ContentBody>

        <Divider colorSchema="secondary" />

        <ContentFooter>
          {navLinks.map((section) => (
            <Body key={section.title}>
              <FooterTitle>{section.title}</FooterTitle>
              <VStack>
                {section.links.map((link) => (
                  <Link href="#" key={link} passHref>
                    {link}
                  </Link>
                ))}
              </VStack>
            </Body>
          ))}
        </ContentFooter>
      </Content>
    </Container>
  );
}
