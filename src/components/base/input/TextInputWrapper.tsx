import { useId, useState } from "react";
import useTextInput from "../../hooks/UseTextInput";
import { BaseInput } from "./BaseInput";

const TextInputWrapper: React.FC<TextInputWrapperProperties> = ({ type }) => {
  const input = useTextInput();
  const [isDirty, setDirty] = useState<boolean>(false);
  const [, setMessage] = useState<string>("");
  const id = useId();

  return (
    <BaseInput
      useInput={input}
      isDirty={isDirty}
      setDirty={setDirty}
      setValidationMessage={setMessage}
      inputId={id}
      type={type}
    />
  );
};

interface TextInputWrapperProperties {
  type: string;
}

export default TextInputWrapper;
