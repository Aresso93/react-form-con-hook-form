import { DatePicker } from "@mui/x-date-pickers";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const destinations = [
  {name: "La Spezia", id: 1, label: "La Spezia"},
  {name: "Cagliari", id: 2, label: "Cagliari"},
  {name: "Mordor", id: 3, label: "Mordor"}
]

export function LocationForm() {

  const {
    control,
    formState:{errors}
  } = useFormContext();

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
              {destinations.map((destination) => (
              
              <MenuItem key={destination.id} value={destination.name}>{destination.label}</MenuItem>

              ))}
            </Select>
          )}
        />
        {errors.location && <p>{errors.location.message}</p>}
        <Controller
          name="date of departure"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} 
            />
            )}
            />
            {errors.dateOfDeparture && <p>{errors.dateOfDeparture.message}</p>}

        <Controller
          name="date of return"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} 
            />
          )}
        />
        {errors.dateOfReturn && <p>{errors.dateOfReturn.message}</p>}
      </div>
    </>
  );
}
