/**
 * Validation Message that will show or hide depending if the input is valid.
 */
export const EasyValidationMessage: React.FC<
  EasyValidationMessageProperties
> = ({
  message,
  easyValidationMessageStyle = "defaultEasyValidationMessageStyle",
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
    <p className={easyValidationMessageStyle} style={determineStyling()}>
      {determineMessage()}
    </p>
  );
};

interface EasyValidationMessageProperties {
  /**
   * Our Validation Message
   */
  message: string;
  /**
   * Styling class for the validation message
   */
  easyValidationMessageStyle?: string;
  /**
   * Has the user interacted with the input
   */
  isDirty: boolean;
  /**
   * Is the input valid
   */
  isValid: boolean;
}
