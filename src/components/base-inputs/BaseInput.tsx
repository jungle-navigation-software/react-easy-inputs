import { IUseInput, InputType } from "../hooks/IUseInput";
import calculateValue from "../functions/CalculateValue";

const BaseInput: React.FC<BaseInputProperties> = ({
  useInput,
  setDirty,
  setValidationMessage,
  inputId,
  inputClass = "defaultInput",
  isDirty,
  successClass = "defaultSuccess",
  dangerClass = "defaultDanger",
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    handleUpdate(element);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    handleUpdate(element);
  };

  const handleOnInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    handleUpdate(element);
  };

  const handleUpdate = (element: HTMLInputElement): void => {
    setDirty(true);
    useInput.setState(element.value);
    useInput.setValid(element.validity.valid);
    setValidationMessage(element.validationMessage);
  };

  const determineSuccessOrDanger = (): string => {
    if (!isDirty) {
      return "";
    } else if (useInput.valid) {
      return successClass;
    }
    return dangerClass;
  };

  return (
    <input
      className={`${inputClass} ${determineSuccessOrDanger()}`}
      id={inputId}
      value={calculateValue(useInput)}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      onInput={handleOnInput}
    />
  );
};

interface BaseInputProperties {
  useInput: IUseInput<InputType>;
  setDirty: (isDirty: boolean) => void;
  setValidationMessage: (validationMessage: string) => void;
  inputClass?: string;
  inputId: string;
  isDirty: boolean;
  successClass?: string;
  dangerClass?: string;
}

export default BaseInput;
