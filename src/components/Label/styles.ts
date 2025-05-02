import styled from "styled-components";

interface TextProps {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  $mt?: number;
  $mr?: number;
  $ml?: number;
  $mb?: number;
}

interface HProps {
  $mt?: number;
  $mr?: number;
  $ml?: number;
  $mb?: number;
}

export const Container = styled.div``;

export const H1 = styled.h1<HProps>`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: ${({ color }) => color};
  margin-top: ${({ $mt }) => `${$mt}px`};
  margin-left: ${({ $ml }) => `${$ml}px`};
  margin-right: ${({ $mr }) => `${$mr}px`};
  margin-bottom: ${({ $mb }) => `${$mb}px`};
`;

export const H2 = styled.h2<HProps>`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ color }) => color};
  margin-top: ${({ $mt }) => `${$mt}px`};
  margin-left: ${({ $ml }) => `${$ml}px`};
  margin-right: ${({ $mr }) => `${$mr}px`};
  margin-bottom: ${({ $mb }) => `${$mb}px`};
`;

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize}px` || "14px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ lineHeight }) => `${lineHeight}px` || "22px"};
  color: ${({ color }) => color};
  margin-top: ${({ $mt }) => `${$mt}px`};
  margin-left: ${({ $ml }) => `${$ml}px`};
  margin-right: ${({ $mr }) => `${$mr}px`};
  margin-bottom: ${({ $mb }) => `${$mb}px`};
`;
