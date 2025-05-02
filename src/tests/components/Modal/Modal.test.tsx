import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "@/components/Modal";
import { RootState } from "@/redux/store";

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

const store = configureStore({
  reducer: {
    cassiState: (state = mockState.cassiState) => state,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

describe("Modal", () => {
  it("fires onClick when data is valid", () => {
    const onClickMock = jest.fn();

    render(
      <Provider store={store}>
        <Modal isOpen={true} onClick={onClickMock} onClose={jest.fn()} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Confirmar dados"));

    expect(onClickMock).toHaveBeenCalled();
  });

  it("does not fire onClick when data is invalid", () => {
    const onClickMock = jest.fn();

    render(
      <Provider store={store}>
        <Modal isOpen={true} onClick={onClickMock} onClose={jest.fn()} />
      </Provider>
    );

    fireEvent.change(screen.getByTestId("E-mail"), {
      target: { value: "invalido" },
    });

    fireEvent.change(screen.getByTestId("Celular"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Confirmar dados"));

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
