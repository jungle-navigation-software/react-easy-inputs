import { IUseInput, InputType } from "../../../hooks/IUseInput";

/**
 * BaseSelect that forms the foundation for a Select input.
 */
export const BaseSelect: React.FC<BaseSelectProperties> = ({
  toOptions,
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

    if (isMultiple) {
      const newState: Array<string> = [];

      for (const option of event.target.options) {
        if (option.selected) {
          newState.push(option.value);
        }
      }

      useInput.setState(newState.toString());
    }
  };

  const toValue = (): string | Array<string> => {
    if (isMultiple) {
      return useInput.state as Array<string>;
    }
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
      {toOptions()}
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
  toOptions: () => JSX.Element;

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
