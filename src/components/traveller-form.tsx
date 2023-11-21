import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
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
    formState: {errors}
  } = useFormContext();
  
  useEffect(() => {}, []);
  let nameErrorMessage = errors.page1?.fullName?.message
  let emailErrorMessage = errors.page1?.email?.message
  let genderErrorMessage = errors.page1?.gender?.message
  let dateOfBirthErrorMessage = errors.page1?.dateOfBirth?.message
  
  return (
    <>
      <div className="form-container">
        <TextField
          error={nameErrorMessage}
          id="page1.fullName"
          label="Enter your full name"
          variant="outlined"
          helperText={nameErrorMessage !== undefined ? nameErrorMessage : null}
          {...register("page1.fullName")}
        />

        <TextField
          error={emailErrorMessage}
          id="email"
          label="Enter your email address"
          helperText={emailErrorMessage}
          variant="outlined"
          {...register("page1.email")}
        />

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
              <FormHelperText
               error={Boolean(true)}
              >{genderErrorMessage}</FormHelperText>
              
              </RadioGroup>
            )}
          />
        </div>
        <Controller
          name="page1.dateOfBirth"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} />
            )}
            />
            <FormHelperText>{dateOfBirthErrorMessage}</FormHelperText>
      </div>
    </>
  );
}
