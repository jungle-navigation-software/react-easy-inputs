import { render, screen } from "@testing-library/react";
import EasyValidationMessage from "./EasyValidationMessage";

describe("EasyValidationMessage", () => {
  it("has correct attributes", () => {
    render(
      <EasyValidationMessage
        message="valid"
        isDirty={false}
        isValid
        defaultValidationMessage="primary"
      />
    );

    expect(screen.getByText("success")).toBeInTheDocument();
  });
});
