import { render, screen } from "@testing-library/react";
import { EasyValidationMessage } from "./EasyValidationMessage";

describe("EasyValidationMessage", () => {
  it("valid is invisible", () => {
    render(<EasyValidationMessage message="valid" isDirty={false} isValid />);

    expect(screen.getByText("success")).not.toBeVisible();
  });

  it("invalid is visible", () => {
    render(
      <EasyValidationMessage
        message="required"
        isDirty={true}
        isValid={false}
      />
    );

    const element = screen.getByText("required");

    expect(element).toBeVisible();
  });
});
