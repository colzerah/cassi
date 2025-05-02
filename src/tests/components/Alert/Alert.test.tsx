import { render, screen } from "@testing-library/react";
import { Alert } from "@/components/Alert";

describe("Alert", () => {
  it("should render the alert with type success and provided text", () => {
    render(<Alert type="success">Sucesso ao enviar</Alert>);

    expect(screen.getByText(/sucesso ao enviar/i)).toBeInTheDocument();
    expect(screen.getByText(/obrigado pela resposta/i)).toBeInTheDocument();
    const icon = screen.getAllByRole("img")[0];
    expect(icon).toHaveAttribute("src", expect.stringContaining("/img.jpg"));
  });

  it("should render the alert with type error and provided text", () => {
    render(<Alert type="error">Erro ao enviar</Alert>);

    expect(screen.getByText(/erro ao enviar/i)).toBeInTheDocument();
    const icon = screen.getAllByRole("img")[0];
    expect(icon).toHaveAttribute("src", expect.stringContaining("/img.jpg"));
  });
});
