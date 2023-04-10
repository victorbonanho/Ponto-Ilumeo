import { useState } from "react";
import { ButtonComp, InputComp } from "../../components";
import { CalcularHorario } from "../../components/CalcularHorario/CalcularHorario";
import Entrada from "../Access/Entrada";

const App = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  console.log(CalcularHorario('23h55', '20h00'))

  return (
    <>
      <div className="main-body">
        {!showInput ? <InputComp setShowInput={setShowInput} /> : <Entrada />}
      </div>
    </>
  );
};

export default App;
