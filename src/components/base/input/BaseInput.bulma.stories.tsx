import { Meta, StoryObj } from "@storybook/react";
import { BaseInput } from "./BaseInput";
import TextInputWrapper from "./TextInputWrapper";
import "../../../styles/bulma.scss";
import NumberInputWrapper from "./NumberInputWrapper";
import DateInputWrapper from "./DateInputWrapper";

const meta: Meta<typeof BaseInput> = {
  title: "Bulma/Base/BaseInput",
  component: BaseInput,
  tags: ["autodocs"],
};

export default meta;

export const TextInput: StoryObj<typeof BaseInput> = {
  render: () => <TextInputWrapper type="text" />,
};

export const NumberInput: StoryObj<typeof BaseInput> = {
  render: () => <NumberInputWrapper />,
};

export const DateInput: StoryObj<typeof BaseInput> = {
  render: () => <DateInputWrapper />,
};

export const PasswordInput: StoryObj<typeof BaseInput> = {
  render: () => <TextInputWrapper type="password" />,
};
