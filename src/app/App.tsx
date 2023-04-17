import { ReactNode, useState } from "react";
import BulmaExamples from "../examples/bulma/BulmaExamples";
import BootstrapExamples from "../examples/bootstrap/BootstrapExamples";

const App: React.FC = () => {
  const [style, setStyle] = useState<string>("bootstrap");

  const determineStyle = (): ReactNode => {
    switch (style) {
      case "bootstrap":
        return <BootstrapExamples />;
      case "bulma":
        return <BootstrapExamples />;
    }
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
