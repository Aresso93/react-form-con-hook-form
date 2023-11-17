import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export interface IFormInput {
    dateOfBirth: string;
    email: string;
    fullName: string;
    gender: string;
    accommodation: string;
    dateOfDeparture: string;
    dateOfReturn: string;
    location: string;
    test: string;
  }
export function useValidation(){
      
      const schema = yup.object().shape({
        fullName: yup.string().required("CAMPO RICHIESTO"),
        email: yup.string().required("RICHIESTO").matches(/[A-Za-z]@./),
        gender: yup.string().required("GENERE RICHIESTO"),
        dateOfBirth: yup.string().required("DATA DI NASCITA LA VOGLIO"),
        accommodation: yup.string().required("SCEGLI DOVE DORMIRE"),
        dateOfDeparture: yup.string().required("SCEGLI UNA DATA"),
        dateOfReturn: yup.string().required("SCEGLI UNA DATA PER IL RITORNO"),
        location: yup.string().required("DOVE TE NE VAI"),
        test: yup.string().required("TEST RICHIESTO")
      })

      const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm<IFormInput>({ resolver: yupResolver(schema) });
      const onSubmit = (data: IFormInput) => console.log("Submitted!", data);


      return {
        actions:{
            handleSubmit,
            register,
            onSubmit
        },
        states:{errors}
      }

}