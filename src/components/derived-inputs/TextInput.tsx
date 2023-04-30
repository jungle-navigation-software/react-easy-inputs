import DerivedInput from "./DerivedInput";
import { IUseInput } from "../hooks/IUseInput";

const TextInput: React.FC<TextInputProperties> = ({ useInput, label }) => {
  return <DerivedInput useInput={useInput} label={label} />;
};

export interface TextInputProperties {
  useInput: IUseInput<string>;
  label: string;
}

export default TextInput;
