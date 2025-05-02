import styled from "styled-components";
import { VStack as VStackChakra } from "@chakra-ui/react";
import NextLink from "next/link";
import COLORS from "@/themes/colors.pallete";

export const Container = styled.div``;

export const Content = styled.div`
  background: ${COLORS.primary[500]};
  height: 375px;
  flex-direction: column;
  padding-left: 80px;
  padding-right: 80px;
`;

export const ContentBody = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 35px;
  align-items: center;
`;

export const IconFooter = styled.img``;

export const ContentFooter = styled.div`
  display: flex;
  padding-top: 35px;
  justify-content: space-between;
`;

export const Body = styled.div``;

export const VStack = styled(VStackChakra)`
  color: ${COLORS.white[100]};
  align-items: flex-start !important;
`;

interface ColProps {
  $col?: number;
  $jc?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({ $col }) => $col};
  justify-content: ${({ $jc }) => ($jc ? $jc : "center")};
`;

export const DivIcon = styled.div`
  margin-left: 24px;
`;

export const FooterTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 16px;
  color: ${COLORS.white[100]};
  text-decoration: underline;
`;

export const Link = styled(NextLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
