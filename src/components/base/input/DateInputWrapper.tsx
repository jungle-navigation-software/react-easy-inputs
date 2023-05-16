import { useState, useId } from "react";
import useDateInput from "../../hooks/UseDateInput";
import { BaseInput } from "./BaseInput";

const DateInputWrapper: React.FC = () => {
  const input = useDateInput();
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
      type="date"
    />
  );
};

export default DateInputWrapper;
