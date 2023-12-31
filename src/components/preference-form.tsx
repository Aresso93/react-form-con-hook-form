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
  const onSubmit = (data) => console.log('AAAAAAAA', data);
  const methods = useFormContext();
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
          <FormGroup
          >
            Pick the meals you want during your stay (you can select multiple
            options)
            <Controller
            name="meals.breakfast"
            control={control}
            render={({field}) => <FormControlLabel
            checked={methods.getValues("meals.breakfast")}
            control={<Checkbox/>}
            label="Breakfast"
            {...field}
          />
          }
          />
            
            <Controller
            name="meals.lunch"
            control={control}
            render={({field}) => <FormControlLabel
            checked={methods.getValues("meals.lunch")}
            control={<Checkbox/>}
            label="Lunch"
            {...field}
          />
          }
          />

            <Controller
            name="meals.dinner"
            control={control}
            render={({field}) => <FormControlLabel
            checked={methods.getValues("meals.dinner")}
            control={<Checkbox/>}
            label="Dinner"
            {...field}
          />
          }
          />  
          </FormGroup>
          <FormGroup
          >
            Pick the activities you're interested in (you can select multiple
            options)
            <Controller
            name="activities.trekking"
            control={control}
            render={({field}) => <FormControlLabel
            checked={methods.getValues("activities.trekking")}
            control={<Checkbox/>}
            label="Trekking"
            {...field}
          />
          }
          />
            
            <Controller
            name="activities.sports"
            control={control}
            render={({field}) => <FormControlLabel
            checked={methods.getValues("activities.sports")}
            control={<Checkbox/>}
            label="Sports"
            {...field}
          />
          }
          />

            <Controller
            name="activities.yoga"
            control={control}
            render={({field}) => <FormControlLabel
            checked={methods.getValues("activities.yoga")}
            control={<Checkbox/>}
            label="Yoga"
            {...field}
          />
          }
          />  
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
}
