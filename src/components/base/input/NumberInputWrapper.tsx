import { useState, useId } from "react";
import useNumberInput from "../../hooks/UseNumberInput";
import { BaseInput } from "./BaseInput";

const NumberInputWrapper: React.FC = () => {
  const input = useNumberInput();
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
      type="number"
    />
  );
};

export default NumberInputWrapper;
