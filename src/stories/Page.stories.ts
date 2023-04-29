import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import userEvent from "@testing-library/user-event";

import { Page } from "./Page";

const meta: Meta<typeof Page> = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement, step }) => {
    const user = userEvent.setup();

    const canvas = within(canvasElement);

    await step("Log In", async () => {
      const loginButton = await canvas.findByRole("button", {
        name: /Log in/i,
      });

      await user.click(loginButton);
    });
  },
};
