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

export default function TravellerForm() {
  const {
    register,
    control,
    formState: {errors, isDirty},
  } = useFormContext();
  console.log("PRIMO FORM", errors.page1);
  
  useEffect(() => {}, []);

  return (
    <>
      <div className="form-container">
        <TextField
          id="name"
          label="Enter your full name"
          variant="outlined"
          {...register("page1.fullName")}
        />

        {errors.page1?.fullName && isDirty ? <p>{errors.page1?.fullName.message}</p> : null}
        {errors.page1 && !isDirty && <p>CAMPO NECESSARIO</p>}

        <TextField
          id="email"
          label="Enter your email address"
          variant="outlined"
          {...register("page1.email")}
        />

        {/* {errors.email && isDirty && <p>{errors.email.message}</p>} */}
        {errors.email && !isDirty && <p>CAMPO NECESSARIO</p>}

        <FormLabel id="demo-radio-buttons-group-label">
          Select your gender
        </FormLabel>
        <div className="check-container">
          <Controller
            name="page1.gender"
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
          name="page1.dateOfBirth"
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
