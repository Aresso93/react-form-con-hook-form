import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("CAMPONE RICHIESTONE"),
  email: yup.string().required("RICHIESTO").matches(/[A-Za-z]@./)
})

export default function TravellerForm() {

const {register, control, getValues, formState:{errors}} = useFormContext();
console.log('Traveller', getValues())
  return (
    <>
    <div className='form-container'>
    <TextField 
    id="name" 
    label="Enter your full name" 
    variant="outlined"
    {...register("fullName")} 
    />
    {errors.fullName && <p>{errors.name?.message}</p>}
    <TextField 
    id="email" 
    label="Enter your email address" 
    variant="outlined"
    {...register("email")} 
    />
   {errors.email && <p>{errors.email?.message}</p>}

      <FormLabel id="demo-radio-buttons-group-label">Select your gender</FormLabel>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => <RadioGroup
       {...field}
        >
       
       <FormControlLabel 
        value="male" control={<Radio 
          
        />} label="male" />
        <FormControlLabel 
        value="female" control={<Radio 
          
        />} label="female" />
      <FormControlLabel 
        value="other" control={<Radio 
          
        />} label="other" />
        </RadioGroup>}
      />
      
     <Controller
     name='date of birth'
     control={control}
     render={({field: {onChange, value}}) => (
      <DatePicker value={value} onChange={onChange}
      />
     )}
     />
    
    </div>
    </>
  );
}