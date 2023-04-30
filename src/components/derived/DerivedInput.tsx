import { useId, useState } from "react";
import { IUseInput, InputType } from "../hooks/IUseInput";
import StylingWrapper from "../base/styling-wrapper/StylingWrapper";
import Label from "../base/label/Label";
import BaseInput from "../base/base-input/BaseInput";
import { EasyValidationMessage } from "../base/validation-message/EasyValidationMessage";

const DerivedInput: React.FC<DerivedInputProperties> = ({
  useInput,
  label,
  outerWrapperClass = "defaultOuterWrapper",
  innerWrapperClass = "defaultInnerWrapper",
  labelClass = "defaultLabel",
  inputClass = "defaultInput",
  validationMessageClass = "defaultValidationMessage",
}) => {
  const inputId = useId();
  const [dirty, setDirty] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>("");

  return (
    <StylingWrapper stylingClass={outerWrapperClass}>
      <Label stylingClass={labelClass} text={label} inputId={inputId} />
      <StylingWrapper stylingClass={innerWrapperClass}>
        <BaseInput
          useInput={useInput}
          inputId={inputId}
          inputClass={inputClass}
          setDirty={setDirty}
          setValidationMessage={setValidationMessage}
          isDirty={dirty}
        />
      </StylingWrapper>
      <EasyValidationMessage
        easyValidationMessageStyle={validationMessageClass}
        message={validationMessage}
        isDirty={dirty}
        isValid={useInput.valid}
      />
    </StylingWrapper>
  );
};

interface DerivedInputProperties {
  useInput: IUseInput<InputType>;
  label: string;
  outerWrapperClass?: string;
  innerWrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
  validationMessageClass?: string;
}

export default DerivedInput;
