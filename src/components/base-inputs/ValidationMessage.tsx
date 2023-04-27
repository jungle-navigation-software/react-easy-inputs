const ValidationMessage: React.FC<ValidationMessageProperties> = ({
  message,
  defaultValidationMessage,
  isDirty,
  isValid,
}) => {
  const determineStyling = (): React.CSSProperties => {
    if (!isDirty || isValid) {
      return { visibility: "hidden" };
    }
    return { visibility: "visible" };
  };

  const determineMessage = (): string => {
    if (isValid) {
      return "success";
    }
    return message;
  };

  return (
    <p className={defaultValidationMessage} style={determineStyling()}>
      {determineMessage()}
    </p>
  );
};

interface ValidationMessageProperties {
  message: string;
  defaultValidationMessage: string;
  isDirty: boolean;
  isValid: boolean;
}

export default ValidationMessage;
