import { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    type: {
      control: "radio",
      options: ["h1", "h2", "text"],
    },
    colorScheme: {
      control: "radio",
      options: ["primary", "secondary", "tertiary", "white"],
    },
    fontSize: { control: "number" },
    fontWeight: { control: "number" },
    lineHeight: { control: "number" },
    mt: { control: "number" },
    ml: { control: "number" },
    mb: { control: "number" },
    mr: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Texto padrão do Label",
    type: "text",
    colorScheme: "primary",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  },
};

export const H1Label: Story = {
  args: {
    text: "Título H1",
    type: "h1",
    colorScheme: "primary",
  },
};

export const H2Label: Story = {
  args: {
    text: "Título H2",
    type: "h2",
    colorScheme: "secondary",
  },
};

export const CustomTextLabel: Story = {
  args: {
    text: "Texto Customizado",
    type: "text",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 20,
    colorScheme: "tertiary",
  },
};

export const WhiteLabel: Story = {
  args: {
    text: "Texto Branco",
    type: "text",
    colorScheme: "white",
    fontSize: 18,
    fontWeight: 500,
  },
};
