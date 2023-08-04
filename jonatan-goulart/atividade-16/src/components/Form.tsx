import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import { CurriculoListContext } from "../contexts/curriculoContext";
import { ICurriculo } from "../@types/context";
import { isCPF } from "brazilian-values";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ICurriculo>({ mode: "onChange" });
  const onSubmit: SubmitHandler<ICurriculo> = (data) => {
    HandleCurriculoRegister(data);
    alert("Resume successfully created, please check Resume List Page on Nav");
  };

  const { curriculosList, setCurriculosList } =
    useContext(CurriculoListContext);

  const HandleCurriculoRegister = (data: ICurriculo) => {
    let newCurriculos = [...curriculosList];
    newCurriculos.push(data);
    setCurriculosList(newCurriculos);
  };

  return (
    <div>
      <h2>Resume Register:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={"Name*"}
          {...register("name", { required: true, pattern: /[a-zA-Z]+/i })}
        />
        {errors.name && "First name is required"}
        <input
          type="text"
          placeholder={"Last Name*"}
          {...register("lastName", { required: true, pattern: /[a-zA-Z]+/i })}
        />
        {errors.lastName && "Last Name is required"}
        <InputMask
          mask="99/99/9999"
          placeholder={"Birth Date*"}
          {...register("birthDate", { required: true })}
        />
        {errors.birthDate && "Birth Date is required"}
        <input
          type="email"
          placeholder={"Email*"}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && "Email is required"}

        <InputMask
          mask={"999.999.999-99"}
          placeholder={"CPF*"}
          {...register("cpf", {
            required: true,
            validate: {
              value: (value: any) => isCPF(value) || "Digite um CPF válido",
            },
          })}
        />
        {errors.cpf && "CPF is required"}
        <InputMask
          mask="+99 (99) 999999999"
          placeholder={"Cellphone*"}
          {...register("cellphone", { required: true })}
        />
        {errors.cellphone && "Cellphone is required"}
        <select {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option selected value="other">
            Other
          </option>
        </select>
        <textarea {...register("experiences", { required: true })} />
        {errors.experiences && "At Least one Experience is required"}

        <input type="submit" disabled={!isDirty || !isValid} />
      </form>
    </div>
  );
}
