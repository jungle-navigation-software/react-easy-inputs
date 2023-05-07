import { ReactNode, useState } from "react";
import BootstrapExamples from "../examples/bootstrap/BootstrapExamples";

const App: React.FC = () => {
  const [, setStyle] = useState<string>("bootstrap");

  const determineStyle = (): ReactNode => {
    return <BootstrapExamples />;
  };

  return (
    <>
      <select
        onChange={(event): void =>
          setStyle((event.target as HTMLSelectElement).value)
        }
      >
        <option value="bootstrap" selected>
          Bootstrap
        </option>
        <option value="bulma">Bulma</option>
      </select>
      {determineStyle()}
    </>
  );
};

export default App;
