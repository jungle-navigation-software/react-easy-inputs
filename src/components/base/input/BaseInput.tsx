import { IUseInput, InputType } from "../../hooks/IUseInput";
import calculateValue from "../../functions/CalculateValue";

/**
 * BaseInput forms the foundation for a text, numeric, or date based input.
 */
export const BaseInput: React.FC<BaseInputProperties> = ({
  useInput,
  type,
  setDirty,
  setValidationMessage,
  inputId,
  inputClass = "defaultInputClass",
  isDirty,
  successClass = "defaultSuccessClass",
  dangerClass = "defaultDangerClass",
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
    } else if (useInput.isValid) {
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
      onFocus={handleOnChange}
      onInput={handleOnChange}
      type={type}
    />
  );
};

interface BaseInputProperties {
  /**
   * A useInput hook that will pass data up and down.
   */
  useInput: IUseInput<InputType>;

  /**
   * The type of the input. (I.E. text, number, date)
   */
  type: string;

  /**
   * A callback to update the isDirty value.
   */
  setDirty: (isDirty: boolean) => void;
  setValidationMessage: (validationMessage: string) => void;
  inputClass?: string;
  inputId: string;
  isDirty: boolean;
  successClass?: string;
  dangerClass?: string;
}
