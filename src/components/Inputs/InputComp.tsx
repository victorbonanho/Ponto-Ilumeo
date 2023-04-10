import React, { FC, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonComp from "../Button/ButtonComp";
import './style.css';
import { IInputs } from "./types";

const InputComp = ({setShowInput}: IInputs) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [dataCode, setDataCode] = useState();

  const onSubmit = (data: object) => {
    console.log(data)
    setShowInput(true)
  };

  return (
    <>
      <div className="login-page">
        <h1>
          Ponto <span>Ilumeo</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Código do usuário
            <input 
            type="text" 
            placeholder="Insira o código do usuário"
            {... register('codigo', {required: true})}            
            />
            {errors.codigo && 'Campo obrigatório'}
          </label>
        <ButtonComp type="submit" descripton="Confirmar"/>
        </form>
      </div>
    </>
  );
};

export default InputComp;
