import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
  children: ReactNode;
}

export interface ICurriculo {
  name?: string;
  lastName?: string;
  birthDate?: Date;
  email?: string;
  cpf?: number;
  cellphone?: number;
  gender?: string;
  experiences?: string;
}

export type TCurriculo = {
  name: string;
  lastName: string;
  birthDate: Date;
  email: string;
  cpf: number;
  cellphone: number;
  gender?: string;
  experiences: string;
};

export type ICurriculoType = {
  curriculos: ICurriculo | undefined;
  setCurriculos: Dispatch<SetStateAction<TCurriculo[] | undefined[]>>;
};

export interface CurriculosTypeProps {
  curriculos: ICurriculo[];
}

export type SetPropsType = {
  setCurriculos: Dispatch<SetStateAction<TCurriculo[]>>;
};
