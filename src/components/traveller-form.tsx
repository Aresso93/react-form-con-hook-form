import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("CAMPONE RICHIESTONE"),
  email: yup.string().required("RICHIESTO").matches(/[A-Za-z]@./)
})

export const genders = [
  { id: 1, name: "Male", label: "Male" },
  { id: 2, name: "Female", label: "Female" },
  { id: 3, name: "Other", label: "Other" },
];

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
    <div className="check-container">
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  {genders.map((gender) => (
                    <FormControlLabel
                      key={gender.id}
                      value={gender.name}
                      control={<Radio />}
                      label={gender.label}
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </div>
      
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