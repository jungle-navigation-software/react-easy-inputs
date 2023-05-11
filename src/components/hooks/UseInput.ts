import { useState } from "react";
import { IUseInput, InputType } from "./IUseInput";

export default function useInput<T extends InputType>(
  defaultState: T,
  mappingFunction: (newState: string) => T
): IUseInput<T> {
  const [state, updateState] = useState<T>(defaultState);
  const [isValid, setValid] = useState<boolean>(false);

  const setState = (newState: string): void => {
    updateState(mappingFunction(newState));
  };

  return {
    state,
    setState,
    isValid,
    setValid,
  };
}
