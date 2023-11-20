import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import TravellerStepper from "./components/stepper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
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
  test: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("CAMPO RICHIESTO"),
  email: yup.string().required("RICHIESTO").email('INSERISCI UNA MAIL VALIDA'),
  gender: yup.string().required("GENERE RICHIESTO"),
  dateOfBirth: yup.date().required("DATA DI NASCITA LA VOGLIO"),
  accommodation: yup.string().required("SCEGLI DOVE DORMIRE"),
  dateOfDeparture: yup.string().required("SCEGLI UNA DATA"),
  dateOfReturn: yup.string().required("SCEGLI UNA DATA PER IL RITORNO"),
  destination: yup.string().required("DOVE TE NE VAI"),
  test: yup.string().required("TEST RICHIESTO")
})

console.log(schema);


function App() {
  const methods = useForm({resolver: yupResolver(schema)});
  const onSubmit = (data) => console.log("Submitted!", data);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <TravellerStepper />
          <input type="submit" />
          </form>
        </FormProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
