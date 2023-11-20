import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import TravellerStepper from "./components/stepper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFormInput {
  dateOfBirth: Date;
  email: string;
  fullName: string;
  gender: string;
  accommodation: string;
  dateOfDeparture: Date;
  dateOfReturn: Date;
  location: string;
  test: string;
}

let olderThan18Yob = new Date().getFullYear() - 18
let today = new Date()

const schema = yup.object().shape({
  fullName: yup.string().required("CAMPO RICHIESTO").min(6, 'TROPPO CORTO'),
  email: yup.string().required("RICHIESTO").email('INSERISCI UNA MAIL VALIDA'),
  gender: yup.string().required("GENERE RICHIESTO"),
  dateOfBirth: yup.date().required("DATA DI NASCITA LA VOGLIO").max(new Date(olderThan18Yob, 0, 1), 'SOLO MAGGIORENNI'),
  dateOfDeparture: yup.date().required("SCEGLI UNA DATA PER LA PARTENZA").min(today, 'STAI VIAGGIANDO NELLO SPAZIO NON NEL TEMPO'),
  dateOfReturn: yup.date().required("SCEGLI UNA DATA PER IL RITORNO").min(today, 'STAI VIAGGIANDO NELLO SPAZIO NON NEL TEMPO'),
  destination: yup.string().required("DOVE TE NE VAI"),
  accommodation: yup.string().required("SCEGLI DOVE DORMIRE"),
})

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
