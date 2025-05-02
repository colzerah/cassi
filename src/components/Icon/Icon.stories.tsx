import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    iconName: {
      control: "radio",
      options: ["facebook", "linkedin", "instagram"],
    },
    onClick: { action: "clicked" },
    alt: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const FacebookPrimary: Story = {
  args: {
    type: "primary", // Tipo do ícone configurado como 'primary'
    iconName: "facebook", // Nome do ícone configurado como 'facebook'
    alt: "Facebook Icon", // Texto do atributo alt
  },
};

export const LinkedInSecondary: Story = {
  args: {
    type: "secondary",
    iconName: "linkedin",
    alt: "LinkedIn Icon",
  },
};

export const InstagramPrimary: Story = {
  args: {
    type: "primary",
    iconName: "instagram",
    alt: "Instagram Icon",
  },
};
