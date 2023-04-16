import TextInput from "../components/derived-inputs/TextInput";
import useTextInput from "../components/hooks/UseTextInput";
import "./styles.scss";

const App: React.FC = () => {
  const name = useTextInput();

  return (
    <>
      <p>Easy React Inputs</p>
      <TextInput label="First Name:" useInput={name} />
    </>
  );
};

export default App;
