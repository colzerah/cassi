import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("deve renderizar os ícones das redes sociais", () => {
    render(<Footer />);
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBeGreaterThanOrEqual(4);
  });

  it("deve renderizar todos os títulos das seções", () => {
    const sections = [
      "Home",
      "Conheça a CASSI",
      "Nossos Planos",
      "Já tenho um plano CASSI",
      "CliniCASSI",
    ];

    render(<Footer />);

    sections.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument(); // Verifica a presença de cada título
    });
  });

  it("deve renderizar alguns links das seções", () => {
    const links = [
      "Institucional",
      "Plano CASSI Família",
      "Telemedicina",
      "Localize sua CliniCASSI",
    ];

    render(<Footer />);

    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument(); // Verifica a presença de alguns links
    });
  });

  it("deve abrir a URL correta ao clicar nos ícones das redes sociais", () => {
    render(<Footer />);

    // Mock de window.open para garantir que a URL é aberta em uma nova aba
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    // Testando o clique no ícone do Facebook
    const facebookIcon = screen.getByRole("img", { name: /facebook/i });
    expect(facebookIcon).toBeInTheDocument();
    facebookIcon.click();
    expect(openSpy).toHaveBeenCalledWith("https://www.facebook.com", "_blank");

    // Testando o clique no ícone do LinkedIn
    const linkedinIcon = screen.getByRole("img", { name: /linkedin/i });
    expect(linkedinIcon).toBeInTheDocument();
    linkedinIcon.click();
    expect(openSpy).toHaveBeenCalledWith("https://www.linkedin.com", "_blank");

    // Testando o clique no ícone do Instagram
    const instagramIcon = screen.getByRole("img", { name: /instagram/i });
    expect(instagramIcon).toBeInTheDocument();
    instagramIcon.click();
    expect(openSpy).toHaveBeenCalledWith("https://www.instagram.com", "_blank");

    // Restaurando o comportamento original do window.open após o teste
    openSpy.mockRestore();
  });
});
