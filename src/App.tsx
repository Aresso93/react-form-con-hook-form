import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import TravellerStepper from "./components/stepper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFormInput {
  dateOfBirth: string;
  email: string;
  fullName: string;
  gender: string;
  accommodation: string;
  dateOfDeparture: string;
  dateOfReturn: string;
  location: string;
}

export const schema = yup.object().shape({
  fullName: yup.string().required("CAMPONE RICHIESTONE"),
  email: yup.string().required("RICHIESTO").matches(/[A-Za-z]@./),
  gender: yup.string().required("GENERE RICHIESTO"),
  dateOfBirth: yup.string().required("DATA DI NASCITA LA VOGLIO"),
  accommodation: yup.string().required("SCEGLI DOVE DORMIRE"),
  dateOfDeparture: yup.string().required("SCEGLI UNA DATA"),
  dateOfReturn: yup.string().required("SCEGLI UNA DATA PER IL RITORNO"),
  location: yup.string().required("DOVE TE NE VAI")
})

function App() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const onSubmit = (data: IFormInput) => console.log("Submitted!", data);
  console.log('STEVE', errors)
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...useForm()}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TravellerStepper errors={errors}/>
          <input type="submit" />
          </form>
        </FormProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
