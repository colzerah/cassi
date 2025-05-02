import { render, screen } from "@testing-library/react";
import Layout from "@/components/Layout";

jest.mock("@/components/NavBar", () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>,
}));

jest.mock("@/components/Footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

describe("Layout", () => {
  it("should render the Navbar, Footer and main content", () => {
    render(
      <Layout>
        <div data-testid="main-content">Conteúdo principal</div>
      </Layout>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("main-content")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
