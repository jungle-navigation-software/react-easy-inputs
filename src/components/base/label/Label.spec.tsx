import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("label", () => {
  it("has correct properties", () => {
    const text = "labelText";
    const id = "1";

    render(<Label text={text} inputId={id} />);

    const element = screen.getByText(text);

    expect(element).toHaveClass("defaultLabelStylingClass");
    expect(element).toHaveAttribute("for", id);
  });

  it("has styling class when passed", () => {
    const text = "labelText";
    const style = "label";

    render(<Label text={text} inputId="1" stylingClass={style} />);

    const element = screen.getByText(text);

    expect(element).toHaveClass(style);
  });
});
