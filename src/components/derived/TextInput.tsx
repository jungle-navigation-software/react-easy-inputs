import { IUseInput } from "../hooks/IUseInput";
import DerivedInput from "./DerivedInput";

const TextInput: React.FC<TextInputProperties> = ({ useInput, label }) => {
  return <DerivedInput useInput={useInput} label={label} type="text" />;
};

export interface TextInputProperties {
  useInput: IUseInput<string>;
  label: string;
}

export default TextInput;
