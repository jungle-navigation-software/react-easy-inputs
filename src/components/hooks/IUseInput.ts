export interface IUseInput<InputType> {
  state: InputType;
  setState: (newState: string) => void;
  valid: boolean;
  setValid: (newValid: boolean) => void;
}

export type InputType = string | number | Date;
