import { IButton } from "./IButton";

const ButtonComp = ({ type, onClick, descripton }: IButton) => {
  return (
    <>
      {type === "submit" ? (
        <button type="submit">{descripton}</button>
      ) : (
        <button onClick={onClick}>{descripton}</button>
      )}
    </>
  );
};

export default ButtonComp;
