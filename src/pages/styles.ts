import styled from "styled-components";

export const Container = styled.div``;

export const Img = styled.img`
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 30px;
`;

interface ColProps {
  $col?: number;
  $ml?: number;
  $mr?: number;
  $jc?: string;
  $m?: number;
  $mb?: number;
  $mt?: number;
  $pl?: number;
  $pt?: number;
}

export const Col = styled.div<ColProps>`
  flex: ${({ $col }) => $col};
  align-items: center;
  justify-content: ${({ $jc }) => ($jc ? $jc : "center")};
  margin: ${({ $m }) => ($m ? `${$m}px` : 0)};
  margin-left: ${({ $ml }) => ($ml ? `${$ml}px` : 0)};
  padding-left: ${({ $pl }) => ($pl ? `${$pl}px` : 0)};
  padding-top: ${({ $pt }) => ($pt ? `${$pt}px` : 0)};
  margin-right: ${({ $mr }) => ($mr ? `${$mr}px` : 0)};
  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : 0)};
  margin-top: ${({ $mt }) => ($mt ? `${$mt}px` : 0)};
`;

export const Row = styled.div<ColProps>`
  display: flex;
  flex: ${({ $col }) => $col};
  flex-direction: row;
`;

export const LabelDiv = styled.div`
  width: 400px;
`;

export const Box = styled.div``;
