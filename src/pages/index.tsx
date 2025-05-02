import React from "react";

import { Container, Img, Content, Col, Row, LabelDiv, Box } from "./styles";
import { Label } from "@/components/Label";
import { Divider } from "@/components/Divider";
import { Button } from "@/components/Button";
import { CASSI_TIMELINE } from "@/assets";
import { Alert } from "@/components/Alert";
import { Modal } from "@/components/Modal";
import { useDisclosure } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { cassiActions } from "@/redux/cassi/slice";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cassiState = useAppSelector((state: RootState) => state.cassiState);
  const dispatch = useAppDispatch();

  const [recognizes, setRecognizes] = React.useState<boolean | undefined>();

  const handleConfirmOpening = () => {
    dispatch(cassiActions.setConfirmOpening(true));
  };

  const handleNotConfirmOpening = () => {
    dispatch(cassiActions.setRecognizeNIP(true));
  };

  const handleOpenModal = (param: boolean) => {
    setRecognizes(param);
    onOpen();
  };

  const handleRecognizeInterlocutor = () => {
    onClose();
    dispatch(cassiActions.setRecognizeInterlocutor(recognizes as boolean));
  };

  return (
    <Container>
      <Content>
        <Col $col={9}>
          <Col $mb={40}>
            <Label text={`Olá, ${cassiState.user.name}`} type="h1" />
            <Label
              type="text"
              colorScheme="tertiary"
              text="Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome."
            />
          </Col>

          <Col $mb={20}>
            <Label type="h2" text="Dados do notificação" mb={4} />
            <Divider />
          </Col>

          <Col>
            <Row>
              <Col $col={6}>
                <Label type="h2" text="Beneficiário" colorScheme="tertiary" />
                <Label
                  type="text"
                  text="Leandro Henrique"
                  colorScheme="tertiary"
                />
              </Col>

              <Col $col={6}>
                <Label type="h2" text="Interlocutor" colorScheme="tertiary" />
                <Label
                  type="text"
                  text="Leandro Henrique"
                  colorScheme="tertiary"
                />
              </Col>
            </Row>
          </Col>

          <Col $mb={30}>
            <Label type="h2" text="Data de abertura" colorScheme="tertiary" />
            <Label type="text" text="29/01/2022" colorScheme="tertiary" />
          </Col>

          <Col>
            {cassiState.confirmOpening && (
              <Alert type="success">
                Abertura da NIP <strong>RECONHECIDA</strong> pelo usuário.
              </Alert>
            )}

            {cassiState.recognizeInterlocutor === false && (
              <Alert type="error">
                Interlocutor <strong>NÃO RECONHECIDO</strong> e abertura da NIP
                <strong> NÃO RECONHECIDA</strong> pelo usuário.
              </Alert>
            )}

            {cassiState.recognizeInterlocutor === true && (
              <Alert type="error">
                Interlocutor <strong>RECONHECIDO</strong> e abertura da NIP{" "}
                <strong>NÃO RECONHECIDA</strong> pelo usuário.
              </Alert>
            )}

            {!cassiState.confirmOpening &&
              cassiState.recognizeInterlocutor === null && (
                <Box>
                  <Divider />
                  <Col $mt={10}>
                    <Label
                      type="h2"
                      text="Reconhece esta NIP?"
                      colorScheme="tertiary"
                    />
                    <Row>
                      <Col $mt={10}>
                        <Button
                          title={
                            cassiState.recognizeNIP ? "Não" : "Não reconheço"
                          }
                          onClick={() => {
                            if (cassiState.recognizeNIP) {
                              handleOpenModal(false);
                              return;
                            }
                            handleNotConfirmOpening();
                          }}
                          variant="outline"
                        />
                      </Col>
                      <Col $ml={10} $mt={10}>
                        <Button
                          title={
                            cassiState.recognizeNIP
                              ? "Sim"
                              : "Sim, foi aberto por mim"
                          }
                          onClick={() => {
                            if (cassiState.recognizeNIP) {
                              handleOpenModal(true);
                              return;
                            }
                            handleConfirmOpening();
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Box>
              )}
          </Col>
        </Col>
        <Col $col={3} $jc="flex-end" $pl={30}>
          <Label
            text="Por que é importante que você responda esse questionário?"
            type="h1"
          />
          <Img src={CASSI_TIMELINE.src} />
          <LabelDiv>
            <Label
              type="text"
              text="Na CASSI, buscamos aprimorar continuamente nossos serviços e métodos de atendimento. Nosso objetivo é acelerar o processo de análise das suas solicitações e torná-lo mais eficiente. Ao responder ao questionário, você nos ajuda a alcançar maior assertividade e rapidez no atendimento às suas necessidades."
              colorScheme="tertiary"
            />
          </LabelDiv>
        </Col>
      </Content>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleRecognizeInterlocutor}
      />
    </Container>
  );
}
