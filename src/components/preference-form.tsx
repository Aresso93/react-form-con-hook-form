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
  { id: 1, name: "hotel", label: "Hotel" },
  { id: 2, name: "campingSite", label: "Camping Site" },
  { id: 3, name: "apartment", label: "Apartment" },
];

export const meals = [
  { id: 1, name: "breakfast", label: "Breakfast" },
  { id: 2, name: "lunch", label: "Lunch" },
  { id: 3, name: "dinner", label: "Dinner" },
];

export const activities = [
  { id: 1, name: "trekking", label: "Trekking" },
  { id: 2, name: "sports", label: "Sports" },
  { id: 3, name: "yoga", label: "Yoga" },
];

export function PreferencesForm() {
  const { register, control, watch, getValues } = useFormContext();
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
