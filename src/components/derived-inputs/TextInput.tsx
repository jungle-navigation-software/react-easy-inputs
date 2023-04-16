import BaseInput from "../base-inputs/BaseInput";
import { IUseInput } from "../hooks/IUseInput";

const TextInput: React.FC<TextInputProperties> = ({ useInput, label }) => {
  return <BaseInput useInput={useInput} label={label} />;
};

export interface TextInputProperties {
  useInput: IUseInput<string>;
  label: string;
}

export default TextInput;
