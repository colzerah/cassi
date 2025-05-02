import { render, screen } from "@testing-library/react";

import { Button } from "@/components/Button";

describe("Button", () => {
  it("should render the button with the given title", () => {
    render(<Button title="Clique aqui" onClick={() => {}} />);

    const ButtonScreen = screen.getByRole("button", { name: /clique aqui/i });
    expect(ButtonScreen).toBeInTheDocument();
  });
});
