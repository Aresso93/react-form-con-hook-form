import { useFormContext } from "react-hook-form";
import EditModal from "./edit-modal";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

export default function Recap() {
  const { register, watch, getValues, handleSubmit } = useFormContext();
  const onSubmit = (data) => console.log("AAAAAAAA", data);
  let watchedMeals = watch("meals");
  let activities = watch("activities");

  function arrayDisplayer(obj: {}) {
    let objArray = Object.entries(obj);
    let tempArray = [];
    for (let i = 0; i < objArray.length; i++) {
      const element = objArray[i];
      if (element[1] === true) {
        tempArray.push(element[0]);
      }
    }
    return tempArray;
  }

  return (
    <>
      <div className="recap-container">
        <h3>Terms and conditions</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum porro
        quas doloremque beatae ratione vero sapiente id iusto magnam alias, nemo
        quod non asperiores labore quam optio. Libero, non.
        <hr />
        <small>
          PLEASE NOTE: by submitting your data you confirm that we can steal all
          of your gummy bears
        </small>
        <FormControlLabel
          {...register("accept")}
          control={<Checkbox />}
          label="I accept"
          checked={watch("accept")}
        />
        {getValues("accept") === true ? (
          <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        ) : (
          <Button variant="outlined" disabled>
            Submit
          </Button>
        )}
      </div>
      <div className="recap-modal">
        Your personal information<br></br>
        <span>Full name: {watch("fullName")}</span>
        <span>Email address: {watch("email")}</span>
        <span>Gender: {watch("gender")}</span>
        {/* <span>Date of birth: {watch("date of birth").toString()}</span> */}
        <EditModal>
          <TravellerForm />
        </EditModal>
      </div>
      <div className="recap-modal">
        Information about your travel<br></br>
        <span>Destination: {watch("destination")}</span>
        {/* <span>Date of departure: {watch("date of departure").toString()}</span>
        <span>Date of return: {watch("date of return").toString()}</span> */}
        <EditModal>
          <LocationForm />
        </EditModal>
      </div>
      <div className="recap-modal">
        Information about your preferences<br></br>
        <span>Method of accommodation: {watch("accommodation")}</span>
        Selected meals:
        <div>
          {arrayDisplayer(watchedMeals).map((meal) => (
            <div>{meal}</div>
          ))}
        </div>
        Selected activities:
        <div>
          {arrayDisplayer(activities).map((activity) => (
            <div>{activity}</div>
          ))}
        </div>
        <EditModal>
          <PreferencesForm />
        </EditModal>
      </div>
    </>
  );
}
