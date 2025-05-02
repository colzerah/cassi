import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

export const Container = styled.div``;

export const ModalComponent = styled(Modal)``;

export const ModalOverlayComponent = styled(ModalOverlay)``;

export const ModalContentComponent = styled(ModalContent)``;

export const ModalHeaderComponent = styled(ModalHeader)``;

export const ModalFooterComponent = styled(ModalFooter)`
  justify-content: center !important;
  margin-top: 18px !important;
`;

export const ContentModalFooter = styled.div`
  margin-right: 7px;
  margin-left: 7px;
`;

export const ModalBodyComponent = styled(ModalBody)``;

export const ContainerModalBody = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ContentModalBody = styled.div`
  width: 49%;
`;
