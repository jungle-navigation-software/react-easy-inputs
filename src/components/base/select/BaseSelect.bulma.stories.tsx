import { Meta, StoryObj } from "@storybook/react";
import { BaseSelect } from "./BaseSelect";
import "../../../styles/bulma.scss";
import useTextInput from "../../hooks/UseTextInput";

const meta: Meta<typeof BaseSelect> = {
  title: "Bulma/Base/Select",
  component: BaseSelect,
  tags: ["autodocs"],
  render: () => <BaseSelectWrapper />,
};

export default meta;

const BaseSelectWrapper: React.FC = () => {
  const useInput = useTextInput("");

  const options = [
    { text: "First", value: "One" },
    { text: "Second", value: "Two" },
  ];

  return <BaseSelect useInput={useInput} options={options} />;
};

export const Default: StoryObj<typeof BaseSelect> = {};

export const Multiple: StoryObj<typeof BaseSelect> = {
  args: {
    isMultiple: true,
    defaultSelectClass: "select is-multiple",
    size: 4,
  },
};
