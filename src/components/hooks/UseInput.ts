import { useState } from "react";
import { IUseInput, InputType } from "./IUseInput";

export default function useInput<T extends InputType>(
  defaultState: T,
  mappingFunc: (newState: string) => T
): IUseInput<T> {
  const [state, updateState] = useState<T>(defaultState);
  const [valid, setValid] = useState<boolean>(false);

  const setState = (newState: string): void => {
    updateState(mappingFunc(newState));
  };

  return {
    state,
    setState,
    valid,
    setValid,
  };
}
