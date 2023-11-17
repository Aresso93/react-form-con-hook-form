import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const accommodationSolutions = [
  { id: 1, name: "Hotel", label: "Hotel" },
  { id: 2, name: "Camping site", label: "Camping Site" },
  { id: 3, name: "Apartment", label: "Apartment" },
  { id: 4, name: "BnB", label: "BnB" }
];

export const meals = [
  { id: 1, name: "Breakfast", label: "Breakfast" },
  { id: 2, name: "Lunch", label: "Lunch" },
  { id: 3, name: "Dinner", label: "Dinner" },
];

export const activities = [
  { id: 1, name: "Trekking", label: "Trekking" },
  { id: 2, name: "Sports", label: "Sports" },
  { id: 3, name: "Yoga", label: "Yoga" },
];

export function PreferencesForm() {
  const { control, getValues } = useFormContext();
  const onSubmit = (data) => console.log("AAAAAAAA", data);
  const methods = useFormContext();
  console.log("PASTI", getValues("meals"));

  return (
    <>
      <div className="form-container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Accommodation
          </FormLabel>

          <div className="check-container">
            <Controller
              name="accommodation"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  {accommodationSolutions.map((accommodation) => (
                    <FormControlLabel
                      key={accommodation.id}
                      value={accommodation.name}
                      control={<Radio />}
                      label={accommodation.label}
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </div>
          <FormGroup>
            Pick the meals you want during your stay (you can select multiple
            options)
            <div className="check-container">
              {meals.map((meal) => (
                <Controller
                  key={meal.id}
                  name={`meals.${meal.name}`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      checked={methods.getValues(`meals.${meal.name}`)}
                      label={meal.label}
                      {...field}
                    />
                  )}
                />
              ))}
            </div>
          </FormGroup>
          <FormGroup>
            Pick the activities you're interested in (you can select multiple
            options)
            <div className="check-container">
              {activities.map((activity) => (
                <Controller
                  key={activity.id}
                  name={`activities.${activity.name}`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={activity.label}
                      {...field}
                    />
                  )}
                />
              ))}
            </div>
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
}
