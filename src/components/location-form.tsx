import { DatePicker } from "@mui/x-date-pickers";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export function LocationForm() {

  const {
    formState: { errors },
    control,
  } = useFormContext();
  console.log(errors);
  return (
    <>
      <div className="form-container">
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Controller
          name="destination"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="La Spezia">La Spezia</MenuItem>
              <MenuItem value="Cagliari">Cagliari</MenuItem>
              <MenuItem value="Mordor">Mordor</MenuItem>
            </Select>
          )}
        />

        <Controller
          name="date of departure"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} 
            />
          )}
        />

        <Controller
          name="date of return"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} 
            />
          )}
        />
      </div>
    </>
  );
}
