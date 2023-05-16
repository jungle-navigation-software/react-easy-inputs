import { IUseInput } from "./IUseInput";
import useInput from "./UseInput";

export default function useDateInput(
  defaultState = new Date()
): IUseInput<Date> {
  return useInput(defaultState, (newState) => new Date(newState));
}
