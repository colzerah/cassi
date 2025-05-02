import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["success", "error"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: "success",
    children: "Operação realizada com sucesso!",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    children: "Ocorreu um erro ao realizar a operação!",
  },
};
