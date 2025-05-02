import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";

import { Button } from "@/components/Button";

import {
  Container,
  ModalComponent,
  ModalOverlayComponent,
  ModalContentComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  ModalBodyComponent,
  ContentModalBody,
  ContainerModalBody,
  ContentModalFooter,
} from "./styles";
import { Label } from "../Label";
import { Input } from "../Input";
import { RootState } from "@/redux/store";
import { cassiActions } from "@/redux/cassi/slice";
import { isValidEmail, isValidPhone } from "@/utils/Validate";

interface ModalProps {
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  name?: string;
  email?: string;
}

export function Modal({ isOpen, onClick, onClose }: ModalProps) {
  const cassiState = useAppSelector((state: RootState) => state.cassiState);
  const dispatch = useAppDispatch();

  const [phone, setPhone] = React.useState(`${cassiState.user.phone}`);
  const [email, setEmail] = React.useState(cassiState.user.email);
  const [isInvalidInput, setIsInvalidInput] = React.useState({
    phone: false,
    email: false,
  });

  const handleValidadeInputs = () => {
    setIsInvalidInput({
      phone: !isValidPhone(`${phone}`),
      email: !isValidEmail(email),
    });

    if (!isValidPhone(`${phone}`) || !isValidEmail(email)) {
      return;
    }

    dispatch(
      cassiActions.setUpdateUser({ phone: Number(phone), email: email })
    );
    onClick();
  };

  return (
    <Container data-testid="modal">
      <ModalComponent isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlayComponent />
        <ModalContentComponent>
          <ModalHeaderComponent>
            <Label
              text="Verificar dados de contato"
              colorScheme="secondary"
              type="h2"
            />
            <Label
              text="Considerando que você não reconheceu a Notificação de Intermediação
            Preliminar (NIP), a CASSI entrará em contato para compreender melhor
            a situação. Por favor, verifique as informações abaixo e, se
            necessário, atualize-as:"
              colorScheme="secondary"
              fontSize={16}
              type="text"
            />
          </ModalHeaderComponent>
          <ModalBodyComponent>
            <Input label="Beneficiário" disabled value={cassiState.user.name} />
            <ContainerModalBody>
              <ContentModalBody>
                <Input
                  label="E-mail"
                  value={email}
                  onChange={setEmail}
                  isInvalid={isInvalidInput.email}
                />
              </ContentModalBody>
              <ContentModalBody>
                <Input
                  label="Celular"
                  value={`${phone}`}
                  onChange={setPhone}
                  mask="phone"
                  isInvalid={isInvalidInput.phone}
                />
              </ContentModalBody>
            </ContainerModalBody>
          </ModalBodyComponent>

          <ModalFooterComponent>
            <ContentModalFooter>
              <Button onClick={onClose} variant="outline" title="Voltar" />
            </ContentModalFooter>
            <ContentModalFooter data-testid="modal-footer">
              <Button
                title={"Confirmar dados"}
                onClick={handleValidadeInputs}
              />
            </ContentModalFooter>
          </ModalFooterComponent>
        </ModalContentComponent>
      </ModalComponent>
    </Container>
  );
}
