import { LocalizationProvider } from '@mui/x-date-pickers'
import './App.css'
import TravellerStepper from './components/stepper'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TravellerForm from './components/traveller-form'

function App() {


  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TravellerStepper/>
    </LocalizationProvider>
    
    </>
  )
}

export default App
