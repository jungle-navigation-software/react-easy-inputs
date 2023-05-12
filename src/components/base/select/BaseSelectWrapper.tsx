import useMultipleSelect from "../../hooks/UseMultipleSelect";
import { BaseSelect } from "./BaseSelect";

const BaseSelectWrapper: React.FC<BaseSelectWrapperProperties> = ({
  isMultiple,
  defaultSelectClass,
  size,
}) => {
  const useInput = useMultipleSelect();

  const options = [
    { text: "First", value: "One" },
    { text: "Second", value: "Two" },
  ];

  return (
    <BaseSelect
      isMultiple={isMultiple}
      defaultSelectClass={defaultSelectClass}
      size={size}
      useInput={useInput}
      options={options}
    />
  );
};

interface BaseSelectWrapperProperties {
  isMultiple?: boolean;
  defaultSelectClass?: string;
  size?: number;
}

export default BaseSelectWrapper;
