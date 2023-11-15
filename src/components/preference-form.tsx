import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Controller, useFormContext} from "react-hook-form";

export function PreferencesForm() {
  const { register, control, watch } = useFormContext();
  return (
    <>
      <div className="form-container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Accommodation
          </FormLabel>
          <Controller
            name="accommodation"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="hotel"
                  control={<Radio />}
                  label="Hotel"
                />
                <FormControlLabel
                  value="camping site"
                  control={<Radio />}
                  label="Camping Site"
                />
                <FormControlLabel
                  value="apartment"
                  control={<Radio />}
                  label="Apartment"
                />
              </RadioGroup>
            )}
          />
          <FormGroup>
            Pick the meals you want during your stay (you can select multiple
            options)
            <Controller
            name="breakfast"
            control={control}
            render={({field}) => <FormControlLabel
            control={<Checkbox/>}
            label="Breakfast"
            {...field}
          />
          }
          />
            
            <Controller
            name="lunch"
            control={control}
            render={({field}) => <FormControlLabel
            control={<Checkbox/>}
            label="lunch"
            {...field}
          />
          }
          />

            <Controller
            name="dinner"
            control={control}
            render={({field}) => <FormControlLabel
            control={<Checkbox/>}
            label="dinner"
            {...field}
          />
          }
          />  
          </FormGroup>
        </FormControl>
          <p>{watch("meals".toString())}</p>
      </div>
    </>
  );
}
