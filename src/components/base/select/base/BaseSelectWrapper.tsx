import useMultipleSelect from "../../../hooks/UseMultipleSelect";
import { BaseSelect } from "./BaseSelect";
import ISelectOption from "./ISelectOption";

const BaseSelectWrapper: React.FC<BaseSelectWrapperProperties> = ({
  isMultiple,
  defaultSelectClass,
  defaultOptionClass,
  size,
}) => {
  const useInput = useMultipleSelect();

  const options: Array<ISelectOption> = [
    { text: "First", value: "One" },
    { text: "Second", value: "Two" },
  ];

  const toOptions = (): JSX.Element => {
    return (
      <>
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
      </>
    );
  };

  return (
    <BaseSelect
      isMultiple={isMultiple}
      defaultSelectClass={defaultSelectClass}
      size={size}
      useInput={useInput}
      toOptions={toOptions}
    />
  );
};

interface BaseSelectWrapperProperties {
  isMultiple?: boolean;
  defaultSelectClass?: string;
  defaultOptionClass?: string;
  size?: number;
}

export default BaseSelectWrapper;
