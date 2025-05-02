import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "radio",
      options: ["solid", "outline", "link"],
    },
    title: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    title: "Botão Solid",
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    title: "Botão Outline",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    title: "Botão Link",
    variant: "link",
  },
};
