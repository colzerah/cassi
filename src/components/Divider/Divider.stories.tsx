import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@/components/Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    colorSchema: {
      control: "radio",
      options: ["primary", "secondary"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
  args: {
    colorSchema: "primary",
  },
};

export const Secondary: Story = {
  args: {
    colorSchema: "secondary",
  },
};

export const Default: Story = {
  args: {
    colorSchema: undefined,
  },
};
