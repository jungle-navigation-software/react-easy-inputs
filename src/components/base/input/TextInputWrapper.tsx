import { useId, useState } from "react";
import useTextInput from "../../hooks/UseTextInput";
import { BaseInput } from "./BaseInput";

const TextInputWrapper: React.FC<TextInputWrapperProperties> = ({
  type,
  required,
}) => {
  const input = useTextInput();
  const [isDirty, setDirty] = useState<boolean>(false);
  const [, setMessage] = useState<string>("");
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Label</label>
      <BaseInput
        useInput={input}
        isDirty={isDirty}
        setDirty={setDirty}
        setValidationMessage={setMessage}
        inputId={id}
        type={type}
        required={required}
      />
    </div>
  );
};

interface TextInputWrapperProperties {
  type: string;
  required?: boolean;
}

export default TextInputWrapper;
