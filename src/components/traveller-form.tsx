import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function TravellerForm() {

const {register, handleSubmit, formState:{errors}} = useForm();

const onSubmit = (data: any) => {
    console.log(data)
}

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
    label="Full Name" 
    variant="outlined"
    {...register("fullName", {required: 'RICHIESTONE', minLength: {value: 6, message:'Almeno 6 caratteri'}})} 
    placeholder="hadoken" 
    />
    <p>{errors.fullName?.message}</p>
    <TextField 
    id="email" 
    label="Email address" 
    variant="outlined"
    {...register("email", {required: 'PURE QUESTO'})} 
    placeholder='shoryuken' 
    />
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <DatePicker
        label="Date of birth"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </FormControl>
    <input type="submit" />
    </div>
    </form>
    
    </>
  );
}