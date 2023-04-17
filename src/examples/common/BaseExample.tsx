import TextInput from "../../components/derived-inputs/TextInput";
import useTextInput from "../../components/hooks/UseTextInput";

const BaseExample: React.FC<BaseExampleProperties> = ({ selected }) => {
  const name = useTextInput();

  return (
    <>
      <p>{selected}</p>
      <TextInput label="First Name:" useInput={name} />
    </>
  );
};

export interface BaseExampleProperties {
  selected: string;
}

export default BaseExample;
