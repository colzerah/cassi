import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/NavBar";
import { SOCIAL_LINK_ENUM } from "@/utils/Enums";

// Mock do window.open
const openMock = jest.fn();
window.open = openMock;

// Mocks dos assets usados
jest.mock("@/assets", () => ({
  CASSI_LOGO: { src: "CASSI-LOGO.png" },
  STETHOSCOPE: { src: "STETHOSCOPE.png" },
  SEARCH_LENS: { src: "SEARCH_LENS.png" },
  PRIMARY_FACEBOOK: "PRIMARY_FACEBOOK.png",
  PRIMARY_INSTAGRAM: "PRIMARY_INSTAGRAM.png",
  PRIMARY_LINKEDIN: "PRIMARY_LINKEDIN.png",
}));

describe("Navbar", () => {
  beforeEach(() => {
    openMock.mockClear();
  });

  it("Nav deve abrir a URL correta ao clicar nos ícones das redes sociais", () => {
    render(<Navbar />);

    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    const facebookIcon = screen.getByRole("img", { name: /facebook/i });
    expect(facebookIcon).toBeInTheDocument();
    fireEvent.click(facebookIcon);
    expect(openSpy).toHaveBeenCalledWith(SOCIAL_LINK_ENUM.facebook, "_blank");

    const linkedinIcon = screen.getByRole("img", { name: /linkedin/i });
    expect(linkedinIcon).toBeInTheDocument();
    fireEvent.click(linkedinIcon);
    expect(openSpy).toHaveBeenCalledWith(SOCIAL_LINK_ENUM.linkedin, "_blank");

    const instagramIcon = screen.getByRole("img", { name: /instagram/i });
    expect(instagramIcon).toBeInTheDocument();
    fireEvent.click(instagramIcon);
    expect(openSpy).toHaveBeenCalledWith(SOCIAL_LINK_ENUM.instagram, "_blank");

    openSpy.mockRestore();
  });
});
