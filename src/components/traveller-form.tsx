import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, FieldErrors, useFormContext} from "react-hook-form";
import { IFormInput } from "../App";
import { useEffect } from "react";

export const genders = [
  { id: 1, name: "Male", label: "Male" },
  { id: 2, name: "Female", label: "Female" },
  { id: 3, name: "Other", label: "Other" },
];

export interface TravellerFormProps{
  errors: FieldErrors<IFormInput>
}

export default function TravellerForm(props: TravellerFormProps) {
  const {
    register,
    control,
  } = useFormContext();
  console.log("PRIMO FORM", props.errors);
  
  useEffect(() => {}, [props.errors]);

  return (
    <>
      <div className="form-container">
        <TextField
          id="name"
          label="Enter your full name"
          variant="outlined"
          {...register("fullName")}
        />

        {props.errors.fullName && <p>{props.errors.fullName.message}</p>}

        <TextField
          id="email"
          label="Enter your email address"
          variant="outlined"
          {...register("email")}
        />

        {props.errors.email && <p>{props.errors.email.message}</p>}

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
        {props.errors.email && <p>{props.errors.gender.message}</p>}
        <Controller
          name="date of birth"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} />
          )}
        />
      </div>
      {props.errors.dateOfBirth && <p>{props.errors.dateOfBirth.message}</p>}
    </>
  );
}
