import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@/components/Input";
import COLORS from "@/themes/colors.pallete";

const placeholderText = "Digite aqui...";

describe("Input", () => {
  it("should render the input field with the placeholder text", () => {
    render(<Input placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it("must format initial value with phone mask", () => {
    render(<Input mask="phone" value="11999998888" />);

    const input = screen.getByDisplayValue("(11) 99999-8888");
    expect(input).toBeInTheDocument();
  });

  it("must apply phone mask when typing", () => {
    const handleChange = jest.fn();
    render(
      <Input
        mask="phone"
        onChange={handleChange}
        placeholder={placeholderText}
      />
    );

    const input = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "11999998888" } });

    expect(input.value).toBe("(11) 99999-8888");
    expect(handleChange).toHaveBeenCalledWith("11999998888");
  });

  it("must limit the number to a maximum of 11 digits before applying the mask", () => {
    const handleChange = jest.fn();
    render(
      <Input
        mask="phone"
        onChange={handleChange}
        placeholder={placeholderText}
      />
    );

    const input = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "11999998888888" } });

    expect(input.value).toBe("(11) 99999-8888");
    expect(handleChange).toHaveBeenCalledWith("11999998888");
  });

  it("must apply the phone mask correctly", () => {
    const phoneInput = "11987654321";

    render(<Input placeholder={placeholderText} mask="phone" />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(inputElement, { target: { value: phoneInput } });

    expect(inputElement).toHaveValue("(11) 98765-4321");
  });

  it("must call onChange when typing in the input", () => {
    const handleChange = jest.fn();
    const value = "1234567890";

    render(
      <Input
        onChange={handleChange}
        value={value}
        placeholder={placeholderText}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(inputElement, { target: { value: "9876543210" } });

    expect(handleChange).toHaveBeenCalledWith("9876543210"); // Verifica o valor sem a máscara
  });

  it("deve renderizar o campo de busca com ícone de lupa", () => {
    render(<Input searchIput placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();

    const iconElement = screen.getByTestId("search-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("deve renderizar o label corretamente", () => {
    const labelText = "Nome";

    render(<Input label={labelText} />);

    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  it("deve desabilitar o campo de input quando a prop 'disabled' for true", () => {
    render(<Input disabled placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeDisabled();
  });

  it("deve exibir o campo de input com a classe de erro quando 'isInvalid' for true", () => {
    render(<Input isInvalid placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toHaveStyle(`border-color: ${COLORS.red[200]}`);
  });
});
