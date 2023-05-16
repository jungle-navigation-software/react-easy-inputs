import { IUseInput } from "../../../hooks/IUseInput";
import { BaseSelect } from "../base/BaseSelect";
import ISelectOptionGroup from "./ISelectOptionGroup";

const OptionGroupTextSelect: React.FC<OptionGroupTextSelectProperties> = ({
  useInput,
  groups,
}) => {
  const toOptions = (): JSX.Element => {
    return (
      <>
        {groups.map((group) => (
          <optgroup key={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </optgroup>
        ))}
      </>
    );
  };

  return <BaseSelect useInput={useInput} toOptions={toOptions} />;
};

interface OptionGroupTextSelectProperties {
  useInput: IUseInput<string>;
  groups: Array<ISelectOptionGroup>;
}
