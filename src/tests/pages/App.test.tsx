import { render, screen } from "@testing-library/react";
import App from "@/pages/_app";
import { AppProps } from "next/app";

function MockComponent() {
  return <div data-testid="mock-component">Hello from page</div>;
}

const mockProps: AppProps = {
  Component: MockComponent,
  pageProps: {},
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  router: {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true,
    basePath: "",
    isLocaleDomain: false,
  },
};

describe("App", () => {
  it("renderiza corretamente com os provedores", () => {
    render(<App {...mockProps} />);
    expect(screen.getByTestId("mock-component")).toBeInTheDocument();
  });
});
