import COLORS from "@/themes/colors.pallete";
import {
  Menu as MenuChakra,
  MenuButton as MenuButtonChakra,
  MenuList as MenuListChakra,
  MenuItem as MenuItemChakra,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 84px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const Logo = styled.img``;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  box-shadow: 0 2px 4px ${COLORS.black[100]};
`;

export const IconNav = styled.img`
  width: 22.83px;
  height: 30.37px;
  margin-right: 8px;
`;

interface ColProps {
  $col?: number;
  $ml?: number;
  $mr?: number;
  $jc?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex: ${({ $col }) => $col};
  align-items: center;
  justify-content: ${({ $jc }) => ($jc ? $jc : "center")};
  margin-left: ${({ $ml }) => ($ml ? `${$ml}px` : 0)};
  margin-right: ${({ $mr }) => ($mr ? `${$mr}px` : 0)};
`;

export const DivIcon = styled.div`
  margin-left: 24px;
`;

export const NavItem = styled(Text)`
  font-size: 14px !important;
  color: ${COLORS.gray[600]} !important;
  line-height: 22px !important;
  margin: 0 12px;
  white-space: nowrap;
  font-size: 14px !important;
  color: ${COLORS.gray[600]} !important;
  line-height: 22px !important;
  cursor: pointer;
`;

export const Menu = styled(MenuChakra)``;

export const MenuButton = styled(MenuButtonChakra)`
  font-size: 14px !important;
  color: ${COLORS.gray[600]} !important;
  line-height: 22px !important;
`;

export const MenuList = styled(MenuListChakra)`
  font-size: 14px !important;
  color: ${COLORS.gray[600]} !important;
  line-height: 22px !important;
`;

export const MenuItem = styled(MenuItemChakra)``;
