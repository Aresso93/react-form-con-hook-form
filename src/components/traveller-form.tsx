import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext} from "react-hook-form";
import { useEffect } from "react";

export const genders = [
  { id: 1, name: "Male", label: "Male" },
  { id: 2, name: "Female", label: "Female" },
  { id: 3, name: "Other", label: "Other" },
];

// export interface TravellerFormProps{
//   errors: FieldErrors<IFormInput>,
//   handleSubmitProp: UseFormHandleSubmit<FieldValues, undefined>
// }

export default function TravellerForm() {
  const {
    register,
    control,
    formState: {errors},
  } = useFormContext();
  console.log("PRIMO FORM", errors);
  
  
  useEffect(() => {}, []);

  return (
    <>
      <div className="form-container">
        <TextField
          id="name"
          label="Enter your full name"
          variant="outlined"
          {...register("fullName")}
        />

        {errors.fullName && <p>{errors.fullName.message}</p>}

        <TextField
          id="email"
          label="Enter your email address"
          variant="outlined"
          {...register("email")}
        />

        {errors.email && <p>{errors.email.message}</p>}

        <FormLabel id="demo-radio-buttons-group-label">
          Select your gender
        </FormLabel>
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
        {errors.gender && <p>{errors.gender.message}</p>}
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} />
          )}
        />
      </div>
      {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
    </>
  );
}
