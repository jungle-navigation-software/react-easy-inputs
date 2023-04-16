import { IUseInput } from "./IUseInput";
import useInput from "./UseInput";

export default function useTextInput(defaultState = ""): IUseInput<string> {
  return useInput(defaultState, (newState) => newState);
}
