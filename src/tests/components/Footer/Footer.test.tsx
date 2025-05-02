import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("should render social media icons", () => {
    render(<Footer />);

    const icons = screen.getAllByRole("img");
    expect(icons.length).toBeGreaterThanOrEqual(4);
  });

  it("should render all section titles", () => {
    const sections = [
      "Home",
      "Conheça a CASSI",
      "Nossos Planos",
      "Já tenho um plano CASSI",
      "CliniCASSI",
    ];

    render(<Footer />);

    sections.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("should render some section links", () => {
    const links = [
      "Institucional",
      "Plano CASSI Família",
      "Telemedicina",
      "Localize sua CliniCASSI",
    ];

    render(<Footer />);

    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it("should open the correct URL when clicking on the social media icons", () => {
    render(<Footer />);

    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    const facebookIcon = screen.getByRole("img", { name: /facebook/i });
    expect(facebookIcon).toBeInTheDocument();
    facebookIcon.click();
    expect(openSpy).toHaveBeenCalledWith("https://www.facebook.com", "_blank");

    const linkedinIcon = screen.getByRole("img", { name: /linkedin/i });
    expect(linkedinIcon).toBeInTheDocument();
    linkedinIcon.click();
    expect(openSpy).toHaveBeenCalledWith("https://www.linkedin.com", "_blank");

    const instagramIcon = screen.getByRole("img", { name: /instagram/i });
    expect(instagramIcon).toBeInTheDocument();
    instagramIcon.click();
    expect(openSpy).toHaveBeenCalledWith("https://www.instagram.com", "_blank");

    openSpy.mockRestore();
  });
});
