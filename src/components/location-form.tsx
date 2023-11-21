import { DatePicker } from "@mui/x-date-pickers";
import { InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const destinations = [
  { name: "La Spezia", id: 1, label: "La Spezia" },
  { name: "Cagliari", id: 2, label: "Cagliari" },
  { name: "Mordor", id: 3, label: "Mordor" },
];

export function LocationForm() {
  const {
    control,
    formState: { errors, isDirty },
  } = useFormContext();

  let destinationErrorMessage = errors.page2?.destination?.message
  let dateOfDepartureErrorMessage = errors.page2?.dateOfDeparture?.message
  let dateOfReturnErrorMessage = errors.page2?.dateOfReturn?.message

  return (
    <>
      <div className="form-container">
        <InputLabel id="demo-simple-select-label"
        error={errors.page2?.destination?.message}
        >Destination</InputLabel>
        <Controller
          name="page2.destination"
          
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Select {...field}
            >
              {destinations.map((destination) => (
                <MenuItem key={destination.id} value={destination.name}>
                  {destination.label}
                </MenuItem>
              ))}
            </Select>
          )}
          />
          <FormHelperText
          error
          >{destinationErrorMessage}</FormHelperText>
       
        <Controller
          name="page2.dateOfDeparture"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange} />
          )}
        />
    
        <FormHelperText error={true}>{dateOfDepartureErrorMessage}</FormHelperText>

        <Controller
          name="page2.dateOfReturn"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker value={value} onChange={onChange}/>
          )}
        />
        
        <FormHelperText error={true}>{dateOfReturnErrorMessage}</FormHelperText>
      </div>
    </>
  );
}
