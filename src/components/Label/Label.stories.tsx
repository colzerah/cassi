import { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/Label"; // Ajuste o caminho se necessário

const meta: Meta<typeof Label> = {
  title: "Components/Label", // Título na árvore do Storybook
  component: Label, // Componente que estamos documentando
  tags: ["autodocs"], // Tags para automatizar a documentação
  argTypes: {
    text: { control: "text" }, // Controle para editar o texto
    type: {
      control: "radio", // Controle para selecionar o tipo do Label (h1, h2, text)
      options: ["h1", "h2", "text"],
    },
    colorScheme: {
      control: "radio", // Controle para selecionar a cor do texto
      options: ["primary", "secondary", "tertiary", "white"],
    },
    fontSize: { control: "number" }, // Controle para definir o tamanho da fonte
    fontWeight: { control: "number" }, // Controle para definir o peso da fonte
    lineHeight: { control: "number" }, // Controle para definir a altura da linha
    mt: { control: "number" }, // Controle para definir a margem superior
    ml: { control: "number" }, // Controle para definir a margem esquerda
    mb: { control: "number" }, // Controle para definir a margem inferior
    mr: { control: "number" }, // Controle para definir a margem direita
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Texto padrão do Label", // Texto do Label
    type: "text", // Tipo de Label
    colorScheme: "primary", // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: 400, // Peso da fonte
    lineHeight: 24, // Altura da linha
  },
};

export const H1Label: Story = {
  args: {
    text: "Título H1", // Texto do Label
    type: "h1", // Tipo de Label
    colorScheme: "primary", // Cor do texto
  },
};

export const H2Label: Story = {
  args: {
    text: "Título H2", // Texto do Label
    type: "h2", // Tipo de Label
    colorScheme: "secondary", // Cor do texto
  },
};

export const CustomTextLabel: Story = {
  args: {
    text: "Texto Customizado", // Texto do Label
    type: "text", // Tipo de Label
    fontSize: 14, // Tamanho da fonte
    fontWeight: 700, // Peso da fonte
    lineHeight: 20, // Altura da linha
    colorScheme: "tertiary", // Cor do texto
  },
};

export const WhiteLabel: Story = {
  args: {
    text: "Texto Branco", // Texto do Label
    type: "text", // Tipo de Label
    colorScheme: "white", // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: 500, // Peso da fonte
  },
};
