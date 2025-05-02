import { render, screen } from "@testing-library/react";

import { Button } from "@/components/Button";

describe("Button", () => {
  it("deve renderizar o botão com o título fornecido", () => {
    render(<Button title="Clique aqui" onClick={() => {}} />);

    const ButtonScreen = screen.getByRole("button", { name: /clique aqui/i });
    expect(ButtonScreen).toBeInTheDocument();
  });
});
