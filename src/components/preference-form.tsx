import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
export function PreferencesForm(){
    return (
    <>
    <div className='form-container'>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Accommodation</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="hotel"
        name="radio-buttons-group"
      >
        <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
        <FormControlLabel value="campingSite" control={<Radio />} label="Camping Site" />
        <FormControlLabel value="apartment" control={<Radio />} label="Apartment" />
      </RadioGroup>
    </FormControl>
    </div>
    </>

    )
    
}