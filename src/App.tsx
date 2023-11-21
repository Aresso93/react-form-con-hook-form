import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import TravellerStepper from "./components/stepper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

export interface IFormInput {
  page1: {
    fullName: string;
    email: string;
    gender: string;
    dateOfBirth: Date;
  },
  page2: {
    dateOfDeparture: Date;
    dateOfReturn: Date;
    location: string;
  },
  page3: {
    accommodation: string;
  }
}

let olderThan18Yob = new Date().getFullYear() - 18
let today = new Date()

const schema = yup.object().shape({
  page1: yup.object().shape({ 
    fullName: yup.string().defined().strict(true).required("CAMPO RICHIESTO").min(6, 'TROPPO CORTO').matches(/[A-Za-z] [A-Za-z]/, 'VOGLIO ANCHE IL COGNOME (E NIENTE CARATTERI SPECIALI O NUMERI)'),
    email: yup.string().required("RICHIESTO").email('INSERISCI UNA MAIL VALIDA'),
    gender: yup.string().required("GENERE RICHIESTO"),
    dateOfBirth: yup.date().required("DATA DI NASCITA LA VOGLIO").max(new Date(olderThan18Yob, 0, 1), 'SOLO MAGGIORENNI'),
  }),
  page2: yup.object().shape({
    dateOfDeparture: yup.date().required("SCEGLI UNA DATA PER LA PARTENZA").min(today, 'STAI VIAGGIANDO NELLO SPAZIO NON NEL TEMPO'),
    dateOfReturn: yup.date().required("SCEGLI UNA DATA PER IL RITORNO").min(today, 'STAI VIAGGIANDO NELLO SPAZIO NON NEL TEMPO'),
    destination: yup.string().required("DOVE TE NE VAI")
  }),
  page3: yup.object().shape({accommodation: yup.string().required("SCEGLI DOVE DORMIRE")})
 
})

function App() {
  useEffect(() => {}, []);
  const methods = useForm({resolver: yupResolver(schema)});
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  
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
