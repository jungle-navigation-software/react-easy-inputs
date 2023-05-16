import { render } from "@testing-library/react";
import TextInputWrapper from "./TextInputWrapper";

describe("BaseInput", () => {
  it("renders", () => {
    render(<TextInputWrapper type="text" />);

    expect(true).toBeTruthy();
  });
});
