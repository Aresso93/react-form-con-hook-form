import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function LocationForm() {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  
  return (
    <>
    <div className="form-container">
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Destination"
        >
          <MenuItem>La Spezia</MenuItem>
          <MenuItem>Cagliari</MenuItem>
          <MenuItem>Mordor</MenuItem>
        </Select>
      </FormControl>
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
    </>
  );
}
