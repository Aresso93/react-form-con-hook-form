import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";
export function PreferencesForm(){
const {register} = useFormContext();
    return (
    <>
    <div className='form-container'>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Accommodation</FormLabel>
      <RadioGroup
        defaultValue="hotel"
        name="accommodation"
      >
        <FormControlLabel 
        {...register("accommodation")}
        value="hotel" 
        control={<Radio />} 
        label="Hotel" />
        <FormControlLabel 
        {...register("accommodation")}
        value="campingSite" 
        control={<Radio />} 
        label="Camping Site" />
        <FormControlLabel
        {...register("accommodation")}
        value="apartment" 
        control={<Radio />} 
        label="Apartment" />
      </RadioGroup>

      <FormGroup>
       
      </FormGroup>
    </FormControl>
    </div>
    </>

    )
    
}