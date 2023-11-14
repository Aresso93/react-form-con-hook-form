import { LocalizationProvider } from '@mui/x-date-pickers'
import './App.css'
import TravellerStepper from './components/stepper'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormProvider, useForm } from "react-hook-form"

function App() {
  const methods = useForm()
  const onSubmit = (data) => console.log('AAAAAAAA', data)

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    <TravellerStepper/>
    <input type='submit'/>
    </form>
    </FormProvider>
    </LocalizationProvider>
    
    </>
  )
}

export default App
