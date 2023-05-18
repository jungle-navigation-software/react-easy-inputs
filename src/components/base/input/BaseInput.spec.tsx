import { render, screen } from "@testing-library/react";
import TextInputWrapper from "./TextInputWrapper";
import userEvent from "@testing-library/user-event";

describe("BaseInput", () => {
  it("has default input class", () => {
    render(<TextInputWrapper type="text" />);

    expect(screen.getByLabelText(/label/i)).toHaveClass("defaultInputClass");
  });

  it("has default danger class on focus", async () => {
    const user = userEvent.setup();

    render(<TextInputWrapper type="text" required />);

    await user.click(await screen.findByLabelText(/label/i));

    expect(await screen.findByLabelText(/label/i)).toHaveClass(
      "defaultDangerClass"
    );
  });

  it("has default success class when valid", async () => {
    const user = userEvent.setup();

    render(<TextInputWrapper type="text" required />);

    await user.click(await screen.findByLabelText(/label/i));

    await user.keyboard("abc");

    expect(await screen.findByLabelText(/label/i)).toHaveClass(
      "defaultSuccessClass"
    );
  });
});
