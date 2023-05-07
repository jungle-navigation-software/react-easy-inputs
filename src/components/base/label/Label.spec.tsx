import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  it("has correct properties", () => {
    const myClass = "myClass";
    const label = "myLabel";
    const id = "myId";

    render(<Label text={label} inputId={id} stylingClass={myClass} />);

    const element = screen.getByText(label);

    expect(element).toHaveClass(myClass);
    expect(element).toHaveAttribute("for", id);
  });
});
