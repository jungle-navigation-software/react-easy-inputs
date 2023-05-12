import { Meta, StoryObj } from "@storybook/react";
import { BaseSelect } from "./BaseSelect";
import "../../../styles/bootstrap.scss";
import BaseSelectWrapper from "./BaseSelectWrapper";

const meta: Meta<typeof BaseSelect> = {
  title: "Bootstrap/Base/Select",
  component: BaseSelect,
  tags: ["autodocs"],
  render: () => <BaseSelectWrapper />,
};

export default meta;

export const Default: StoryObj<typeof BaseSelect> = {};

export const Multiple: StoryObj<typeof BaseSelect> = {
  args: {
    isMultiple: true,
    defaultSelectClass: "select is-multiple",
    size: 4,
  },
};
