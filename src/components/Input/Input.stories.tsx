import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/Input"; // Ajuste o caminho se necessário

const meta: Meta<typeof Input> = {
  title: "Components/Input", // Título na árvore do Storybook
  component: Input, // Componente que estamos documentando
  tags: ["autodocs"], // Tags para automatizar a documentação
  argTypes: {
    onChange: { action: "changed" }, // Ação de mudança no valor do input
    placeholder: {
      control: "text", // Permite editar o texto do placeholder
    },
    value: {
      control: "text", // Permite editar o valor do input
    },
    label: {
      control: "text", // Permite editar o texto do label
    },
    mask: {
      control: "radio", // Controle para selecionar o tipo de máscara
      options: ["phone"], // Máscaras disponíveis
    },
    disabled: {
      control: "boolean", // Controle para desabilitar o input
    },
    isInvalid: {
      control: "boolean", // Controle para indicar se o input é inválido
    },
    searchIput: {
      control: "boolean", // Controle para alternar entre input normal e de busca
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Texto do Label", // Texto do label
    placeholder: "Digite algo...", // Texto do placeholder
    value: "", // Valor inicial do input
  },
};

export const WithPhoneMask: Story = {
  args: {
    label: "Telefone",
    placeholder: "Digite seu telefone",
    mask: "phone", // Máscara de telefone
    value: "", // Valor inicial
  },
};

export const Disabled: Story = {
  args: {
    label: "Input Desabilitado",
    placeholder: "Você não pode editar",
    disabled: true, // Input desabilitado
    value: "Texto de exemplo",
  },
};

export const SearchInput: Story = {
  args: {
    searchIput: true, // Ativa o estilo de input de busca
    placeholder: "Busque algo...",
    value: "",
  },
};
