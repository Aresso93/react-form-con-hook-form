import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import TravellerStepper from "./components/stepper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";

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
  email: yup.string().required("RICHIESTO").matches(/[A-Za-z]@./),
  gender: yup.string().required("GENERE RICHIESTO"),
  dateOfBirth: yup.string().required("DATA DI NASCITA LA VOGLIO"),
  accommodation: yup.string().required("SCEGLI DOVE DORMIRE"),
  dateOfDeparture: yup.string().required("SCEGLI UNA DATA"),
  dateOfReturn: yup.string().required("SCEGLI UNA DATA PER IL RITORNO"),
  location: yup.string().required("DOVE TE NE VAI"),
  test: yup.string().required("TEST RICHIESTO")
})

function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log("Submitted!", data);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <TravellerStepper />
          </form>
        </FormProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
