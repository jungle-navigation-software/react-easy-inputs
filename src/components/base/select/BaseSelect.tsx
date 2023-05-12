import { IUseInput, InputType } from "../../hooks/IUseInput";
import ISelectOption from "./ISelectOption";

/**
 * BaseSelect that forms the foundation for a Select input.
 */
export const BaseSelect: React.FC<BaseSelectProperties> = ({
  options,
  useInput,
  defaultSelectClass = "defaultSelectClass",
  defaultOptionClass = "defaultOptionClass",
  isMultiple = false,
  size,
}) => {
  const handleOnChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    useInput.setState(event.target.value);
  };

  const toValue = (): string => {
    return useInput.state.toString();
  };

  const determineSize = (): number | undefined => {
    if (!size) {
      return undefined;
    }
    return size;
  };

  return (
    <select
      onChange={handleOnChange}
      value={toValue()}
      className={defaultSelectClass}
      multiple={isMultiple}
      size={determineSize()}
    >
      {options.map((option): JSX.Element => {
        return (
          <option
            key={option.value}
            value={option.value}
            className={defaultOptionClass}
          >
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

interface BaseSelectProperties {
  /**
   * UseInput hook that will allow for data to flow up and down.
   */
  useInput: IUseInput<InputType>;

  /**
   * An array of ISelectOption that contains value's and text labels for each option.
   */
  options: Array<ISelectOption>;

  /**
   * The styling class for the select tag.
   */
  defaultSelectClass?: string;

  /**
   * The styling class for the option tag.
   */
  defaultOptionClass?: string;

  /**
   * Toggle if multiple selection is allowed.
   */
  isMultiple?: boolean;

  /**
   * How many options should be shown.
   */
  size?: number;
}
