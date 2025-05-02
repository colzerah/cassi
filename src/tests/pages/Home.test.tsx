import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ChakraProvider } from "@chakra-ui/react";

const mockStore = configureStore([]);

describe("Home", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  beforeEach(() => {
    store = mockStore({
      cassiState: {
        user: { name: "Dyego Lima" },
        confirmOpening: false,
        recognizeNIP: false,
        recognizeInterlocutor: null,
      },
    });

    store.dispatch = jest.fn();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </Provider>
    );

  it("deve exibir o nome do usuário", () => {
    renderComponent();
    expect(screen.getByText("Olá, Dyego Lima")).toBeInTheDocument();
  });

  it("deve exibir os botões 'Sim, foi aberto por mim' e 'Não reconheço'", () => {
    renderComponent();
    expect(screen.getByText("Sim, foi aberto por mim")).toBeInTheDocument();
    expect(screen.getByText("Não reconheço")).toBeInTheDocument();
  });

  it("deve despachar ação ao clicar em 'Não reconheço'", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Não reconheço"));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it("deve despachar ação ao clicar em 'Sim, foi aberto por mim'", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Sim, foi aberto por mim"));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it("deve exibir alerta de sucesso se confirmOpening for true", () => {
    store = mockStore({
      cassiState: {
        user: { name: "Dyego Lima" },
        confirmOpening: true,
        recognizeNIP: false,
        recognizeInterlocutor: null,
      },
    });

    render(
      <Provider store={store}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText(/Abertura da NIP /i)).toBeInTheDocument();
  });

  it("deve abrir o modal ao clicar em 'Sim' quando recognizeNIP for true", () => {
    store = mockStore({
      cassiState: {
        user: { name: "Dyego Lima" },
        confirmOpening: false,
        recognizeNIP: true,
        recognizeInterlocutor: null,
      },
    });

    render(
      <Provider store={store}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText("Sim"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("deve despachar a ação de setRecognizeInterlocutor ao confirmar no modal", async () => {
    store = mockStore({
      cassiState: {
        user: {
          name: "Dyego Lima",
          email: "dyegotavares@gmail.com",
          phone: 61981122323,
        },
        confirmOpening: false,
        recognizeNIP: true,
        recognizeInterlocutor: null,
      },
    });

    // Mock do dispatch
    store.dispatch = jest.fn();

    // Renderiza o componente
    render(
      <Provider store={store}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText("Sim"));

    await waitFor(() => screen.getByTestId("modal"));

    const modal = screen.queryByTestId("modal");
    expect(modal).not.toBeNull();

    const confirmButton = screen.getByText("Confirmar dados");
    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(confirmButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "cassiState/setRecognizeInterlocutor",
        payload: true,
      })
    );
  });

  it("deve abrir o modal com valor false ao clicar em 'Não' quando recognizeNIP é true", async () => {
    const store = mockStore({
      cassiState: {
        user: { name: "Dyego Lima" },
        confirmOpening: false,
        recognizeNIP: true,
        recognizeInterlocutor: null,
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </Provider>
    );

    const button = screen.getByRole("button", { name: /não/i });
    fireEvent.click(button);

    await waitFor(() => {
      const modal = screen.queryByTestId("modal");
      expect(modal).toBeInTheDocument();
    });

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
