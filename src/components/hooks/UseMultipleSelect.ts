import { IUseInput } from "./IUseInput";
import useInput from "./UseInput";

export default function useMultipleSelect(
  defaultState = new Array<string>()
): IUseInput<Array<string>> {
  return useInput((defaultState = new Array<string>()), (newState) =>
    newState.split(",")
  );
}
