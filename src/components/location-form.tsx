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
    formState:{errors, isDirty}
  } = useFormContext();
  
  console.log("ERRORI PAGINA 2", errors);

  return (
    <>
      <div className="form-container">
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Controller
          name="page2.destination"
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
        {errors.page2?.destination && !isDirty && <p>{errors.page2?.destination.message}</p>}
        <Controller
          name="page2.dateOfDeparture"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} 
            />
            )}
            />
            {errors.page2?.dateOfDeparture && !isDirty && <p>{errors.page2?.dateOfDeparture.message}</p>}

        <Controller
          name="page2.dateOfReturn"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} 
            />
          )}
        />
         {errors.page2?.dateOfReturn && !isDirty && <p>{errors.page2?.dateOfReturn.message}</p>}
      </div>
    </>
  );
}
