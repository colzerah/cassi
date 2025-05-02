import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Container,
  Header,
  Body,
  Logo,
  IconNav,
  Col,
  DivIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  NavItem,
} from "./styles";

import { Divider } from "@/components/Divider";

import { CASSI_LOGO, STETHOSCOPE } from "@/assets";
import { Input } from "../Input";
import { Label } from "../Label";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { SOCIAL_LINK_ENUM } from "@/utils/Enums";

export function Navbar() {
  const handleClickSocialIcon = (
    name: "facebook" | "linkedin" | "instagram"
  ) => {
    if (typeof window !== "undefined") {
      window.open(SOCIAL_LINK_ENUM[name], "_blank");
    }
  };

  return (
    <Container>
      <Header>
        <Col $col={2} $jc="flex-start">
          <Logo src={CASSI_LOGO.src} />
        </Col>

        <Col $col={2}>
          <Input searchIput placeholder="Faça sua busca aqui" />
        </Col>
        <Col $col={4}>
          <Col>
            <Label
              ml={0}
              mt={0}
              mb={0}
              mr={0}
              text="Siga a CASSI nas redes sociais:"
              type="text"
              colorScheme="secondary"
              fontSize={14}
            />
          </Col>
          <Col>
            <DivIcon>
              <Icon
                alt="facebook"
                type="primary"
                iconName="facebook"
                onClick={() => handleClickSocialIcon("facebook")}
              />
            </DivIcon>
            <DivIcon>
              <Icon
                alt="linkedin"
                type="primary"
                iconName="linkedin"
                onClick={() => handleClickSocialIcon("linkedin")}
              />
            </DivIcon>
            <DivIcon>
              <Icon
                alt="instagram"
                type="primary"
                iconName="instagram"
                onClick={() => handleClickSocialIcon("instagram")}
              />
            </DivIcon>
          </Col>
        </Col>
        <Col $col={2}>
          <IconNav src={STETHOSCOPE.src} />
          <Label type="text" text="Lorem Ipsum" mb={0} />
        </Col>
        <Col $col={2} $jc="flex-end">
          <Button title="Fazer login" onClick={() => {}} />
        </Col>
      </Header>
      <Divider />

      <Body>
        <Col $mr={1} $ml={1}>
          <NavItem>Home</NavItem>
        </Col>

        <Col $mr={8} $ml={8}>
          <Menu>
            <MenuButton>
              Conheça a CASSI <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Lorem ipsum</MenuItem>
              <MenuItem>Lorem ipsum</MenuItem>
            </MenuList>
          </Menu>
        </Col>

        <Col $mr={8} $ml={8}>
          <Menu>
            <MenuButton>
              Nossos planos <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Lorem ipsum</MenuItem>
              <MenuItem>Lorem ipsum</MenuItem>
            </MenuList>
          </Menu>
        </Col>

        <Col $mr={8} $ml={8}>
          <Menu>
            <MenuButton>
              Já tenho um plano CASSI <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Lorem ipsum</MenuItem>
              <MenuItem>Lorem ipsum</MenuItem>
            </MenuList>
          </Menu>
        </Col>

        <Col $mr={8} $ml={8}>
          <Menu>
            <MenuButton>
              CliniCASSI <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Lorem ipsum</MenuItem>
              <MenuItem>Lorem ipsum</MenuItem>
            </MenuList>
          </Menu>
        </Col>

        <Col $mr={8} $ml={8}>
          <NavItem>Fale com a CASSI</NavItem>
        </Col>
      </Body>
    </Container>
  );
}
