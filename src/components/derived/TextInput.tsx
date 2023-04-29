import { IUseInput } from "../hooks/IUseInput";
import DerivedInput from "./DerivedInput";

const TextInput: React.FC<TextInputProperties> = ({ useInput, label }) => {
  return <DerivedInput useInput={useInput} label={label} />;
};

export interface TextInputProperties {
  useInput: IUseInput<string>;
  label: string;
}

export default TextInput;
