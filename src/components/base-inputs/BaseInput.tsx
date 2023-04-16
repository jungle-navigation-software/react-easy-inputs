import { useId, useState } from "react";
import { IUseInput, InputType } from "../hooks/IUseInput";

const BaseInput: React.FC<BaseInputProperties> = ({
  useInput,
  label,
  outerWrapperClass = "defaultOuterWrapper",
  innerWrapperClass = "defaultInnerWrapper",
  labelClass = "defaultLabel",
  inputClass = "defaultInput",
}) => {
  const inputId = useId();
  const [dirty, setDirty] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>("");

  const calculateValue = (): string => {
    return useInput.state.toString();
  };

  const handleUpdateInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const element = event.target as HTMLInputElement;

    setDirty(true);
    useInput.setState(element.value);
    useInput.setValid(element.validity.valid);
    setValidationMessage(element.validationMessage);
  };

  return (
    <div className={outerWrapperClass}>
      <label className={labelClass} htmlFor={inputId}>
        {label}
      </label>
      <div className={innerWrapperClass}>
        <input
          className={inputClass}
          id={inputId}
          value={calculateValue()}
          onChange={handleUpdateInput}
          onFocus={handleUpdateInput}
          onInput={handleUpdateInput}
        ></input>
      </div>
    </div>
  );
};

interface BaseInputProperties {
  useInput: IUseInput<InputType>;
  label: string;
  outerWrapperClass?: string;
  innerWrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export default BaseInput;
