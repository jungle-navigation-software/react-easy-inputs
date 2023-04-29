import { Meta, StoryObj } from "@storybook/react";
import { EasyValidationMessage } from "./EasyValidationMessage";

const meta: Meta<typeof EasyValidationMessage> = {
  title: "Base/EasyValidationMessage",
  component: EasyValidationMessage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: "The input is required",
    isDirty: true,
    isValid: false,
  },
};

export const Secondary: Story = {};
