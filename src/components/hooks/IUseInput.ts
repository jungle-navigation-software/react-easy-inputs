export interface IUseInput<TInputType> {
  state: TInputType;
  setState: (newState: string) => void;
  isValid: boolean;
  setValid: (newValid: boolean) => void;
}

export type InputType = string | number | Date;
