import { IUseInput, InputType } from "../hooks/IUseInput";

export default function calculateValue(useInput: IUseInput<InputType>): string {
  return useInput.state.toString();
}
