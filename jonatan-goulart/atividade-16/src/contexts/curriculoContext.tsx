import { createContext, useState } from "react";
import { IProps, ICurriculo } from "../@types/context";

interface ICurriculoType {
  curriculosList: ICurriculo[];
  setCurriculosList: (data: ICurriculo[]) => void;
}

const curriculoListInitial: ICurriculoType = {
  curriculosList: [
    {
      name: "",
      lastName: "",
      birthDate: new Date(),
      email: "",
      cpf: 0,
      cellphone: 0,
      gender: undefined,
      experiences: "",
    },
  ],
  setCurriculosList: (data) => {},
};

export const CurriculoListContext =
  createContext<ICurriculoType>(curriculoListInitial);

export const CurriculoListContextProvider = ({ children }: IProps) => {
  const [curriculosList, setCurriculosList] = useState<ICurriculo[]>([]);

  return (
    <CurriculoListContext.Provider
      value={{ curriculosList, setCurriculosList }}
    >
      {children}
    </CurriculoListContext.Provider>
  );
};
