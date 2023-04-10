import { Fragment, useEffect, useState } from "react";
import { ButtonComp } from "../../components";
import { GetCalculoHoras, GetHoras } from "../../Resources";

const Entrada = () => {
  const [data, setData] = useState([]);
  const currentDate: Date = new Date();
  const [startHour, setStartHour] = useState<boolean>(false);

  // Bloco Data
  let currentDay: string = currentDate.getDate().toString();
  let currentMouth: string = Number(currentDate.getMonth() + 1).toString();
  const currentYear: number = currentDate.getFullYear();
  let finalDate: string = "";

  // Bloco Horário
  let currentHour: number = currentDate.getHours();
  let currentMinutes: number = currentDate.getMinutes();

   const format = () => {
    if (currentDay.length < 2) {
      currentDay = `0${currentDay}`;
    }
    if (currentMouth.length < 2) {
      currentMouth = `0${currentMouth}`;
    }
  };

  format();

  finalDate = `${currentDay}/${currentMouth}/${currentYear}`;

  function renderItens(index: any, key: number) {

    if(data[key]["data"] === finalDate && startHour !== true){
        setStartHour(true)
    }

    return (
      <Fragment key={key}>
        <li>{data[key]["data"]}</li>
        <li>{data[key]["horaDia"]}</li>
      </Fragment>
    );
  }

  return (
    <>
      <GetHoras setData={setData} />

      <p>Relógio de Ponto</p>
      {!startHour ? <p>0h 00m</p> : <p>Teste</p>}

      <p>Horas de hoje</p>
      
      {!startHour ?
      <ButtonComp
        descripton="Hora de Entrada"
        onClick={() => console.log("Clicado Entrada")}
      />
      :
      <ButtonComp
        descripton="Hora de Saída"
        onClick={() => console.log("Clicado Saída")}
      />
      }
      {data.length > 0 && <ul>{data.map(renderItens)}</ul>}
    </>
  );
};

export default Entrada;
