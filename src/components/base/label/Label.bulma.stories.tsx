import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import "../../../../node_modules/bulma/bulma.sass";

const meta: Meta<typeof Label> = {
  title: "Bulma/Base/Label",
  component: Label,
};

export default meta;

export const Main: StoryObj<typeof Label> = {
  args: {
    text: "My Label",
    inputId: "1",
    stylingClass: "label",
  },
};
