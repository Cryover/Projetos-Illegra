import { useContext } from "react";
import { CurriculoListContext } from "../contexts/curriculoContext";

export default function Resumes() {
  const { curriculosList, setCurriculosList } =
    useContext(CurriculoListContext);

  function HandleRemoveCurriculo(index: number) {
    let newCurriculosList = [...curriculosList];
    newCurriculosList.splice(index, 1);
    setCurriculosList(newCurriculosList);
  }

  return (
    <div>
      <div>
        {curriculosList.map((curriculo, index) => {
          return (
            <div key={index}>
              <div className="curriculoDiv">
                <h3>Name: {curriculo.name}</h3>
                <h3>Last Name: {curriculo.lastName}</h3>
                <h4>Birth Date: {curriculo.birthDate?.toString()}</h4>
                <h4>Email: {curriculo.email}</h4>
                <h4>CPF: {curriculo.cpf}</h4>
                <h4>Cellphone: {curriculo.cellphone}</h4>
                <h4>Gender: {curriculo.gender}</h4>
                <h4>Experiences: </h4>
                <p>{curriculo.experiences}</p>
                <button onClick={() => HandleRemoveCurriculo(index)}>
                  Remove
                </button>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}
