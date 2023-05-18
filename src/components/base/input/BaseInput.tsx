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
  required,
}) => {
  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;
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
      onChange={handleUpdate}
      onFocus={handleUpdate}
      onInput={handleUpdate}
      type={type}
      required={required}
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

  /**
   * A callback to update the validation error message if present.
   */
  setValidationMessage: (validationMessage: string) => void;

  /**
   * The styling class for the input element.
   */
  inputClass?: string;

  /**
   * The id that will be associated with the input and label.
   */
  inputId: string;

  /**
   * A variable to denote if the input has been touched or focused.
   */
  isDirty: boolean;

  /**
   * The styling class for input if it passes validation.
   */
  successClass?: string;

  /**
   * The styling class for the input if it fails validation.
   */
  dangerClass?: string;

  /**
   * States weather the input should have a value or not.
   */
  required?: boolean;
}
