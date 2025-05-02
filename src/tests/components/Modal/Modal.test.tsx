import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "@/components/Modal";
import { RootState } from "@/redux/store";

// Estado falso da store
const mockState: RootState = {
  cassiState: {
    user: {
      name: "João da Silva",
      email: "joao@email.com",
      phone: 11987654321,
    },
    confirmOpening: false,
    recognizeNIP: false,
    recognizeInterlocutor: null,
  },
};

// Configuração da store com o getDefaultMiddleware
const store = configureStore({
  reducer: {
    cassiState: (state = mockState.cassiState) => state, // Mock de reducer
  },
  // Não é necessário adicionar o redux-thunk explicitamente, pois ele já vem com o @reduxjs/toolkit
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

describe("Modal", () => {
  // it("renderiza corretamente com os dados do usuário", () => {
  //   render(
  //     <Provider store={store}>
  //       <Modal isOpen={true} onClick={jest.fn()} onClose={jest.fn()} />
  //     </Provider>
  //   );

  //   // Verifica se os campos estão preenchidos corretamente
  //   expect(screen.getByDisplayValue("João da Silva")).toBeInTheDocument();
  //   expect(screen.getByLabelText("E-mail")).toHaveValue("joao@email.com");
  //   expect(screen.getByLabelText("Celular")).toHaveValue("(11) 98765-4321");
  // });

  // it("exibe erro ao tentar confirmar com e-mail e celular inválidos", () => {
  //   const onClickMock = jest.fn();

  //   render(
  //     <Provider store={store}>
  //       <Modal isOpen={true} onClick={onClickMock} onClose={jest.fn()} />
  //     </Provider>
  //   );

  //   // Limpa os inputs
  //   fireEvent.change(screen.getByLabelText("E-mail"), {
  //     target: { value: "invalido" },
  //   });

  //   fireEvent.change(screen.getByLabelText("Celular"), {
  //     target: { value: "123" },
  //   });

  //   fireEvent.click(screen.getByText("Confirmar dados"));

  //   expect(onClickMock).not.toHaveBeenCalled(); // não deve disparar o callback
  // });

  it("dispara onClick quando dados são válidos", () => {
    const onClickMock = jest.fn();

    render(
      <Provider store={store}>
        <Modal isOpen={true} onClick={onClickMock} onClose={jest.fn()} />
      </Provider>
    );

    // Pressiona o botão de confirmação com dados válidos já preenchidos
    fireEvent.click(screen.getByText("Confirmar dados"));

    expect(onClickMock).toHaveBeenCalled();
  });

  it("não dispara onClick quando dados são inválidos", () => {
    const onClickMock = jest.fn();

    render(
      <Provider store={store}>
        <Modal isOpen={true} onClick={onClickMock} onClose={jest.fn()} />
      </Provider>
    );

    // Pegando os inputs pelo testId
    fireEvent.change(screen.getByTestId("E-mail"), {
      target: { value: "invalido" },
    });

    fireEvent.change(screen.getByTestId("Celular"), {
      target: { value: "123" },
    });

    // Garantindo que o 'onClick' não será chamado
    fireEvent.click(screen.getByText("Confirmar dados"));

    // Verifica se a função não foi chamada
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
