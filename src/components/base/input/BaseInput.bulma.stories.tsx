import { Meta, StoryObj } from "@storybook/react";
import BaseInput from "./BaseInput";
import TextInputWrapper from "./TextInputWrapper";
import "../../../styles/bulma.scss";

const meta: Meta<typeof BaseInput> = {
  title: "Bulma/Base/Input",
  component: BaseInput,
  tags: ["autodocs"],
};

export default meta;

export const TextInput: StoryObj<typeof BaseInput> = {
  render: () => <TextInputWrapper />,
};

export const NumberInput: StoryObj<typeof BaseInput> = {};
