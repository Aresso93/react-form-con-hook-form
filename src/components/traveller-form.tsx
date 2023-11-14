import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TravellerForm() {

const {register, handleSubmit, formState:{errors}} = useForm();

console.log(errors)

const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <>
    <form onSubmit={handleSubmit((data) => {
        console.log(data)
    })}>
    <div className='form-container'>
    <TextField 
    id="name" 
    label="Enter your full name" 
    variant="outlined"
    {...register("fullName", {pattern:{value: /[A-Za-z]{3}/, message: 'Letters only'}, required: 'Required', minLength: {value: 6, message:'Almeno 6 caratteri'}})} 
    />
    <p>{errors.fullName?.message}</p>
    <TextField 
    id="email" 
    label="Enter your email address" 
    variant="outlined"
    {...register("email", {pattern:{value: /[A-Za-z]@./, message:"Insert a valid email"}, required: 'Required'})} 
    />
   <p>{errors.email?.message}</p>
      <FormLabel id="demo-radio-buttons-group-label">Select your gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        
      >
        <FormControlLabel 
        {...register("gender")}
        value="male" control={<Radio />} label="Male" />
        <FormControlLabel 
        {...register("gender")}
        value="female" control={<Radio />} label="Female" />
        <FormControlLabel 
        {...register("gender")}
        value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <DatePicker
        label="Date of birth"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    
    <input type="submit" />
    </div>
    </form>
    </>
  );
}