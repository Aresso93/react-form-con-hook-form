import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";

export function LocationForm() {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const {register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit = (data) => console.log(data);
  console.log(errors)
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-container">
    
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=''
          {...register("destination", {required: true})}
        >
          <MenuItem
          value="La Spezia"
          >La Spezia</MenuItem>
          <MenuItem
          value="Cagliari"
          >Cagliari</MenuItem>
          <MenuItem
          value="Mordor"        
          >Mordor</MenuItem>
        </Select>
      
      <DatePicker
        label="Date of departure"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />

      <DatePicker
        label="Date of arrival"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
    <input type="submit" />
    </form>
    </>
  );
}
