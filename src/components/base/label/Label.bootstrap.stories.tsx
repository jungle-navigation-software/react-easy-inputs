import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import "../../../../node_modules/bootstrap/scss/bootstrap.scss";

const meta: Meta<typeof Label> = {
  title: "Bootstrap/Label",
  component: Label,
};

export default meta;

export const Main: StoryObj<typeof Label> = {
  args: {
    text: "My Label",
    inputId: "1",
  },
};
