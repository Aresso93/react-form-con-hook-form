import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

export function LocationForm() {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [age, setAge] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Destination"
          onChange={handleChange}
        >
          <MenuItem>La Spezia</MenuItem>
          <MenuItem>Cagliari</MenuItem>
          <MenuItem>Mordor</MenuItem>
        </Select>
      </FormControl>
      <DatePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />

      <DatePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </>
  );
}
