import { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from "dayjs";

export function LocationForm(){
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
    <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
}