import { IUseInput } from "./IUseInput";
import useInput from "./UseInput";

export default function useNumberInput(defaultState = 0): IUseInput<number> {
  return useInput(defaultState, (newState) => Number.parseInt(newState));
}
