import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    label: {
      control: "text",
    },
    mask: {
      control: "radio",
      options: ["phone"],
    },
    disabled: {
      control: "boolean",
    },
    isInvalid: {
      control: "boolean",
    },
    searchIput: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Texto do Label",
    placeholder: "Digite algo...",
    value: "",
  },
};

export const WithPhoneMask: Story = {
  args: {
    label: "Telefone",
    placeholder: "Digite seu telefone",
    mask: "phone",
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    label: "Input Desabilitado",
    placeholder: "Você não pode editar",
    disabled: true,
    value: "Texto de exemplo",
  },
};

export const SearchInput: Story = {
  args: {
    searchIput: true,
    placeholder: "Busque algo...",
    value: "",
  },
};
